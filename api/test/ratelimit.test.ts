import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RateLimiter, clientKey } from '../src/ratelimit.js';

test('clientKey keeps IPv4 and folds IPv6 to its /64', () => {
  assert.equal(clientKey('203.0.113.7'), '203.0.113.7');
  assert.equal(clientKey(' 203.0.113.7 '), '203.0.113.7');
  assert.equal(clientKey('2001:db8:1:2:aaaa::1'), '2001:db8:1:2::/64');
  assert.equal(clientKey('2001:db8:1:2:ffff:ffff:ffff:ffff'), '2001:db8:1:2::/64');
  assert.equal(clientKey('2001:DB8:0001:0002::9'), '2001:db8:1:2::/64');
  assert.equal(clientKey('[2001:db8:1:2::5]'), '2001:db8:1:2::/64');
  assert.equal(clientKey('fe80::1%eth0'), 'fe80:0:0:0::/64');
  assert.equal(clientKey('::'), '0:0:0:0::/64');
});

test('clientKey maps IPv4-mapped IPv6 to the IPv4 address', () => {
  assert.equal(clientKey('::ffff:198.51.100.4'), '198.51.100.4');
  assert.equal(clientKey('::ffff:c633:6404'), '198.51.100.4');
});

test('clientKey puts non-addresses in one bucket', () => {
  assert.equal(clientKey(undefined), 'unknown');
  assert.equal(clientKey(''), 'unknown');
  assert.equal(clientKey('not-an-ip'), 'unknown');
  assert.equal(clientKey('1.2.3.4, 5.6.7.8'), 'unknown');
});

test('addresses rotated inside one /64 share one budget', () => {
  const l = new RateLimiter({ maxPerKey: 5 });
  const t = 1_000_000;
  for (let i = 1; i <= 5; i++) {
    assert.equal(l.hit(clientKey(`2001:db8:1:2::${i.toString(16)}`), t), true);
  }
  assert.equal(l.hit(clientKey('2001:db8:1:2::ffff'), t), false);
  assert.equal(l.hit(clientKey('2001:db8:1:3::1'), t), true);
});

test('per-key budget resets after the window', () => {
  const l = new RateLimiter({ maxPerKey: 2, windowMs: 1000 });
  assert.equal(l.hit('a', 0), true);
  assert.equal(l.hit('a', 1), true);
  assert.equal(l.hit('a', 2), false);
  assert.equal(l.hit('a', 1002), true);
});

test('the tracked key count is capped, least recently seen evicted first', () => {
  const l = new RateLimiter({ maxKeys: 3, maxPerKey: 1 });
  l.hit('a', 0);
  l.hit('b', 0);
  l.hit('c', 0);
  assert.equal(l.hit('a', 1), false); // a is now the most recently seen
  l.hit('d', 1); // evicts b
  assert.equal(l.size, 3);
  assert.equal(l.hit('b', 2), true); // b was forgotten (evicts c)
  assert.equal(l.hit('a', 2), false); // a was kept
});

test('sweep drops keys whose attempts all expired', () => {
  const l = new RateLimiter({ windowMs: 1000 });
  l.hit('a', 0);
  l.hit('b', 900);
  l.sweep(1500);
  assert.equal(l.size, 1);
  l.sweep(2000);
  assert.equal(l.size, 0);
});

test('the global send budget caps sends per window and refills', () => {
  const l = new RateLimiter({ globalMaxSends: 2, globalWindowMs: 1000 });
  assert.equal(l.globalAvailable(0), true);
  assert.equal(l.takeGlobal(0), true);
  assert.equal(l.takeGlobal(10), true);
  assert.equal(l.globalAvailable(20), false);
  assert.equal(l.takeGlobal(20), false);
  assert.equal(l.takeGlobal(1001), true);
});

test('start/stop do not keep the process alive', () => {
  const l = new RateLimiter();
  l.start(10);
  l.stop();
});
