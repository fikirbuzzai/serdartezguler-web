/**
 * ST CMS — Form & Lead Submission v2
 * POST /api/submit-lead.php → JSON response
 */
(function () {
  'use strict';

  /* ─── Ana submit fonksiyonu ─────────────────────────────────── */
  function submitLead() {
    var name    = document.getElementById('f-name');
    var email   = document.getElementById('f-email');
    var company = document.getElementById('f-company');
    var type    = document.getElementById('f-type');
    var msg     = document.getElementById('f-msg');
    var btn     = document.querySelector('button.form-submit, .btn-form-submit');

    if (!name || !name.value.trim())   { showErr('Ad soyad gerekli.');       if (name)  name.focus();  return; }
    if (!email || !email.value.trim()) { showErr('E-posta gerekli.');         if (email) email.focus(); return; }
    if (!/\S+@\S+\.\S+/.test(email.value)) { showErr('Geçerli e-posta girin.'); email.focus(); return; }
    if (!type || !type.value)          { showErr('Talep türünü seçin.');      if (type)  type.focus();  return; }

    var payload = {
      name:    name.value.trim(),
      email:   email.value.trim(),
      company: company ? company.value.trim() : '',
      type:    type.value,
      message: msg ? msg.value.trim() : ''
    };

    if (btn) { btn.disabled = true; btn.textContent = 'Gönderiliyor...'; }
    clearMsgs();

    fetch('/api/submit-lead.php', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.ok) {
        showSuccess();
        // Formu temizle
        [name, email, company, msg].forEach(function (el) { if (el) el.value = ''; });
        if (type) type.value = '';
        if (btn) { btn.disabled = false; btn.textContent = 'Görüşme Talep Et'; }
      } else {
        showErr(d.message || 'Bir hata oluştu.');
        if (btn) { btn.disabled = false; btn.textContent = 'Görüşme Talep Et'; }
      }
    })
    .catch(function () {
      showErr('Bağlantı hatası. Lütfen WhatsApp ile yazın.');
      if (btn) { btn.disabled = false; btn.textContent = 'Görüşme Talep Et'; }
    });
  }

  /* ─── Teşekkür sayfası göster ───────────────────────────────── */
  function showSuccess() {
    // Form kutusunu bul ve teşekkür mesajıyla değiştir
    var formBox = document.querySelector('.form-box, #contact-form, .contact-form');
    if (formBox) {
      formBox.innerHTML = [
        '<div style="text-align:center;padding:48px 24px">',
        '<div style="font-size:52px;margin-bottom:16px">✅</div>',
        '<h3 style="font-family:var(--fd,system-ui);font-size:22px;font-weight:700;margin-bottom:10px;color:var(--text,#F0F0EB)">Talebiniz Alındı!</h3>',
        '<p style="font-size:15px;line-height:1.7;color:var(--t2,#8A8A82);max-width:320px;margin:0 auto 20px">',
        'En kısa sürede <strong style="color:var(--accent,#4F7EFF)">st@serdartezguler.com</strong> adresinden veya WhatsApp üzerinden sizinle iletişime geçeceğiz.',
        '</p>',
        '<p style="font-size:13px;color:var(--t3,#4A4A52)">Ortalama yanıt süresi: <strong>24 saat</strong></p>',
        '</div>'
      ].join('');
      formBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    // Fallback: inline mesaj
    showMsg('success',
      '<strong>✅ Talebiniz alındı!</strong> En kısa sürede st@serdartezguler.com adresinden sizinle iletişime geçeceğiz.'
    );
  }

  /* ─── Mesaj yardımcıları ────────────────────────────────────── */
  function showErr(text) {
    showMsg('error', text);
  }

  function showMsg(type, html) {
    var id  = 'st-form-msg';
    var el  = document.getElementById(id);
    if (!el) {
      el    = document.createElement('div');
      el.id = id;
      var btn = document.querySelector('button.form-submit, .btn-form-submit');
      if (btn && btn.parentNode) btn.parentNode.insertBefore(el, btn.nextSibling);
      else document.body.appendChild(el);
    }
    el.innerHTML  = html;
    el.style.cssText = [
      'display:block',
      'padding:14px 18px',
      'border-radius:8px',
      'font-size:14px',
      'margin-top:12px',
      'line-height:1.55',
      type === 'success'
        ? 'background:rgba(52,211,153,.12);border:1px solid rgba(52,211,153,.3);color:#34D399'
        : 'background:rgba(248,113,113,.12);border:1px solid rgba(248,113,113,.3);color:#F87171'
    ].join(';');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function clearMsgs() {
    var el = document.getElementById('st-form-msg');
    if (el) el.style.display = 'none';
  }

  /* ─── Global expose ─────────────────────────────────────────── */
  window.submitLead    = submitLead;

  /* ─── Newsletter ────────────────────────────────────────────── */
  window.nlSub = function () {
    var e = document.getElementById('nl-e');
    if (!e || !e.value || !e.value.includes('@')) {
      alert('Geçerli e-posta girin.'); return;
    }
    var payload = { name: 'Newsletter', email: e.value.trim(), type: 'Newsletter Üyelik', message: '' };
    fetch('/api/submit-lead.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d.ok) { e.value = ''; alert('Bültene kaydoldunuz! Teşekkürler.'); }
      else alert('Bir hata oluştu, lütfen tekrar deneyin.');
    })
    .catch(function () { alert('Bağlantı hatası.'); });
  };

})();
