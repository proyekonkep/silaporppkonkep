/* Mobile nav & form handler */
const navToggle = document.querySelector('.nav-toggle');
const navDrawer = document.getElementById('navDrawer');
if (navToggle){
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navDrawer.hidden = open;
  });
}
document.getElementById('y').textContent = new Date().getFullYear();

function submitReport(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const nama = data.get('nama') || 'Anonim';
  const kontak = data.get('kontak');
  const lokasi = data.get('lokasi');
  const uraian = data.get('uraian');
  const msg = `SILAPOR - Laporan Baru:%0A%0ANama: ${nama}%0AKontak: ${kontak}%0ALokasi: ${lokasi}%0AUraian: ${uraian}`;
  // Redirect ke WhatsApp sebagai contoh (ubah nomor WA di bawah)
  window.location.href = `https://wa.me/6281234567890?text=${msg}`;
  return false;
}
