import type { Dict } from './types';

export const tr: Dict = {
  home: {
    hero: {
      eyebrow: 'Sanayiye Özel Operasyonel Yapay Zekâ',
      titleLine1: 'Yapay zekâya',
      titleLine2: 'operasyonunuzun dilini öğrettik.',
      ctaPrimary: 'Demo Talep Edin',
      ctaSecondary: 'Nasıl çalışır?',
      chips: {
        erp: 'ERP',
        mes: 'MES',
        scada: 'SCADA',
        cmms: 'CMMS',
        other: 'Diğer Sistemler',
      },
      outputs: [
        { title: 'Anlık Görünürlük', desc: 'canlı veriyi okur', tab: 'sees' },
        { title: 'Kök Neden Analizi', desc: 'sebep zincirini kurar', tab: 'understands' },
        { title: 'Aksiyon', desc: 'verilen yetki dahilinde aksiyon alır', tab: 'takesAction' },
      ],
      chatPlaceholder: 'Analiz edilecek konuyu yazın...',
      analyze: 'Analiz et',
      tabs: {
        sees: 'Görür',
        understands: 'Anlar',
        takesAction: 'Aksiyon Alır',
      },
      tabQuestions: {
        sees: 'Şu an 3. hatta OEE kaç, son 2 saatte kaç dakika duruş oldu?',
        understands: '3. hattaki OEE düşüşünün kök nedeni ne, hangi olaylar tetikledi?',
        takesAction: 'Plansız duruş 10 dakikayı aşarsa vardiya şefine bildirim gönder.',
      },
      tabAnswers: {
        sees: 'OEE %72 — son 2 saatte 18 dakika plansız duruş var.',
        understands: 'Kök neden: B kalıbı değişimi standart sürenin 3 katını aştı.',
        takesAction: 'Vardiya amirine bildirim gönderildi — onayınız bekleniyor.',
      },
    },
    statement: {
      eyebrow: 'OPERASYONUN OLDUĞU HER YER',
      titleLine1: 'Üretim hattından enerji santraline,',
      titleLine2: 'depodan üretim tesisine.',
      cta: 'Demo Talep Edin',
      industries: [
        'Otomotiv & yan sanayi',
        'Metal & makine imalatı',
        'Gıda & içecek',
        'İlaç',
        'Kimya',
        'Tekstil',
        'Çimento & yapı malzemeleri',
        'Maden',
        'Enerji üretimi',
      ],
      collageAlt:
        "Leviora'nın çalıştığı dokuz sektörden oluşan kolaj: otomotiv, metal ve makine imalatı, gıda ve içecek, ilaç, kimya, tekstil, çimento, maden ve enerji üretimi.",
    },
    how: {
      eyebrow: 'Nasıl Çalışır',
      segments: [
        { text: 'Görür ·' },
        { text: 'Anlar', accent: true },
        { text: '· Aksiyon Alır' },
      ],
      cards: [
        {
          title: 'Görür',
          body: 'Operasyonunuzun tamamındaki canlı veriyi okur: MES, ERP, SCADA, CMMS. Elle veri çekmek yok, rapor beklemek yok. Siz sorarsınız; cevap o anda akan veriden gelir.',
        },
        {
          title: 'Anlar',
          body: 'Olayları bir neden zincirine bağlar. Belirtiyi değil kök nedeni bulur. Bulguları kaynağıyla birlikte açıklar; uydurmaz.',
        },
        {
          title: 'Aksiyon Alır',
          body: 'Yalnızca izin verdiğiniz sınırlar içinde hareket eder: bakım talebi açar, vardiya amirine haber verir, kalite kontrolü işaretler. Her adım yetkili, kayıtlı ve geri alınabilir.',
        },
      ],
    },
    why: {
      eyebrow: 'Neden Leviora',
      segments: [
        { text: 'Genel yapay zekâ veriyi anlatır.' },
        { text: 'Leviora operasyonu anlar.', accent: true },
      ],
      bullets: [
        'Sizin verinizle, sizin dilinizle cevap verir',
        'Emin olmadığında uydurmaz',
        'Bulguyu özet, tablo ve kaynakla açıklar',
        'Genel bir yapay zekâya soramayacağınız soruları cevaplar',
        'Kök nedeni, etkiyi ve örüntüyü birlikte değerlendirir',
      ],
      chat: {
        user: 'Son 14 günde hatalar nerede kümeleniyor?',
        aiName: 'LEVIORA AI',
        aiTime: '· 09.37',
        aiMeta: 'operasyon verinizden · 923 ms · Kaynağı Gör',
        aiText:
          "Belirgin kümelenme 9 Haziran'da; makineye özgü bir yoğunlaşma yok. Tek bir makineyi güvenle işaret edemem.",
        aiBullets: [
          'Dağılım yatay: 10 makinede 1 hata.',
          'Yoğunlaşma güne bağlı (9 Haziran), makineye değil.',
          'Ana neden doğrulanamadı; veri yetersiz. Uydurmuyorum.',
        ],
        chart: [28, 35, 22, 30, 26, 32, 24, 30, 92, 34, 27, 31, 25, 29],
        chartCaption: 'Günlere göre hatalar — son 14 gün',
        placeholder: 'Analiz edilecek konuyu yazın...',
        analyze: 'Analiz et',
        live: 'Canlı',
      },
    },
    setup: {
      eyebrow: 'Kurulum',
      segments: [
        { text: 'Aylar süren kurulum yok.' },
        { text: 'Bağlanın, eşleyin, kullanın.', accent: true },
      ],
      items: [
        {
          title: 'Bağlanın',
          body: 'ERP, MES ve SCADA bağlantısı kurulur. Veriniz ağınızdan çıkmaz: Leviora ham veriyi dışarı taşımadan, sistemlerinizden okur.',
        },
        {
          title: 'Eşleyin',
          body: 'Tablolarınız ve alanlarınız, zaten kullandığınız iş kavramlarıyla eşlenir: hatlar, vardiyalar, makineler, siparişler. Kod yazmadan, arayüz üzerinden.',
        },
        {
          title: 'Kullanın',
          body: 'Ekibiniz sorularını günlük dille sorar. Her cevap kaynağı ve gerekçesiyle gelir; yetkili aksiyonlar adım adım devreye alınır.',
        },
      ],
      panel: {
        title: 'Veriniz buradan çıkmaz.',
        network: 'Sizin Ağınız',
        center: 'Tek Merkez',
        other: 'Diğer Sistemler',
        chips: ['ERP', 'MES', 'SCADA', 'CMMS'],
      },
      mapView: {
        title: 'Tablolar iş kavramlarına dönüşür.',
        pairs: [
          { from: 'PRD_ORD_T', to: 'Sipariş' },
          { from: 'MCH_STA_01', to: 'Makine' },
          { from: 'SHFT_LOG_V2', to: 'Vardiya' },
          { from: 'DT_EVNT_RAW', to: 'Duruş' },
        ],
      },
      useView: {
        title: 'Ekibiniz sadece sorar.',
        question: 'Bu hafta en çok duruş hangi hatta oldu?',
        answer: 'Hat 2 — 41 dakika; çoğu vardiya geçişlerinde.',
        meta: 'Kaynağı ve gerekçesi ekli',
      },
    },
    faq: {
      eyebrow: 'Sık Sorulan Sorular',
      segments: [{ text: 'Dürüst' }, { text: 'cevaplar.', accent: true }],
      items: [
        {
          q: 'Verilerim güvende mi? KVKK uyumlu musunuz?',
          a: 'Veriniz ağınızdan hiç çıkmaz. Leviora sistemlerinizi gerçek zamanlı okur; ham veriyi dışarı kopyalamaz, dışarıda saklamaz. Veri dışarı çıkmadığı için KVKK açısından da en güvenli konumdasınız. Demoda mimariyi bütün ayrıntısıyla anlatmaktan memnuniyet duyarız.',
        },
        {
          q: 'Leviora cevabı bilmiyorsa ne yapar?',
          a: 'Bilmediğini söyler. Veri yetersizse ya da neden doğrulanamıyorsa bunu açıkça belirtir: neyi kontrol ettiğini de, neyin eksik olduğunu da. Tahmin yürütmez, uydurmaz.',
        },
        {
          q: 'Sorduğum her şeye yardımcı olur mu?',
          a: 'Operasyon verinizin cevaplayabildiği her konuda yardımcı olur: üretim, duruş, kalite, bakım, enerji. Genel amaçlı bir sohbet robotu değildir; operasyonunuzun dışındaki sorular kapsam dışıdır ve bunu açıkça söyler.',
        },
        {
          q: 'Leviora ne kadar yetkiye sahip?',
          a: 'Tam olarak sizin verdiğiniz kadar. Her aksiyon türünü siz tanımlar, siz onaylarsınız: yalnızca bildirim göndermekten iş emri açmaya kadar. Her aksiyon yetkilidir, kayıt altındadır ve geri alınabilir.',
        },
        {
          q: 'Ne kadar sürede kullanmaya başlarız?',
          a: 'İlk günden operasyonunuzun dilini konuşur. Alışma süreci, eğitim ya da kullanıcı kılavuzu gerektirmez.',
        },
      ],
    },
  },
  product: {
    hero: {
      eyebrow: 'ÜRÜN MİMARİSİ',
      titleLine1: 'Operasyonunuzu yöneten sistemlerin',
      titleLine2: 'üstüne kurulu tek bir zekâ.',
      sub: 'Üç katmanlı mimari, üç temel yetenek — operasyonunuza özel öğrenen tek bir sistem.',
      ctaPrimary: 'Demo talep et',
      ctaSecondary: 'Mimariyi incele',
      conclusion: {
        title: 'Merkezi Kurumsal Zekâ',
        body: 'Semantik katman ve ontoloji birlikte çalıştığında anlayış aksiyona dönüşür.',
      },
      stages: {
        semantic: {
          label: 'Semantik Katman',
          systems: ['ERP', 'MES', 'SCADA', 'CMMS'],
          vocabLabel: 'Tek ortak sözlük',
          vocabTerms: ['OEE', 'Duruş', 'Kalıp Değişimi', 'İş Emri'],
        },
        ontology: {
          label: 'Ontoloji',
          caption: 'Tek bir olayın neden zinciri, hat boyunca izlenir',
          nodes: {
            operator: 'Operatör · A Vardiyası',
            machine: 'Makine M-041',
            line: '3. Hat',
            order: 'Sipariş #8842',
            mold: 'B Kalıbı',
            downtime: 'Duruş 18 dk',
          },
        },
        actions: {
          label: 'İş Aksiyonları',
          items: [
            { text: 'Vardiya amirine bildirim gönder', status: 'Gönderildi — onayınız bekleniyor' },
            { text: 'B kalıbı için CMMS iş emri aç', status: 'Taslak hazır' },
            { text: 'Sonraki kalıp değişimini yeniden planla', status: 'Verilen yetki dahilinde' },
          ],
        },
      },
      layers: [
        {
          title: 'Semantik Katman',
          q: 'Ne oldu?',
          body: "ERP, MES, SCADA ve CMMS'in her biri kendi dilini konuşur. Semantik katman hepsini tek ortak sözlüğe çevirir.",
        },
        {
          title: 'Ontoloji',
          q: 'Neden oldu?',
          body: 'Operasyonunuzun yaşayan modeli — makineler, siparişler, vardiyalar ve hatlar birbirine nasıl bağlı, her olayın arkasındaki zincir ne.',
        },
        {
          title: 'İş Aksiyonları',
          q: 'Ne yapılmalı?',
          body: 'Anlayış aksiyona dönüşür: kurallar, eşikler ve onaylar cevabı operasyonel bir hamleye çevirir.',
        },
      ],
    },
    three: {
      eyebrow: 'Merkezi Kurumsal Zekâ',
      segments: [
        { text: 'Üç katman,' },
        { text: 'bir Merkezi Kurumsal Zekâ.', accent: true },
      ],
      sub: 'Operasyonu anlayan yapay zekâ tek parçadan oluşmaz. Üç katman birlikte çalışır; ne olduğunu, neden olduğunu ve ne yapılacağını birbirine bağlar.',
      closing:
        "Üçü birleştiğinde Merkezi Kurumsal Zekâ'nız oluşur — operasyonunuzun gerçekte nasıl çalıştığına dair tek ve yapılandırılmış bir anlayış.",
      cards: [
        {
          title: 'Semantik Katman',
          q: 'Ne oldu?',
          body: 'Her sistem kendi dilini konuşur. Semantik katman hepsini tek ortak sözlükte birleştirir.',
        },
        {
          title: 'Ontoloji',
          q: 'Neden oldu?',
          body: 'Makinelerin, siparişlerin, vardiyaların ve hatların ilişkisini öğrenir; her olayın arkasındaki zinciri izler.',
        },
        {
          title: 'İş Aksiyonları',
          q: 'Ne yapılmalı?',
          body: 'Eşikleriniz, limitleriniz ve onaylarınız anlayışı operasyonel aksiyona dönüştürür.',
        },
      ],
      aiName: 'LEVIORA AI',
      aiTime: '· 09.37',
      aiMeta: 'operasyon verinizden · 923 ms · Kaynağı Gör',
      placeholder: 'Analiz edilecek konuyu yazın...',
      analyze: 'Analiz et',
      live: 'Canlı',
    },
    capabilities: {
      sees: {
        title: 'Görür',
        body: 'Leviora, operasyonunuzun tamamındaki canlı veriyi okur: MES, ERP, SCADA, CMMS. Elle veri çekmek yok, rapor beklemek yok. Siz sorarsınız; cevap o anda akan veriden gelir.',
        bullets: [
          'Bağlı tüm sistemlerde anlık görünürlük',
          'Günlük dille soru; SQL yok, pano kurmak yok',
          'Bağlamı kendisi kurar: hangi hat, hangi vardiya, hangi parti',
          'Cevaplar canlı veriden gelir',
        ],
        chat: {
          user: "3. hattın OEE'si şu an kaç?",
          aiName: 'LEVIORA AI',
          aiTime: '· 09.37',
          aiMeta: 'operasyon verinizden · 923 ms · Kaynağı Gör',
          aiText:
            'Yüzde 72; hedef yüzde 85. Son 2 saatte 18 dakika plansız duruş var. En büyük neden B kalıbının değişimi: standart 10 dakikayken 22 dakika sürmüş.',
          chart: [82, 79, 76, 71, 68, 72],
          chartCaption: 'Saatlik OEE — 3. hat',
          source: 'operasyon verinizden',
          sourceLink: 'Kaynağı Gör',
          placeholder: 'Analiz edilecek konuyu yazın...',
          analyze: 'Analiz et',
          live: 'Canlı',
        },
      },
      understands: {
        title: 'Anlar',
        body: 'Leviora olayları bir neden zincirine bağlar: geç başlayan vardiya, uzayan kalıp değişimi, haftalardır tekrarlayan örüntü. Kök nedeni bulur; yalnızca bir sayı söylemez, nedenini de açıklar.',
        bullets: [
          'Olaylar arasındaki neden-sonuç zincirini kurar',
          'Belirtiyi değil kök nedeni bulur',
          'Tekrarlayan örüntüleri yakalar',
          'Bulguyu kaynağıyla açıklar; uydurmaz',
        ],
        chat: {
          user: "3. hattın OEE'si neden düştü?",
          aiName: 'LEVIORA AI',
          aiTime: '· 09.37',
          aiMeta: 'kök neden · etki · örüntü',
          aiText:
            'Kök neden: B ürününün kalıp değişimi, üst üste üçüncü haftadır standart sürenin 3 katını aşıyor.',
          source: 'operasyon verinizden',
          sourceLink: 'Kaynağı Gör',
          placeholder: 'Analiz edilecek konuyu yazın...',
          analyze: 'Analiz et',
          live: 'Canlı',
        },
      },
      takesAction: {
        title: 'Aksiyon Alır',
        body: 'Leviora, izin verdiğiniz sınırlar içinde harekete geçer: bakım talebi açar, vardiya amirine haber verir, kalite kontrolü işaretler. Her aksiyon yetkili, kayıtlı ve geri alınabilir. Öneride bırakan bir sohbet robotu değil; sınırlarınız içinde iş yapan bir sistem.',
        bullets: [
          'Yalnızca izin verdiğiniz sınırlar içinde',
          'Her aksiyon kayıtlı ve geri alınabilir',
          'Hangi modülün ne yapabileceğini siz belirlersiniz',
          'Eşik aşıldığında kendiliğinden harekete geçer',
        ],
        chat: {
          user: 'Plansız duruş 10 dakikayı aşarsa vardiya şefine bildirim gönder.',
          aiName: 'LEVIORA AI',
          aiTime: '· 09.37',
          aiMeta: 'operasyon verinizden · 512 ms · Kaynağı Gör',
          aiText: '',
          facts: [
            { label: 'KOŞUL', value: 'Duruş 10 dakikayı aşarsa' },
            { label: 'AKSİYON', value: 'Vardiya amirine haber ver' },
            { label: 'YETKİ', value: 'Üretim Müdürü onayı · Yalnızca bildirim' },
          ],
          placeholder: 'Analiz edilecek konuyu yazın...',
          analyze: 'Analiz et',
          live: 'Canlı',
        },
      },
    },
  },
  solutions: {
    hero: {
      eyebrow: 'Sanayiye Özel Operasyonel Yapay Zekâ',
      titleLine1: 'Operasyon olan her yerde',
      titleLine2: 'Leviora var.',
      sub: 'Bir sektör listesi değil; makinelerin, insanların ve kararların buluştuğu her yere uyan bir çalışma biçimi.',
      ctaPrimary: 'Demo Talep Edin',
      ctaSecondary: 'Nasıl çalışır?',
    },
    scenarios: {
      eyebrow: 'Kullanım Senaryoları',
      segments: [
        { text: 'Operasyonunuza' },
        { text: 'neler sorabilirsiniz?', accent: true },
      ],
      colScenario: 'Senaryo',
      colQuestion: 'Örnek soru',
      rows: [
        { scenario: 'Üretim hattı', question: 'B hattı bu sabah neden geç başladı?' },
        { scenario: 'Duruş ve OEE', question: 'Bu hafta en çok duruş hangi hatta oldu?' },
        { scenario: 'Fire ve kalite', question: 'Hangi üründe fire artıyor, neden?' },
        { scenario: 'Bakım', question: 'Hangi ekipman arıza riskine yaklaşıyor?' },
        { scenario: 'Enerji', question: 'Tüketim dün gece neden yükseldi?' },
      ],
    },
    packages: {
      eyebrow: 'PAKETLER & ÖLÇEK',
      segments: [
        { text: 'Tek senaryodan' },
        { text: 'tüm operasyona.', accent: true },
      ],
      sub: 'Hayal değil, somut çıktı üzerinden ilerleyen bir keşif.',
      tiers: [
        {
          name: 'Başlangıç',
          features: [
            'Tek senaryoyla canlı kullanım',
            'Kendi gerçek verinizle pilot',
            'Hızlı değer kanıtı',
            'Canlı veride gerçek soru-cevap',
          ],
          cta: 'Görüşelim',
        },
        {
          name: 'Yaygınlaştırma',
          features: [
            'Operasyonun genelinde kullanım',
            'Kök neden, uyarı ve özet modülleri bir arada',
            'Otomatik uyarılar (eşik ve anomali)',
            'MES, SCADA ve CMMS entegrasyonu',
            'Çoklu kullanıcı',
          ],
          cta: 'Görüşelim',
        },
        {
          name: 'Kurumsal',
          features: [
            'Çok tesisli kurulum',
            'Şirket içi veya özel bulut',
            'Tüm sistemlerle entegrasyon',
            'Rol tabanlı yetkilendirme',
            'Kurumun belirlediği aksiyon limitleri',
            'Sınırsız kullanıcı',
            'Tesisler arası raporlama',
            'Öncelikli destek',
          ],
          cta: 'Görüşelim',
          highlighted: true,
        },
      ],
    },
    notFor: {
      eyebrow: 'Kapsam Dışı',
      segments: [{ text: 'Herkese göre' }, { text: 'değiliz.', accent: true }],
      body: 'Leviora, okunacak gerçek ve canlı sistemleri olan operasyonlar için kuruldu. Bağlanacak operasyon veriniz yoksa ya da genel amaçlı bir ofis sohbet robotu arıyorsanız, açık konuşalım: aradığınız biz değiliz. Bunu size dürüstçe söyleriz.',
    },
  },
  contact: {
    hero: {
      eyebrow: 'Bize Ulaşın',
      titleLine1: "Leviora'yı kendi",
      titleLine2: 'şartlarınızda görün.',
      bullets: [
        { title: '30 dakikalık görüşme:', desc: 'operasyonunuz üzerine gerçek bir sohbet' },
        { title: 'Kendi sorularınızla:', desc: 'ürünü canlı veri üzerinde gösteririz' },
        { title: 'Veriniz ağınızda kalır:', desc: 'dışarı çıkmaz' },
      ],
    },
    form: {
      title: 'Ücretsiz 30 dakikalık görüşmenizi planlayın',
      note: 'Genellikle birkaç saat içinde WhatsApp veya e-posta ile dönüş yapıyoruz.',
      name: 'Adınız',
      namePlaceholder: 'Adınızı yazın',
      phone: 'Telefon numaranız',
      phonePlaceholder: '+90 500 000 00 00',
      email: 'E-posta adresiniz*',
      emailPlaceholder: 'E-posta adresinizi yazın',
      company: 'Şirketiniz*',
      companyPlaceholder: 'Şirket adı',
      message: 'Neyi konuşmak istersiniz? (isteğe bağlı)',
      messagePlaceholder: 'Operasyonunuzdan ya da çözmek istediğiniz bir sorundan bahsedin...',
      submit: 'Demo Talep Edin',
      sending: 'Gönderiliyor...',
      success: 'Teşekkürler, talebiniz bize ulaştı. 24 saat içinde dönüş yaparız.',
      error: 'Bir sorun oluştu. Lütfen tekrar deneyin ya da info@leviora.ai adresine yazın.',
    },
    steps: {
      eyebrow: 'Nasıl İlerliyor',
      segments: [
        { text: 'Talepten pilota' },
        { text: 'üç adım.', accent: true },
      ],
      cards: [
        {
          title: 'Demo Talep Edin',
          body: 'Formu doldurun; 24 saat içinde size dönelim.',
        },
        {
          title: '30 Dakikalık Görüşme',
          body: 'Kendi operasyon sorularınızla, canlı veri üzerinde. Ezber sunum yok, hazır senaryo yok.',
        },
        {
          title: 'İsterseniz 30 Günlük Pilot',
          body: 'Kendi verinizde, kendi şartlarınızda. Sistemlerinize bağlanır, dilinizi öğreniriz; ekibiniz kullanmaya başlar. Karar tamamen sizin.',
        },
      ],
    },
    faq: {
      eyebrow: 'Sık Sorulan Sorular',
      segments: [{ text: 'Dürüst' }, { text: 'cevaplar.', accent: true }],
      items: [
        {
          q: 'Demo için ne hazırlamam gerekiyor?',
          a: 'Hiçbir şey. Siz operasyonunuzdan gerçek bir soru getirin, gerisi bizde. Hazırlık yok, sunum yok, ödev yok.',
        },
        {
          q: 'Demo benim gerçek verimde mi, hazır bir senaryoda mı?',
          a: 'Mümkün olan her durumda canlı verinizde; mesele zaten bu. Görüşmeden önce erişim sağlanamazsa ürünü gerçekçi bir operasyon veri setinde gösterir, pilot sırasında kendi sistemlerinize bağlanırız.',
        },
        {
          q: 'Pilot beni bir taahhüde sokar mı?',
          a: 'Hayır. 30 günlük pilot kendi verinizde çalışır ve sizin kararınızla biter. Devam etmezseniz bağlantıyı keseriz; veriniz zaten ağınızdan çıkmadığı için geride hiçbir şey kalmaz.',
        },
        {
          q: 'Verilerim güvende mi? KVKK uyumlu mu?',
          a: 'Veriniz ağınızdan hiç çıkmaz. Leviora sistemlerinizi gerçek zamanlı okur; ham veriyi dışarı kopyalamaz, dışarıda saklamaz. Veri dışarı çıkmadığı için KVKK açısından da en güvenli konumdasınız.',
        },
        {
          q: 'Pilotun sonunda ne oluyor?',
          a: 'Karar sizin. Değerini gördüyseniz yaygınlaştırmayı birlikte planlarız. Görmediyseniz bağlantıyı temizce keseriz: bağlayıcılık yok, geride veri kalmaz.',
        },
      ],
    },
  },
  cta: {
    eyebrow: 'Bize Ulaşın',
    segments: [
      { text: "Leviora'yı kendi operasyonunuzda" },
      { text: 'çalışırken görmek ister misiniz?', accent: true },
    ],
    sub: '30 dakikalık demo, 30 günlük pilot. Karar tamamen sizin.',
    primary: 'Demo Talep Edin',
    secondary: 'Nasıl çalışır?',
  },
  nav: {
    home: 'Ana Sayfa',
    product: 'Ürün',
    solutions: 'Çözümler',
    requestDemo: 'Demo Talep Edin',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
  },
  footer: {
    tagline:
      'Sizin dilinizle düşünen, sizin kurallarınızla karar veren, sizin sınırlarınız içinde hareket eden operasyonel yapay zekâ.',
    company: 'Şirket',
    platform: 'Platform',
    others: 'Yasal',
    home: 'Ana Sayfa',
    contact: 'İletişim',
    product: 'Ürün',
    solutions: 'Çözümler',
    requestDemo: 'Demo Talep Edin',
    faq: 'Sık Sorulan Sorular',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Koşulları',
    kvkk: 'KVKK Aydınlatma Metni',
    rights: '© 2026 Leviora. Tüm hakları saklıdır.',
  },
  meta: {
    home: {
      title: 'Leviora — Sanayiye Özel Operasyonel Yapay Zekâ',
      description:
        'Leviora, operasyonunuzun tamamındaki canlı veriyi okur; güvenilir cevaba ve aksiyona dönüştürür. Yapay zekâya operasyonunuzun dilini öğrettik.',
    },
    product: {
      title: 'Ürün — Leviora',
      description:
        'Üç katman, bir Merkezi Kurumsal Zekâ: ortak veri dili, ilişki haritası ve iş kuralları motoru birlikte çalışır.',
    },
    solutions: {
      title: 'Çözümler — Leviora',
      description:
        'Operasyon olan her yerde Leviora var. Operasyonunuza neler sorabileceğinizi ve size uygun paketi görün.',
    },
    contact: {
      title: 'Demo Talep Edin — Leviora',
      description:
        'Ücretsiz 30 dakikalık görüşme planlayın. Kendi sorularınız, canlı veri üzerinde. Veriniz ağınızda kalır.',
    },
    privacy: {
      title: 'Gizlilik Politikası — Leviora',
      description: 'Leviora bilgilerinizi nasıl toplar, kullanır ve korur.',
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
    backHome: 'Ana sayfaya dönün',
  },
};
