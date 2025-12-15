const products = [
  ["E-Book Digital Marketing","Panduan lengkap pemasaran digital untuk pemula.","Rp50.000"],
  ["Template Konten Instagram","Template desain feed Instagram.","Rp30.000"],
  ["Kelas Online Marketing","Belajar marketing dari dasar.","Rp150.000"],
  ["Paket Iklan Facebook","Iklan Facebook untuk UMKM.","Rp200.000"],
  ["Paket Iklan Instagram","Optimasi iklan Instagram.","Rp180.000"],
  ["Template Story Promosi","Story promosi siap pakai.","Rp25.000"],
  ["E-Book Branding Bisnis","Membangun brand yang kuat.","Rp55.000"],
  ["Kelas Copywriting","Belajar menulis iklan menarik.","Rp120.000"],
  ["Template Feed UMKM","Desain feed UMKM.","Rp35.000"],
  ["Paket SEO Website","Optimasi SEO dasar.","Rp300.000"],
  ["Jasa Manajemen Sosial Media","Kelola akun bisnis.","Rp500.000"],
  ["Template Landing Page","Template halaman penjualan.","Rp75.000"],
  ["E-Book Strategi Iklan","Strategi iklan digital.","Rp60.000"],
  ["Kelas Bisnis Online","Belajar bisnis online.","Rp200.000"],
  ["Template Proposal Marketing","Proposal siap pakai.","Rp40.000"],
  ["Paket Analisis Pasar","Analisis target pasar.","Rp250.000"],
  ["Template Kalender Konten","Kalender konten bulanan.","Rp30.000"],
  ["E-Book UMKM Go Digital","Panduan UMKM digital.","Rp45.000"]
];

function login() {
  if (username.value === "admin" && password.value === "1234") {
    loginBox.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    error.innerText = "Username atau password salah";
  }
}

function logout() {
  dashboard.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

function searchProduct() {
  let key = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(key) ? "block" : "none";
  });
}

function showDetail(index) {
  detailTitle.innerText = products[index][0];
  detailDesc.innerText = products[index][1];
  detailPrice.innerText = "Harga: " + products[index][2];
  detailBox.classList.remove("hidden");
}

function closeDetail() {
  detailBox.classList.add("hidden");
}
