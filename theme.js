/* สลับโหมดมืด/สว่าง — จำค่าที่เลือกไว้ในเบราว์เซอร์ (ค่าเริ่มต้น: สว่าง) */
(function () {
  var root = document.documentElement;
  var KEY = 'nrtech-theme';

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* ignore */ }
  }

  // ตั้งค่าก่อนหน้าเว็บแสดงผล เพื่อไม่ให้จอกะพริบ
  root.setAttribute('data-theme', read() === 'dark' ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeBtn');
    if (!btn) return;

    function paint() {
      var dark = root.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '☀️' : '🌙';
      var label = dark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด';
      btn.setAttribute('aria-label', label);
      btn.title = label;
    }

    paint();
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save(next);
      paint();
    });
  });
})();

/* รูปที่โหลดสำเร็จ → เปลี่ยนกรอบเป็นเส้นทึบ */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.photo img').forEach(function (img) {
    function ok() { img.parentElement.classList.add('has-img'); }
    img.addEventListener('load', ok);
    if (img.complete && img.naturalWidth) ok();
  });
});
