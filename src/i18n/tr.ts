import type { Dict } from './types';

export const tr: Dict = {
  home: {
    hero: {
      eyebrow: 'Operasyonel Yapay Zekâ · Sanayi İçin',
      titleLine1: 'Yapay zekâya operasyonunuzun',
      titleLine2: 'dilini öğrettik.',
      ctaPrimary: 'Demo Talep Et',
      ctaSecondary: 'Nasıl çalışır?',
      chips: {
        erp: 'ERP',
        mes: 'MES',
        scada: 'SCADA',
        cmms: 'CMMS',
        other: 'Diğer Sistemler',
      },
      outputsLabel: 'ÇIKTILAR',
      outputs: [
        { title: 'Kök Neden Analizi', desc: '- neden zincirini kurar' },
        { title: 'Gerçek Zamanlı Görünürlük', desc: '- canlı veriyi okur' },
        { title: 'Aksiyon', desc: '- verilen yetki içinde hareket eder' },
      ],
      chatQuestion: '3. hattın OEE değeri dün gece vardiyasında neden düştü?',
      chatPlaceholder: 'Analiz edilecek konuyu yazın...',
      analyze: 'Analiz et',
      tabs: {
        sees: 'Görür',
        understands: 'Anlar',
        takesAction: 'Harekete Geçer',
      },
    },
    statement: {
      eyebrow: 'Operasyona Özgü Yapay Zekâ',
      titleLine1: 'Sizin dilinizle düşünen,',
      titleLine2: 'kurallarınızla karar veren, sınırlarınızda kalan bir sistem',
      sub: 'Sizin kavramlarınızla düşünen, kurallarınıza göre karar veren ve çizdiğiniz sınırlar içinde hareket eden bir sistem.',
      cta: 'Demo Talep Et',
    },
    how: {
      eyebrow: 'Nasıl Çalışır',
      segments: [
        { text: 'Görür ·' },
        { text: 'Anlar', accent: true },
        { text: '· Harekete Geçer' },
      ],
      cards: [
        {
          title: 'Görür',
          body: 'Operasyonunuzun tamamındaki canlı veriyi okur: MES, ERP, SCADA, CMMS. Manuel dışa aktarma yok, rapor bekleme yok. Siz sorarsınız; cevap, o anda akan veriden gelir.',
        },
        {
          title: 'Anlar',
          body: 'Olayları bir neden zincirine bağlar. Belirtiyi değil kök nedeni bulur. Bulguları kaynağıyla birlikte açıklar — uydurmaz.',
        },
        {
          title: 'Harekete Geçer',
          body: 'Yetkilendirdiğiniz sınırlar içinde hareket eder. Bakım talebi açar, vardiya amirine haber verir, kalite kontrolünü işaretler. Yetkili, kayıtlı, geri alınabilir.',
        },
      ],
    },
    why: {
      eyebrow: 'Neden Leviora',
      segments: [
        { text: 'Genel yapay zekâ veriyi açıklar. Leviora' },
        { text: 'operasyonu anlar.', accent: true },
      ],
      bullets: [
        'Sizin verinizle, sizin dilinizle cevap verir',
        'Emin olmadığında uydurmaz',
        'Bulguları özet / tablo / kaynak ile açıklar',
        'Genel bir yapay zekâya soramayacağınız soruları cevaplar',
        'Kök nedeni, etkiyi ve örüntüyü birlikte değerlendirir',
      ],
      chat: {
        user: 'Son 14 günde hatalar nerede kümeleniyor?',
        aiName: 'LEVIORA AI',
        aiTime: '· 09.37',
        aiMeta: 'Veri Analisti · 9 adım · 923 ms · Detay',
        aiText:
          "9 Haziran'da belirgin bir kümelenme oluştu — makineye özgü bir lider yok. Tek bir makineyi güvenle işaret edemem.",
        aiBullets: [
          'Dağılım yatay: 10 makinede 1 hata.',
          'Yoğunlaşma günlük (9 Haziran), makine bazlı değil.',
          'Ana neden doğrulanamadı; veri yetersiz, uydurmuyorum.',
        ],
        placeholder: 'Analiz edilecek konuyu yazın…',
        analyze: 'Analiz et',
        live: 'Canlı',
      },
    },
    setup: {
      eyebrow: 'Kurulum',
      segments: [
        { text: 'Uzun kurulum projeleri yok.' },
        { text: 'Bağlan, eşle, kullan.', accent: true },
      ],
      items: [
        {
          title: 'Bağlan',
          tag: '1–2. Gün',
          body: 'ERP, MES, SCADA bağlantısı. Veriniz ağınızdan asla çıkmaz; Leviora ham veriyi dışarı çekmeden veya dışarıda saklamadan sistemlerinizden okur.',
        },
        {
          title: 'Eşle',
          tag: 'İlk Hafta',
          body: 'Tablolarınız ve alanlarınız, zaten kullandığınız iş nesneleriyle eşlenir — hatlar, vardiyalar, makineler, siparişler. Kod yazmadan, arayüz üzerinden tanımlanır.',
        },
        {
          title: 'Kullan',
          tag: '2. Haftadan İtibaren',
          body: 'Ekibiniz günlük dille soru sormaya başlar. Her cevap kaynağı ve gerekçesiyle gelir; yetkili aksiyonlar adım adım devreye alınır.',
        },
      ],
      panel: {
        title: 'Veriniz buradan çıkmaz.',
        network: 'Sizin Ağınız',
        center: 'Tek Merkez',
        other: 'Diğer Sistemler',
        chips: ['ERP', 'MES', 'SCADA', 'CMMS'],
      },
    },
    faq: {
      eyebrow: 'Sık Sorulan Sorular',
      segments: [{ text: 'Dürüst' }, { text: 'Cevaplar.', accent: true }],
      items: [
        {
          q: 'Verim güvende mi? KVKK uyumlu musunuz?',
          a: 'Veriniz ağınızdan asla çıkmaz. Leviora sistemlerinizi gerçek zamanlı okur; ham veriyi dışarı kopyalamaz, dışarıda saklamaz. Veri dışarı çıkmadığı için KVKK açısından da en güvenli zemindesiniz. Demo sırasında mimariyi ayrıntılarıyla anlatmaktan memnuniyet duyarız.',
        },
        {
          q: 'Leviora cevabı bilmiyorsa ne yapar?',
          a: 'Bilmiyorum der. Veri yetersizse ya da neden doğrulanamıyorsa Leviora bunu açıkça söyler — neyi kontrol ettiğini ve neyin eksik olduğunu da. Tahmin etmez, uydurmaz.',
        },
        {
          q: 'Sorduğum her şeye yardımcı olur mu?',
          a: 'Operasyon verinizin cevaplayabildiği her konuda yardımcı olur — üretim, duruş, kalite, bakım, enerji. Genel amaçlı bir sohbet robotu değildir; operasyonunuzun dışındaki sorular kapsam dışıdır ve bunu dürüstçe söyler.',
        },
        {
          q: 'Leviora ne kadar yetkiye sahip?',
          a: 'Tam olarak sizin verdiğiniz kadar. Her aksiyon türünü siz tanımlar ve onaylarsınız — yalnızca bildirimden iş emri açmaya kadar. Her aksiyon yetkilidir, kayıtlıdır ve geri alınabilir.',
        },
        {
          q: 'Ne kadar hızlı kullanmaya başlayabiliriz?',
          a: 'Bağlantı 1–2 gün sürer, eşleme ilk haftada yapılır, ekibiniz ikinci haftadan itibaren kullanmaya başlar. İsteğe bağlı 30 günlük pilot kendi verinizde çalışır — karar tamamen sizindir.',
        },
      ],
    },
  },
  product: {
    hero: {
      eyebrow: 'Merkezî Kurumsal Zekâ',
      titleLine1: 'Üç katman,',
      titleLine2: 'tek bir Merkezî Kurumsal Zekâ.',
      sub: 'Operasyonu anlayan yapay zekâ tek bir parçadan oluşmaz. Üç katman birlikte çalışır: ne olduğunu, neden olduğunu ve ne yapılması gerektiğini birbirine bağlar.',
      ctaPrimary: 'Demo Talep Et',
      ctaSecondary: 'Mimariyi İncele',
      conclusion: {
        tag: 'SONUÇ',
        title: 'Merkezî Kurumsal Zekâ',
        body: 'Üç katman birleşir; ortaya operasyonu anlayan tek bir zekâ çıkar — o da Leviora’dır.',
      },
      layers: [
        {
          title: 'Ortak Veri Dili',
          q: 'Ne oldu?',
          body: 'Her sistem farklı konuşur. Leviora hepsini tek bir dilde birleştirir.',
        },
        {
          title: 'İlişki Haritası',
          q: 'Neden oldu?',
          body: 'Hatların, vardiyaların, makinelerin ve siparişlerin ilişkisini öğrenir; bir olayın zincirini izler.',
        },
        {
          title: 'İş Kuralları Motoru',
          q: 'Ne yapılmalı?',
          body: 'Eşikleriniz, limitleriniz ve istisnalarınız operasyonel kurallara dönüşür.',
        },
      ],
    },
    three: {
      eyebrow: 'Merkezî Kurumsal Zekâ',
      segments: [
        { text: 'Üç katman, tek bir' },
        { text: 'Merkezî Kurumsal Zekâ.', accent: true },
      ],
      sub: 'Operasyonu anlayan yapay zekâ tek parçadan oluşmaz. Üç katman birlikte çalışır — ne olduğunu, neden olduğunu ve ne yapılacağını birbirine bağlar.',
      closing:
        'Üçü birleştiğinde, Merkezî Kurumsal Zekânız operasyonunuzun gerçekte nasıl işlediğine dair tek ve yapılandırılmış bir kavrayış oluşturur.',
      cards: [
        {
          title: 'Ortak Veri Dili',
          q: 'Ne oldu?',
          body: 'Her sistem farklı konuşur. Hepsini tek bir dilde birleştirir.',
        },
        {
          title: 'İlişki Haritası',
          q: 'Neden oldu?',
          body: 'Hatların, vardiyaların, makinelerin ve siparişlerin ilişkisini öğrenir; olayın zincirini izler.',
        },
        {
          title: 'İş Kuralları Motoru',
          q: 'Ne yapılmalı?',
          body: 'Eşikleriniz, limitleriniz ve istisnalarınız operasyonel kurallara dönüşür.',
        },
      ],
      aiName: 'LEVIORA AI',
      aiTime: '· 09.37',
      aiMeta: 'Veri Analisti · 9 adım · 923 ms · Detay',
      placeholder: 'Analiz edilecek konuyu yazın…',
      analyze: 'Analiz et',
      live: 'Canlı',
    },
    capabilities: {
      sees: {
        title: 'Görür',
        body: 'Leviora, operasyonunuzun tamamındaki canlı veriyi okur: MES, ERP, SCADA, CMMS. Manuel dışa aktarma yok, rapor bekleme yok. Siz sorarsınız; cevap, o anda akan veriden gelir.',
        bullets: [
          'Bağlı tüm sistemlerde anlık görünürlük',
          'Doğal dille sorgu — SQL yok, pano kurulumu yok',
          'Bağlamı kendisi kurar: hangi hat, vardiya, parti bilir',
          'Cevaplar canlı veriden gelir',
        ],
        chat: {
          user: '3. hattın OEE değeri şu an ne?',
          aiName: 'LEVIORA AI',
          aiTime: '· 09.37',
          aiMeta: 'Veri Analisti · 9 adım · 923 ms · Detay',
          aiText:
            '%72. Hedef %85. Son 2 saatte 18 dakika plansız duruş. En büyük neden: B Kalıbı değişimi — 10 dakikalık standarda karşı 22 dakika.',
          source: 'operasyon verinizden',
          sourceLink: 'Kaynağı Gör',
          placeholder: 'Analiz edilecek konuyu yazın…',
          analyze: 'Analiz et',
          live: 'Canlı',
        },
      },
      understands: {
        title: 'Anlar',
        body: 'Leviora olayları bir neden zincirine bağlar — geç başlayan vardiya, geciken kalıp değişimi, haftalardır tekrarlayan örüntü — ve kök nedeni bulur. Yalnızca bir sayı raporlamaz; nedenini açıklar.',
        bullets: [
          'Olaylar arasında neden-sonuç zincirini kurar',
          'Belirtiyi değil kök nedeni bulur',
          'Tekrarlayan örüntüleri yakalar',
          'Bulguları kaynağıyla açıklar — uydurmaz',
        ],
        chat: {
          user: '3. hattın OEE değeri neden düştü?',
          aiName: 'LEVIORA AI',
          aiTime: '· 09.37',
          aiMeta: 'Plansız Duruş Uyarısı',
          aiText:
            'Kök neden: B Ürünü kalıp değişimi, üst üste üçüncü haftadır standart süreyi 3 kat aştı.',
          source: 'operasyon verinizden',
          sourceLink: 'Kaynağı Gör',
          placeholder: 'Analiz edilecek konuyu yazın…',
          analyze: 'Analiz et',
          live: 'Canlı',
        },
      },
      takesAction: {
        title: 'Harekete Geçer',
        body: 'Leviora, yetkilendirdiğiniz sınırlar içinde hareket eder. Bakım talebi açar, vardiya amirine haber verir, kalite kontrolünü işaretler. Her aksiyon yetkilidir, kayıtlıdır ve geri alınabilir. Öneri veren bir sohbet değil — sınırlarınız içinde çalışan bir sistem.',
        bullets: [
          'Yalnızca yetkilendirdiğiniz sınırlar içinde',
          'Her aksiyon kayıtlı ve geri alınabilir',
          'Her modülün ne yapabileceğini siz tanımlarsınız',
          'Eşik aşıldığında kendi başına harekete geçer',
        ],
        chat: {
          user: '3. hattın OEE değeri şu an ne?',
          aiName: 'LEVIORA AI',
          aiTime: '· 09.37',
          aiMeta: 'Operasyon Analisti · 4 adım · 512 ms · Detay',
          aiText: '',
          facts: [
            { label: 'KOŞUL', value: 'Duruş 10 dakikayı aşarsa' },
            { label: 'AKSİYON', value: 'Vardiya amirine haber ver' },
            { label: 'YETKİ', value: 'Üretim Müdürü Onayı · Yalnızca Bildirim' },
          ],
          placeholder: 'Analiz edilecek konuyu yazın…',
          analyze: 'Analiz et',
          live: 'Canlı',
        },
      },
    },
  },
  cta: {
    eyebrow: 'Bize Ulaşın',
    segments: [
      { text: "Leviora'yı kendi operasyonunuzda" },
      { text: 'çalışırken görmek ister misiniz?', accent: true },
    ],
    sub: '30 dakikalık demo. 30 günlük pilot. Karar tamamen sizin.',
    primary: 'Demo Talep Et',
    secondary: 'Nasıl çalışır?',
  },
  nav: {
    home: 'Ana Sayfa',
    product: 'Ürün',
    solutions: 'Çözümler',
    about: 'Hakkımızda',
    requestDemo: 'Demo Talep Et',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
  },
  footer: {
    tagline:
      'Sizin dilinizle düşünen, sizin kurallarınızla karar veren, sizin sınırlarınız içinde hareket eden operasyonel yapay zekâ.',
    company: 'Şirket',
    platform: 'Platform',
    others: 'Diğer',
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    contact: 'İletişim',
    product: 'Ürün',
    solutions: 'Çözümler',
    requestDemo: 'Demo Talep Et',
    faq: 'Sık Sorulan Sorular',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    kvkk: 'KVKK Aydınlatma Metni',
    rights: '© 2026 Leviora. Tüm hakları saklıdır.',
  },
  meta: {
    home: {
      title: 'Leviora — Sanayi İçin Operasyonel Yapay Zekâ',
      description:
        'Leviora, operasyonunuzun tamamındaki canlı veriyi okur; yönetilen cevaplara ve eyleme dönüştürür. Yapay zekâya operasyonunuzun dilini öğrettik.',
    },
    product: {
      title: 'Ürün — Leviora',
      description:
        'Üç katman, tek bir merkezî kurumsal zekâ: ortak veri dili, ilişki haritası ve iş kuralları motoru birlikte çalışır.',
    },
    solutions: {
      title: 'Çözümler — Leviora',
      description:
        'Operasyon neredeyse Leviora orada. Operasyonunuza neler sorabileceğinizi ve size uygun paketi görün.',
    },
    about: {
      title: 'Hakkımızda — Leviora',
      description:
        'İki yapay zekâ mühendisi ve bir sanayi yöneticisi; operasyonun dilini konuşan zekâyı inşa ediyoruz.',
    },
    contact: {
      title: 'Demo Talep Et — Leviora',
      description:
        'Ücretsiz 30 dakikalık görüşme planlayın. Kendi sorularınız, canlı veri üzerinde. Veriniz kendi ağınızda kalır.',
    },
    privacy: {
      title: 'Gizlilik Politikası — Leviora',
      description:
        'Leviora bilgilerinizi nasıl toplar, kullanır ve korur.',
    },
    terms: {
      title: 'Kullanım Koşulları — Leviora',
      description: 'Leviora web sitesinin kullanımını düzenleyen koşullar.',
    },
    kvkk: {
      title: 'KVKK Aydınlatma Metni — Leviora',
      description:
        '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
    },
    notFound: {
      title: 'Sayfa Bulunamadı — Leviora',
      description: 'Aradığınız sayfa mevcut değil.',
    },
  },
  notFound: {
    heading: 'Sayfa bulunamadı.',
    body: 'Aradığınız sayfa taşınmış ya da artık mevcut olmayabilir.',
    backHome: 'Ana sayfaya dön',
  },
};
