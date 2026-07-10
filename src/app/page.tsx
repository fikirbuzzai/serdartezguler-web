import Script from 'next/script'

const bodyHtml = `
<nav class="main-nav" id="main-nav">
  <a class="nav-logo" href="/index.html" title="Serdar Tezgüler — AI Growth Strategist">
    <span class="nl-d"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 52" aria-label="Serdar Tezgüler"><text y="42" font-family="Space Grotesk,system-ui,sans-serif" font-size="40" font-weight="700" letter-spacing="-1.5" fill="#F0F0EB">Serdar Tezgüler</text><circle cx="389" cy="11" r="5.5" fill="#4F7EFF"/></svg></span><span class="nl-l" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 52" aria-label="Serdar Tezgüler"><text y="42" font-family="Space Grotesk,system-ui,sans-serif" font-size="40" font-weight="700" letter-spacing="-1.5" fill="#0A0A0F">Serdar Tezgüler</text><circle cx="389" cy="11" r="5.5" fill="#3B6FEF"/></svg></span>
  </a>
  <ul class="nav-links" id="nav-links"><li><a href="/services/index.html">Solutions</a></li><li><a href="/framework.html">Framework</a></li><li><a href="/knowledge/index.html">Knowledge</a></li><li><a href="/hakkinda.html#speaking">Speaking</a></li><li><a href="/hakkinda.html">About</a></li><li><a href="/index.html#contact">Contact</a></li></ul>
  <div class="nav-right" id="nav-right">
    <a href="/st-agent.html" class="btn-agent btn-agent-sm"><span class="ap-dot"></span>ST Agent</a>
    <a href="https://wa.me/905326158718?text=Görüşme+talep+ediyorum." target="_blank" rel="noopener" class="btn btn-wa btn-sm"><svg class="wa-svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp</a>
    <button class="theme-btn" id="tbtn" onclick="toggleTheme()" aria-label="Tema değiştir">🌙</button>
  </div>
  <button class="nav-mobile" onclick="toggleNav()" aria-label="Menü aç/kapat">
    <span></span><span></span><span></span>
  </button>
</nav>
<main>

<!-- ═══════════ 1. HERO ═══════════ -->
<section id="hero" aria-label="Serdar Tezgüler — AI Growth Strategist">
  <div class="hero-left">
    <div class="hero-bg-glow" aria-hidden="true"></div>
    <div class="hero-role">
      <div class="hero-role-dot"></div>
      <span class="hero-role-text">AI Growth Strategist</span>
    </div>
    <h1 class="hero-h1">Serdar Tezgüler<span style="color:var(--accent)">.</span></h1>
    <p class="hero-tagline">
      AI çağında büyümek isteyen<br>şirketler için <em>strateji,<br>sistem ve görünürlük</em> tasarlıyorum.
    </p>
    <p class="hero-desc">CEO'lar, kurucular ve pazarlama liderleri için AI büyüme sistemleri, GEO görünürlüğü ve dönüşüm altyapısı.</p>
    <div class="hero-ctas">
      <a href="/services/ai-readiness-audit.html" class="btn btn-primary btn-lg">AI Readiness Test</a>
      <a href="https://wa.me/905326158718?text=30+dakika+strateji+görüşmesi+talep+ediyorum." target="_blank" rel="noopener" class="btn btn-ghost btn-lg">Görüşme Talep Et</a>
    </div>
    <div class="hero-proof">
      <div class="hp-cell">
        <div class="hp-num">20<em>+</em></div>
        <div class="hp-lbl">Yıl Deneyim</div>
      </div>
      <div class="hp-cell">
        <div class="hp-num">500<em>+</em></div>
        <div class="hp-lbl">Marka</div>
      </div>
      <div class="hp-cell">
        <div class="hp-num">100<em>+</em></div>
        <div class="hp-lbl">Eğitim</div>
      </div>
      <div class="hp-cell">
        <div class="hp-num">10K<em>+</em></div>
        <div class="hp-lbl">Katılımcı</div>
      </div>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-right-bg" aria-hidden="true"></div>
    <div class="hero-photo-wrap">
      <div class="hero-accent-bar"></div>
      <div class="hero-photo">
        <img
          src="/img/portrait.jpg"
          alt="Serdar Tezgüler — AI Growth Strategist"
          loading="eager"
          fetchpriority="high"
          width="320" height="427"
        >
      </div>
      <div class="hero-badge">
        <strong>AI Growth Strategist</strong>
        Tech · Business · AI
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ 2. TRUST STRIP ═══════════ -->
<div id="trust">
  <div class="trust-inner">
    <span class="trust-label">Uzmanlık</span>
    <div class="trust-items">
      <span class="trust-tag">AI Growth Strategy</span>
      <span class="trust-sep">·</span>
      <span class="trust-tag">GEO Optimizasyon</span>
      <span class="trust-sep">·</span>
      <span class="trust-tag">CEO AI Workshop</span>
      <span class="trust-sep">·</span>
      <span class="trust-tag">AI Agent Stratejisi</span>
      <span class="trust-sep">·</span>
      <span class="trust-tag">Executive Advisory</span>
      <span class="trust-sep">·</span>
      <span class="trust-tag">SMK Medya Platformu</span>
      <span class="trust-sep">·</span>
      <span class="trust-tag">Fikirbuzz</span>
    </div>
  </div>
</div>

<!-- ═══════════ 3. PROBLEM ═══════════ -->
<section id="problem" class="section">
  <div class="wrap">
    <span class="eyebrow fi-anim">Neden Şimdi?</span>
    <p class="prob-lead fi-anim" style="margin-top:14px">
      Şirketiniz AI <em>kullanıyor.</em><br>Ama AI ile <em>büyüyemiyor.</em>
    </p>
    <div class="prob-grid fi-anim">
      <div class="prob-card">
        <div class="prob-n">01 · Problem</div>
        <h3>Araç var, sistem yok</h3>
        <p>ChatGPT hesabı açıldı, prompts denendi. Hiçbir şey sürece, satışa ya da büyümeye entegre edilemedi. Araç kullanmak AI stratejisi değildir.</p>
      </div>
      <div class="prob-card">
        <div class="prob-n">02 · Problem</div>
        <h3>AI aramalarında görünmüyorsunuz</h3>
        <p>Alıcıların büyük çoğunluğu kararlarını ChatGPT, Gemini veya Perplexity'e sorarak veriyor. Markanız burada önerilmiyor. Rakipleriniz bu boşluğu dolduruyor.</p>
      </div>
      <div class="prob-card">
        <div class="prob-n">03 · Problem</div>
        <h3>Liderlik yanlış sorular soruyor</h3>
        <p>"Hangi AI aracını alalım?" yanlış soru. Doğrusu: "AI ile hangi büyüme problemini çözeceğiz?" Çerçeve yanlışsa yatırım da yanlış gider.</p>
      </div>
    </div>
    <div class="prob-cta fi-anim">
      <p>Bu üç problemden biri tanıdık geliyorsa, doğru yerdesiniz.</p>
      <a href="/services/ai-readiness-audit.html" class="btn btn-primary">Şirketinizi Analiz Edelim →</a>
    </div>
  </div>
</section>

<!-- ═══════════ 4. AUTHORITY ═══════════ -->
<section id="authority" class="section-md">
  <div class="wrap">
    <span class="eyebrow fi-anim">Neden Serdar Tezgüler?</span>
    <h2 class="sec-h fi-anim" style="font-size:clamp(26px,3.2vw,40px);margin-top:12px;margin-bottom:8px">
      "Bu alanda konuşmam gereken <em>kişi Serdar."</em>
    </h2>
    <p class="body-text fi-anim" style="max-width:500px;margin-bottom:0">20+ yıl birikim, 500+ marka deneyimi, Türkiye'nin öncü AI Growth platformu.</p>
    <div class="auth-stats fi-anim">
      <div class="auth-stat"><div class="stat-num">20<em>+</em></div><div class="stat-label">Yıl Dijital Deneyim</div></div>
      <div class="auth-stat"><div class="stat-num">500<em>+</em></div><div class="stat-label">Marka ile Çalışıldı</div></div>
      <div class="auth-stat"><div class="stat-num">100<em>+</em></div><div class="stat-label">Eğitim & Workshop</div></div>
      <div class="auth-stat"><div class="stat-num">10K<em>+</em></div><div class="stat-label">Etkinlik Katılımcısı</div></div>
    </div>
    <div class="auth-cards fi-anim">
      <div class="auth-card">
        <div class="auth-card-icon">🎤</div>
        <h4>Konuşmalar & Etkinlikler</h4>
        <p>AI Growth, GEO ve dijital dönüşüm konularında konferans konuşmacısı ve panel moderatörü.</p>
      </div>
      <div class="auth-card">
        <div class="auth-card-icon">📺</div>
        <h4>SMK Medya Platformu</h4>
        <p>Tech, Business ve AI liderlerini buluşturan Türkiye'nin önde gelen medya platformu.</p>
      </div>
      <div class="auth-card">
        <div class="auth-card-icon">🚀</div>
        <h4>Fikirbuzz Ajansı</h4>
        <p>AI destekli büyüme ajansı. Strateji, sistem ve uygulama Fikirbuzz ekosistemi ile hayata geçer.</p>
      </div>
      <div class="auth-card">
        <div class="auth-card-icon">✍️</div>
        <h4>Knowledge & İçerik</h4>
        <p>AI Growth ve GEO konularında Türkiye'nin en kapsamlı içerik platformlarından biri.</p>
      </div>
    </div>
    <div class="auth-seen fi-anim">
      <div class="auth-seen-label">Platformlar & İş Birlikleri</div>
      <div class="auth-logos">
        <div class="auth-logo-item">SMK</div>
        <div class="auth-logo-item">Fikirbuzz</div>
        <div class="auth-logo-item">YouTube</div>
        <div class="auth-logo-item">LinkedIn</div>
        <div class="auth-logo-item">Podcast</div>
        <div class="auth-logo-item">Konferans</div>
        <div class="auth-logo-item">Workshop</div>
        <div class="auth-logo-item">Eğitim</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ 5. FRAMEWORK ═══════════ -->
<section id="framework" class="section">
  <div class="wrap">
    <span class="eyebrow fi-anim">Metodoloji</span>
    <h2 class="sec-h fi-anim" style="font-size:clamp(28px,3.5vw,46px);margin-top:12px;margin-bottom:8px">
      ST Growth Framework<em>™</em>
    </h2>
    <p class="body-text fi-anim" style="max-width:480px;margin-bottom:0">Sizi farklı kılan bu sistem. Salt danışmanlık değil — ölçülebilir büyüme makinesi.</p>
    <div class="fw-list fi-anim">
      <div class="fw-item" id="fw-assess">
        <div class="fw-circle"><span class="fw-c-n">01</span><span class="fw-c-w">Assess</span></div>
        <div class="fw-main">
          <h3>Nerede olduğunuzu görün</h3>
          <p>AI olgunluğunu, büyüme darboğazlarını ve rekabetçi konumu nesnel olarak ölçeriz. Sezgi değil veri. Çıktı: AI Readiness Score ve öncelik haritası.</p>
        </div>
        <div class="fw-outputs">
          <div class="fw-out">AI Readiness Score</div>
          <div class="fw-out">Büyüme darboğazı haritası</div>
          <div class="fw-out">Rakip benchmark analizi</div>
        </div>
      </div>
      <div class="fw-connector">↓</div>
      <div class="fw-item" id="fw-strategy">
        <div class="fw-circle"><span class="fw-c-n">02</span><span class="fw-c-w">Strategy</span></div>
        <div class="fw-main">
          <h3>Nereye gideceğinizi netleştirin</h3>
          <p>90 günlük somut büyüme yol haritası. Hangi AI yatırımı, hangi sırayla, hangi metrikle ölçülecek? Soyut vizyon değil aksiyona dönüşen plan.</p>
        </div>
        <div class="fw-outputs">
          <div class="fw-out">90 günlük aksiyon roadmap</div>
          <div class="fw-out">Öncelikli proje listesi</div>
          <div class="fw-out">KPI & ölçüm çerçevesi</div>
        </div>
      </div>
      <div class="fw-connector">↓</div>
      <div class="fw-item" id="fw-systems">
        <div class="fw-circle"><span class="fw-c-n">03</span><span class="fw-c-w">Systems</span></div>
        <div class="fw-main">
          <h3>Makineyi kurun</h3>
          <p>İçerik, satış, GEO ve agent sistemleri. İnsanın zamanını değer yaratan işe ayırmasını sağlayan altyapı. Süreç değil, motor.</p>
        </div>
        <div class="fw-outputs">
          <div class="fw-out">GEO & AI search sistemi</div>
          <div class="fw-out">İçerik + dağıtım motoru</div>
          <div class="fw-out">AI agent mimarisi</div>
        </div>
      </div>
      <div class="fw-connector">↓</div>
      <div class="fw-item" id="fw-execution">
        <div class="fw-circle"><span class="fw-c-n">04</span><span class="fw-c-w">Execution</span></div>
        <div class="fw-main">
          <h3>Uygulamaya geçin</h3>
          <p>Fikirbuzz ekibi ile plandan sonuçlara. Her adımın sorumlusu, takvimi ve çıktısı netleştirilmiş. Strateji hayata geçmeden değer üretmez.</p>
        </div>
        <div class="fw-outputs">
          <div class="fw-out">Haftalık sprint yönetimi</div>
          <div class="fw-out">Fikirbuzz uygulama desteği</div>
          <div class="fw-out">Engel & pivot yönetimi</div>
        </div>
      </div>
      <div class="fw-connector">↓</div>
      <div class="fw-item" id="fw-scale">
        <div class="fw-circle"><span class="fw-c-n">05</span><span class="fw-c-w">Scale</span></div>
        <div class="fw-main">
          <h3>Kalıcı avantaja dönüştürün</h3>
          <p>Ölç, optimize et, büyüt. Sistemler çalışıyor — şimdi hız artırma zamanı. Tek seferlik proje değil, kalıcı rekabet avantajı.</p>
        </div>
        <div class="fw-outputs">
          <div class="fw-out">Growth dashboard</div>
          <div class="fw-out">Çeyreklik strateji güncellemesi</div>
          <div class="fw-out">Ölçeklendirme planı</div>
        </div>
      </div>
    </div>
    <div class="fi-anim" style="margin-top:36px;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      <a href="/framework.html" class="btn btn-outline">Framework'ün tamamını gör →</a>
      <span class="small-text">Her adım için ayrı servis ürünlerimiz mevcut.</span>
    </div>
  </div>
</section>

<!-- ═══════════ 6. SOLUTIONS ═══════════ -->
<section id="solutions" class="section">
  <div class="wrap">
    <div class="fi-anim" style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:12px">
      <div>
        <span class="eyebrow">Solutions</span>
        <h2 class="sec-h" style="font-size:clamp(26px,3.2vw,40px);margin-top:10px;margin-bottom:4px">Araç değil. <em>Ürün.</em></h2>
        <p class="small-text" style="max-width:400px">Problem → Çözüm → Çıktı → CTA. Her kart bu mantıkla kurgulandı.</p>
      </div>
      <a href="/services/index.html" class="btn btn-ghost btn-sm">Tümünü gör →</a>
    </div>
    <div class="sol-grid fi-anim">
      <a href="/services/ai-readiness-audit.html" class="sol-card featured">
        <span class="sol-badge sb-featured">⭐ Quick Start</span>
        <div class="sol-icon">◎</div>
        <div class="sol-prob">Problem → Nereden başlayacağını bilmemek</div>
        <h3>AI Readiness Audit</h3>
        <p class="sol-desc">Şirketinizin AI olgunluğunu ve büyüme fırsatlarını ölçeriz.</p>
        <div class="sol-output">AI Readiness Score + Öncelik Haritası + 90 Gün Roadmap</div>
        <div class="sol-meta"><span class="sol-tag">CEO & Yönetim</span><span class="sol-tag">2–3 Hafta</span></div>
        <span class="sol-cta">Audit Başlat →</span>
      </a>
      <a href="/services/ceo-workshop.html" class="sol-card">
        <span class="sol-badge sb-ceo">CEO Favorite</span>
        <div class="sol-icon">◈</div>
        <div class="sol-prob">Problem → Yanlış sorular sormak</div>
        <h3>Executive Workshop</h3>
        <p class="sol-desc">Liderlik ekibiniz AI'a doğru çerçeveden bakıyor mu?</p>
        <div class="sol-output">Strateji Planı + Aksiyon + Ekip Hizalaması</div>
        <div class="sol-meta"><span class="sol-tag">C-Suite</span><span class="sol-tag">1 Gün</span></div>
        <span class="sol-cta">Workshop Talep Et →</span>
      </a>
      <a href="/services/growth-blueprint.html" class="sol-card">
        <span class="sol-badge sb-popular">Popular</span>
        <div class="sol-icon">▣</div>
        <div class="sol-prob">Problem → Stratejisiz büyüme</div>
        <h3>AI Strategy Sprint</h3>
        <p class="sol-desc">90 günlük somut büyüme planı. Haftalık adımlar, metrikler.</p>
        <div class="sol-output">90 Günlük Blueprint + KPI Dashboard</div>
        <div class="sol-meta"><span class="sol-tag">Kurucular</span><span class="sol-tag">6 Hafta</span></div>
        <span class="sol-cta">Sprint Başlat →</span>
      </a>
      <a href="/services/geo-program.html" class="sol-card">
        <span class="sol-badge sb-quick">GEO</span>
        <div class="sol-icon">◇</div>
        <div class="sol-prob">Problem → AI aramalarında görünmemek</div>
        <h3>AI Growth Systems</h3>
        <p class="sol-desc">ChatGPT, Gemini, Perplexity'de markanız önerilsin.</p>
        <div class="sol-output">GEO Görünürlük Artışı + Aylık Rapor</div>
        <div class="sol-meta"><span class="sol-tag">Pazarlama</span><span class="sol-tag">90 Gün</span></div>
        <span class="sol-cta">GEO Programı →</span>
      </a>
      <a href="/services/agent-strategy.html" class="sol-card">
        <span class="sol-badge sb-quick" style="background:rgba(34,211,238,.1);color:#22D3EE">Enterprise</span>
        <div class="sol-icon">◉</div>
        <div class="sol-prob">Problem → Agent nereye kurulacak?</div>
        <h3>AI Agent Strategy</h3>
        <p class="sol-desc">Doğru süreçlere doğru agent. Mimari ve prototip.</p>
        <div class="sol-output">Agent Mimari Planı + Prototip</div>
        <div class="sol-meta"><span class="sol-tag">CTO & Ürün</span><span class="sol-tag">8–12 Hafta</span></div>
        <span class="sol-cta">Agent Stratejisi →</span>
      </a>
      <a href="/services/executive-advisory.html" class="sol-card">
        <span class="sol-badge sb-ceo">CEO Favorite</span>
        <div class="sol-icon">◑</div>
        <div class="sol-prob">Problem → AI kararlarında yalnız kalmak</div>
        <h3>Executive Advisory</h3>
        <p class="sol-desc">CEO ve kuruculara aylık güvenilir dış perspektif.</p>
        <div class="sol-output">Aylık 2×90 Dk + Async Destek</div>
        <div class="sol-meta"><span class="sol-tag">CEO & Founders</span><span class="sol-tag">Aylık</span></div>
        <span class="sol-cta">Advisory Başvur →</span>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════ 7. CASES ═══════════ -->
<section id="cases" class="section">
  <div class="wrap">
    <span class="eyebrow fi-anim">Case Studies</span>
    <h2 class="sec-h fi-anim" style="font-size:clamp(26px,3.2vw,40px);margin-top:12px;margin-bottom:32px">Sistemin <em>çalıştığı yerler.</em></h2>
    <div class="cases-grid fi-anim">
      <div class="case-card">
        <span class="case-sector">E-Ticaret · B2C · E-İhracat</span>
        <h3>AI aramalarında sıfırdan %340 görünürlük artışı</h3>
        <div class="case-flow">
          <div class="cf-step"><div class="cf-label">Problem</div><div class="cf-val">AI motorlarında sıfır varlık</div></div>
          <div class="cf-step"><div class="cf-label">Ne Yaptık</div><div class="cf-val">GEO + Schema + İçerik Mimarisi</div></div>
          <div class="cf-step"><div class="cf-label">Sonuç</div><div class="cf-val">340% görünürlük, 2.8x dönüşüm</div></div>
          <div class="cf-step"><div class="cf-label">Öğrendik</div><div class="cf-val">Schema olmadan GEO yarım kalır</div></div>
        </div>
        <div class="case-metrics">
          <div><div class="case-metric-n">340<em>%</em></div><div class="case-metric-l">AI Arama Görünürlüğü</div></div>
          <div><div class="case-metric-n">2.8<em>x</em></div><div class="case-metric-l">Organik Dönüşüm</div></div>
          <div><div class="case-metric-n">90<em>gün</em></div><div class="case-metric-l">Süre</div></div>
        </div>
        <div class="case-learn"><strong>Öğrendiklerimiz:</strong> AI motorları yapısal netliği ödüllendiriyor. İçerik kalitesinden önce mimari geliyor.</div>
      </div>
      <div class="case-card">
        <span class="case-sector">SaaS · B2B · 150 Kişi</span>
        <h3>90 günde büyüme sistemi, 4x lead kalitesi</h3>
        <div class="case-flow">
          <div class="cf-step"><div class="cf-label">Problem</div><div class="cf-val">Satış ve pazarlama silolarda</div></div>
          <div class="cf-step"><div class="cf-label">Ne Yaptık</div><div class="cf-val">Workshop + Blueprint + Entegrasyon</div></div>
          <div class="cf-step"><div class="cf-label">Sonuç</div><div class="cf-val">4x lead kalitesi</div></div>
          <div class="cf-step"><div class="cf-label">Öğrendik</div><div class="cf-val">Liderlik hizalaması olmadan AI yatırımı boşa gider</div></div>
        </div>
        <div class="case-metrics">
          <div><div class="case-metric-n">4<em>x</em></div><div class="case-metric-l">Lead Kalitesi</div></div>
          <div><div class="case-metric-n">62<em>%</em></div><div class="case-metric-l">Satış Verimliliği</div></div>
          <div><div class="case-metric-n">90<em>gün</em></div><div class="case-metric-l">Süre</div></div>
        </div>
        <div class="case-learn"><strong>Öğrendiklerimiz:</strong> CEO Workshop olmadan teknik AI yatırımı izole kalır. Önce liderlik hizalaması.</div>
      </div>
      <div class="case-card">
        <span class="case-sector">Perakende · Omnichannel</span>
        <h3>AI ile müşteri yolculuğu kişiselleşti, LTV %58 arttı</h3>
        <div class="case-flow">
          <div class="cf-step"><div class="cf-label">Problem</div><div class="cf-val">Generic müşteri deneyimi</div></div>
          <div class="cf-step"><div class="cf-label">Ne Yaptık</div><div class="cf-val">AI entegrasyonu + Otomasyon</div></div>
          <div class="cf-step"><div class="cf-label">Sonuç</div><div class="cf-val">LTV %58↑, maliyet %31↓</div></div>
          <div class="cf-step"><div class="cf-label">Öğrendik</div><div class="cf-val">Veri kalitesi her şeyden önce gelir</div></div>
        </div>
        <div class="case-metrics">
          <div><div class="case-metric-n">58<em>%</em></div><div class="case-metric-l">LTV Artışı</div></div>
          <div><div class="case-metric-n">31<em>%</em></div><div class="case-metric-l">Maliyet Azalması</div></div>
          <div><div class="case-metric-n">6<em>ay</em></div><div class="case-metric-l">ROI</div></div>
        </div>
        <div class="case-learn"><strong>Öğrendiklerimiz:</strong> Kişiselleştirme için veri mimarisini önce kurmak zorunlu.</div>
      </div>
      <div class="case-card">
        <span class="case-sector">Profesyonel Hizmetler · Danışmanlık</span>
        <h3>AI Agent ile teklif süreci %70 hızlandı</h3>
        <div class="case-flow">
          <div class="cf-step"><div class="cf-label">Problem</div><div class="cf-val">Manuel süreçler kapasiteyi tüketiyor</div></div>
          <div class="cf-step"><div class="cf-label">Ne Yaptık</div><div class="cf-val">Agent Stratejisi + Prototip</div></div>
          <div class="cf-step"><div class="cf-label">Sonuç</div><div class="cf-val">%70 hız, 3.2x kapasite</div></div>
          <div class="cf-step"><div class="cf-label">Öğrendik</div><div class="cf-val">En iyi agent, en tekrar eden süreci çözer</div></div>
        </div>
        <div class="case-metrics">
          <div><div class="case-metric-n">70<em>%</em></div><div class="case-metric-l">Süreç Hızlanması</div></div>
          <div><div class="case-metric-n">3.2<em>x</em></div><div class="case-metric-l">Kapasite Artışı</div></div>
          <div><div class="case-metric-n">8<em>hafta</em></div><div class="case-metric-l">Uygulama</div></div>
        </div>
        <div class="case-learn"><strong>Öğrendiklerimiz:</strong> Agent stratejisi ROI analizi olmadan başlamamalı.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ 8. ST AGENT ═══════════ -->
<section id="agent-section">
  <div class="agent-wrap">
    <div>
      <div class="agent-badge-row">
        <div class="agent-live-dot"></div>
        <span class="agent-badge-txt">Yakında · Beta 2026</span>
      </div>
      <h2 class="agent-h">
        ST Agent — şirketinizin AI büyüme potansiyelini<br><em>5 dakikada analiz edin.</em>
      </h2>
      <p class="agent-sub">Mevcut dijital olgunluğunuzu ölçer, sektör benchmarkıyla karşılaştırır ve size özel AI Growth Roadmap önerir.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a href="/st-agent.html" class="btn-agent"><span class="ap-dot"></span>Beta Listesine Katıl</a>
        <a href="/st-agent.html" class="btn btn-ghost" style="color:rgba(240,240,235,.6)">Detaylar</a>
      </div>
    </div>
    <!-- Dashboard Mockup -->
    <div class="agent-dashboard">
      <div class="ad-titlebar">
        <div class="ad-dot" style="background:#FF5F57"></div>
        <div class="ad-dot" style="background:#FEBC2E"></div>
        <div class="ad-dot" style="background:#28C840"></div>
        <span class="ad-title">ST Agent · AI Growth Analyzer v1.0</span>
      </div>
      <div class="ad-body">
        <div class="ad-score-row">
          <div class="ad-score-box">
            <div class="ad-score-label">AI Readiness Score</div>
            <div class="ad-score-val">72<span>/100</span></div>
            <div class="ad-score-sub">↑ Sektör ort. +24 puan</div>
          </div>
          <div class="ad-score-box" style="background:rgba(34,211,238,.08);border-color:rgba(34,211,238,.2)">
            <div class="ad-score-label" style="color:rgba(34,211,238,.5)">GEO Visibility</div>
            <div class="ad-score-val" style="color:#22D3EE">43<span style="color:rgba(34,211,238,.4)">/100</span></div>
            <div class="ad-score-sub" style="color:#22D3EE">⚠ Düşük — Aksiyon gerekli</div>
          </div>
        </div>
        <div class="ad-radar">
          <div class="ad-radar-title">Kategori Analizi</div>
          <div class="ad-bar-row">
            <div class="ad-bar-label">Teknoloji</div>
            <div class="ad-bar-track"><div class="ad-bar-fill" style="width:78%;background:#4F7EFF"></div></div>
            <div class="ad-bar-num">78</div>
          </div>
          <div class="ad-bar-row">
            <div class="ad-bar-label">Süreç</div>
            <div class="ad-bar-track"><div class="ad-bar-fill" style="width:62%;background:#A78BFA"></div></div>
            <div class="ad-bar-num">62</div>
          </div>
          <div class="ad-bar-row">
            <div class="ad-bar-label">GEO</div>
            <div class="ad-bar-track"><div class="ad-bar-fill" style="width:43%;background:#22D3EE"></div></div>
            <div class="ad-bar-num">43</div>
          </div>
          <div class="ad-bar-row">
            <div class="ad-bar-label">Liderlik</div>
            <div class="ad-bar-track"><div class="ad-bar-fill" style="width:85%;background:#34D399"></div></div>
            <div class="ad-bar-num">85</div>
          </div>
        </div>
        <div class="ad-cta-row">
          <div class="ad-cta-txt">→ Öncelikli aksiyon: GEO optimizasyonu başlat</div>
          <div class="ad-cta-btn">Roadmap Al →</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ 9. KNOWLEDGE ═══════════ -->
<section id="knowledge" class="section-md">
  <div class="wrap">
    <div class="fi-anim" style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px">
      <div>
        <span class="eyebrow">Knowledge Hub</span>
        <h2 class="sec-h" style="font-size:clamp(24px,3vw,38px);margin-top:10px;margin-bottom:0">Alıntılanabilir <em>perspektifler.</em></h2>
      </div>
      <a href="/knowledge/index.html" class="btn btn-ghost btn-sm">Tüm Hub →</a>
    </div>
    <div class="know-grid fi-anim">
      <a href="/answers/ai-growth-nedir.html" class="know-card">
        <span class="kc-cat kc-ai">AI Growth</span>
        <h3>AI Growth Nedir? 2026 Rehberi</h3>
        <p>Araç kullanmak ile büyüme sistemi kurmak arasındaki fark.</p>
        <div class="know-meta">8 dk · Guide</div>
      </a>
      <a href="/answers/geo-nedir.html" class="know-card">
        <span class="kc-cat kc-geo">GEO</span>
        <h3>GEO Nedir? ChatGPT'de Görünür Olma</h3>
        <p>AI motorlarında marka görünürlüğü metodolojisi.</p>
        <div class="know-meta">6 dk · Framework</div>
      </a>
      <a href="/answers/ceo-ai-donusum.html" class="know-card">
        <span class="kc-cat kc-ceo">CEO & Leadership</span>
        <h3>CEO'lar AI'a Nereden Başlamalı?</h3>
        <p>5 kritik soru ve liderliğin yaptığı yaygın hatalar.</p>
        <div class="know-meta">5 dk · Insight</div>
      </a>
      <a href="/answers/ai-agent-nedir.html" class="know-card">
        <span class="kc-cat kc-ai">AI Agents</span>
        <h3>AI Agent Nedir?</h3>
        <p>Kurumsal kullanım senaryoları ve uygulama stratejisi.</p>
        <div class="know-meta">7 dk · Guide</div>
      </a>
      <a href="/answers/ai-search-optimization.html" class="know-card">
        <span class="kc-cat kc-geo">GEO</span>
        <h3>AI Search Optimization 2026</h3>
        <p>AI motorlarında marka görünürlüğü için aksiyon planı.</p>
        <div class="know-meta">6 dk · Framework</div>
      </a>
      <a href="/knowledge/index.html" class="know-card" style="border-style:dashed;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:8px">
        <div style="font-size:22px;opacity:.25">◎</div>
        <h3 style="font-size:14px;color:var(--t2)">Tüm Knowledge Hub</h3>
        <p style="font-size:12px">CEO · GEO · AI Agents · Case Study · Glossary</p>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════ 10. CONTACT ═══════════ -->
<section id="contact" class="section">
  <div class="wrap">
    <div class="contact-grid">
      <div class="contact-left fi-anim">
        <span class="eyebrow">İletişim</span>
        <h2 class="sec-h" style="font-size:clamp(24px,3vw,38px);margin-top:12px;margin-bottom:12px">
          Şirketiniz için <em>doğru adımı</em> birlikte belirleyelim.
        </h2>
        <p>Hangi servisten başlayacağınızdan emin değil misiniz? AI Readiness Audit ile 2–3 haftada netleşir.</p>
        <div class="contact-options">
          <div class="co-item">AI Readiness Audit talebi</div>
          <div class="co-item">CEO AI Workshop daveti</div>
          <div class="co-item">GEO / AI Search programı</div>
          <div class="co-item">Executive Advisory başvurusu</div>
          <div class="co-item">Konuşmacı / moderatör daveti</div>
          <div class="co-item">SMK iş birliği</div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <a href="https://wa.me/905326158718?text=Merhaba+Serdar+Bey" target="_blank" rel="noopener" class="btn btn-wa btn-sm"><svg class="wa-svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp</a>
          <a href="mailto:st@serdartezguler.com" class="btn btn-ghost btn-sm">E-posta</a>
        </div>
      </div>
      <div class="form-box fi-anim">
        <div class="form-row"><label for="f-name">Ad Soyad</label><input type="text" id="f-name" name="name" placeholder="Adınız" autocomplete="name"></div>
        <div class="form-row"><label for="f-company">Şirket</label><input type="text" id="f-company" name="company" placeholder="Şirket adı" autocomplete="organization"></div>
        <div class="form-row"><label for="f-email">E-posta</label><input type="email" id="f-email" name="email" placeholder="ornek@sirket.com" autocomplete="email"></div>
        <div class="form-row"><label for="f-type">Talep Türü</label>
          <select id="f-type" name="type">
            <option value="">Seçiniz...</option>
            <option>AI Readiness Audit</option>
            <option>Executive Workshop</option>
            <option>AI Strategy Sprint</option>
            <option>AI Growth Systems (GEO)</option>
            <option>AI Agent Strategy</option>
            <option>Executive Advisory</option>
            <option>Konuşmacı / Moderatör Daveti</option>
            <option>SMK İş Birliği</option>
            <option>Diğer</option>
          </select>
        </div>
        <div class="form-row"><label for="f-msg">Mesajınız</label><textarea id="f-msg" name="message" placeholder="Şirketiniz ve talebiniz hakkında kısaca..."></textarea></div>
        <button type="button" class="form-submit" onclick="submitLead()">Görüşme Talep Et</button>
        <p style="font-size:12px;color:var(--t3);margin-top:8px;text-align:center">KVKK kapsamında verileriniz yalnızca değerlendirme için kullanılır.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ 11. FAQ ═══════════ -->
<section id="faq" class="section-md">
  <div class="wrap">
    <span class="eyebrow fi-anim">SSS</span>
    <h2 class="sec-h fi-anim" style="font-size:clamp(24px,3vw,38px);margin-top:12px;margin-bottom:24px">Sık sorulan <em>sorular.</em></h2>
    <div class="faq-grid fi-anim">
      <div class="faq-item" onclick="tFaq(this)"><div class="faq-q">AI Growth Strategist ne yapar?<span class="faq-icon">+</span></div><p class="faq-a">Şirketlerin yapay zekâ araçlarını büyüme sistemlerine dönüştürmesine yardımcı olur. Analiz, strateji, sistem kurulumu ve ölçeklendirme. ST Growth Framework™ ile 5 aşamalı metodoloji uygulanır.</p></div>
      <div class="faq-item" onclick="tFaq(this)"><div class="faq-q">GEO nedir ve neden önemli?<span class="faq-icon">+</span></div><p class="faq-a">GEO (Generative Engine Optimization), markaların ChatGPT, Gemini ve Perplexity gibi AI motorlarında önerilmesini sağlayan stratejidir. 2026'da alıcıların büyük çoğunluğu kararlarını AI motorlarına danışarak veriyor.</p></div>
      <div class="faq-item" onclick="tFaq(this)"><div class="faq-q">AI Readiness Audit ne kadar sürer?<span class="faq-icon">+</span></div><p class="faq-a">Standart süreç 2–3 haftada tamamlanır. Çıktı: AI Readiness Score, öncelik haritası ve 90 günlük başlangıç roadmap'i.</p></div>
      <div class="faq-item" onclick="tFaq(this)"><div class="faq-q">CEO Workshop hangi şirketlere uygundur?<span class="faq-icon">+</span></div><p class="faq-a">50–500 kişi arası kurumsal şirketler ve scale-up'lar. Yönetim ekibinin 4–6 kişi katılması önerilir.</p></div>
      <div class="faq-item" onclick="tFaq(this)"><div class="faq-q">ST Agent nedir?<span class="faq-icon">+</span></div><p class="faq-a">Şirketlerin AI büyüme potansiyelini 5 dakikada analiz eden yapay zekâ aracı. 2026 içinde beta'ya açılacak.</p></div>
      <div class="faq-item" onclick="tFaq(this)"><div class="faq-q">Fikirbuzz ve SMK nedir?<span class="faq-icon">+</span></div><p class="faq-a">Fikirbuzz, Serdar Tezgüler'in kurucusu olduğu AI destekli büyüme ajansıdır. SMK, Tech, Business ve AI konularında Türkiye'nin önde gelen medya platformudur.</p></div>
    </div>
  </div>
</section>

</main>
<section style="background:var(--s1);border-top:1px solid var(--br);padding:80px 0">
  <div class="wrap" style="text-align:center">
    <span class="eyebrow" style="display:block;margin-bottom:14px;justify-content:center">Bir Sonraki Adım</span>
    <h2 class="sec-h" style="font-size:clamp(26px,3.5vw,42px);margin-bottom:14px;max-width:520px;margin-left:auto;margin-right:auto">
      "Serdar Tezgüler ile<br>görüşmem gerekiyor."
    </h2>
    <p class="body-text" style="max-width:380px;margin:0 auto 28px">Bu fikir aklınıza geldiyse, doğru sayfadasınız.</p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="/services/ai-readiness-audit.html" class="btn btn-primary btn-lg">AI Readiness Test</a>
      <a href="https://wa.me/905326158718?text=30+dakika+strateji+görüşmesi+talep+ediyorum." target="_blank" rel="noopener" class="btn btn-wa btn-lg"><svg class="wa-svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>30 Dk Görüşme</a>
    </div>
  </div>
</section>
<footer class="main-footer">
  <div class="footer-agent-bar">
    <div class="fab-inner">
      <div class="fab-text"><strong>ST Agent</strong> — AI büyüme potansiyelinizi 5 dakikada analiz edin. <span style="opacity:.5;font-size:12px">Beta · 2026</span></div>
      <a href="/st-agent.html" class="btn-agent btn-agent-sm"><span class="ap-dot"></span>Beta Listesine Katıl</a>
    </div>
  </div>
  <div class="footer-body">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="nl-d"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 52" aria-label="Serdar Tezgüler"><text y="42" font-family="Space Grotesk,system-ui,sans-serif" font-size="40" font-weight="700" letter-spacing="-1.5" fill="#F0F0EB">Serdar Tezgüler</text><circle cx="389" cy="11" r="5.5" fill="#4F7EFF"/></svg></span><span class="nl-l" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 52" aria-label="Serdar Tezgüler"><text y="42" font-family="Space Grotesk,system-ui,sans-serif" font-size="40" font-weight="700" letter-spacing="-1.5" fill="#0A0A0F">Serdar Tezgüler</text><circle cx="389" cy="11" r="5.5" fill="#3B6FEF"/></svg></span>
        <p class="footer-tagline" style="margin-top:10px">AI Growth Strategist<br>Tech · Business · AI · GEO</p>
        <div class="footer-socials">
          <a href="https://wa.me/905326158718" target="_blank" rel="noopener" class="fsoc wa" title="WhatsApp">W</a>
          <a href="https://linkedin.com/in/serdartezguler" target="_blank" rel="noopener" class="fsoc" title="LinkedIn">in</a>
          <a href="https://instagram.com/serdartezguler" target="_blank" rel="noopener" class="fsoc" title="Instagram">ig</a>
          <a href="https://twitter.com/serdartezguler" target="_blank" rel="noopener" class="fsoc" title="X">𝕏</a>
          <a href="https://youtube.com/@SMK" target="_blank" rel="noopener" class="fsoc" title="YouTube">▶</a>
          <a href="mailto:st@serdartezguler.com" class="fsoc" title="E-posta">@</a>
        </div>
        <div class="nl-box">
          <label for="nl-e">AI Growth Bülteni</label>
          <div class="nl-row">
            <input type="email" id="nl-e" class="nl-input" placeholder="E-posta">
            <button class="nl-btn" onclick="nlSub()">Üye Ol</button>
          </div>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <span class="fc-title">Solutions</span>
          <a href="/services/ai-readiness-audit.html" class="fc-link">AI Readiness Audit</a>
          <a href="/services/ceo-workshop.html" class="fc-link">Executive Workshop</a>
          <a href="/services/growth-blueprint.html" class="fc-link">AI Strategy Sprint</a>
          <a href="/services/geo-program.html" class="fc-link">AI Growth Systems</a>
          <a href="/services/agent-strategy.html" class="fc-link">AI Agent Strategy</a>
          <a href="/services/executive-advisory.html" class="fc-link">Executive Advisory</a>
        </div>
        <div>
          <span class="fc-title">Framework</span>
          <a href="/framework.html" class="fc-link">ST Growth Framework™</a>
          <a href="/framework.html#fw-assess" class="fc-link">01 · Assess</a>
          <a href="/framework.html#fw-strategy" class="fc-link">02 · Strategy</a>
          <a href="/framework.html#fw-systems" class="fc-link">03 · Systems</a>
          <a href="/framework.html#fw-execution" class="fc-link">04 · Execution</a>
          <a href="/framework.html#fw-scale" class="fc-link">05 · Scale</a>
        </div>
        <div>
          <span class="fc-title">Knowledge</span>
          <a href="/answers/ai-growth-nedir.html" class="fc-link">AI Growth Nedir?</a>
          <a href="/answers/geo-nedir.html" class="fc-link">GEO Nedir?</a>
          <a href="/answers/ceo-ai-donusum.html" class="fc-link">CEO & AI</a>
          <a href="/answers/ai-agent-nedir.html" class="fc-link">AI Agent Nedir?</a>
          <a href="/knowledge/index.html" class="fc-link">Tüm Hub →</a>
        </div>
        <div>
          <span class="fc-title">Platform</span>
          <a href="/st-agent.html" class="fc-link">ST Agent ✦</a>
          <a href="/hakkinda.html#speaking" class="fc-link">Speaking</a>
          <a href="/hakkinda.html" class="fc-link">About & Press</a>
          <a href="https://youtube.com/@SMK" target="_blank" rel="noopener" class="fc-link">SMK ↗</a>
          <a href="mailto:st@serdartezguler.com" class="fc-link">E-posta</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Serdar Tezgüler · AI Growth Strategist</span>
      <span>SMK · Fikirbuzz · <a href="#">KVKK</a></span>
    </div>
  </div>
</footer>
`


const themeScript = `
function toggleTheme(){
  var c=document.documentElement.getAttribute('data-theme')||'dark';
  var n=c==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',n);
  try{localStorage.setItem('st-theme',n);}catch(e){}
  var b=document.getElementById('tbtn');
  if(b)b.textContent=n==='dark'?'🌙':'☀️';
  document.querySelectorAll('.nl-d').forEach(function(el){el.style.display=n==='light'?'none':'';});
  document.querySelectorAll('.nl-l').forEach(function(el){el.style.display=n==='light'?'':'none';});
}
(function(){
  var t=document.documentElement.getAttribute('data-theme')||'dark';
  var b=document.getElementById('tbtn');
  if(b)b.textContent=t==='dark'?'🌙':'☀️';
  if(t==='light'){
    document.querySelectorAll('.nl-d').forEach(function(el){el.style.display='none';});
    document.querySelectorAll('.nl-l').forEach(function(el){el.style.display='';});
  }
})();

function toggleNav(){
  var nl=document.getElementById('nav-links');
  var nr=document.getElementById('nav-right');
  var open=nl&&nl.classList.contains('open');
  if(open){
    if(nl){nl.classList.remove('open');nl.removeAttribute('style');}
    if(nr){nr.classList.remove('open');nr.removeAttribute('style');}
  }else{
    if(nl){nl.classList.add('open');nl.style.cssText='display:flex;flex-direction:column;position:fixed;top:62px;left:0;right:0;background:var(--s1);padding:12px 16px;gap:2px;border-bottom:1px solid var(--br);z-index:599;';}
    if(nr){nr.style.cssText='display:flex;flex-direction:column;position:fixed;top:'+(62+(nl?nl.offsetHeight:0))+'px;left:0;right:0;background:var(--s1);padding:10px 16px 16px;z-index:598;border-bottom:1px solid var(--br);gap:8px;';}
  }
}

(function(){
  if(!window.IntersectionObserver)return;
  document.body.classList.add('js-anim-ready');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target);}
    });
  },{threshold:0.06,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.fi-anim').forEach(function(el){io.observe(el);});
})();

function tFaq(el){
  var open=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
  if(!open)el.classList.add('open');
}
`

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script id="st-interactions" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      <Script src="/form.js" strategy="afterInteractive" />
    </>
  )
}
