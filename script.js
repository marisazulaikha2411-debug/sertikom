// =====================================
// 1. DATA PAKET WISATA
// =====================================

const dataPaket = {
  bali: {
    nama: "Bali Escape",
    destinasi: "Bali",
    kategori: "BEACH & CULTURE",
    durasi: "3 Hari 2 Malam",
    harga: 2450000,
    gambar: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    deskripsi:
      "Nikmati liburan di Bali dengan keindahan pantai, budaya tradisional, dan suasana pulau yang menarik.",
    highlight: "Pantai, budaya, dan sunset.",
    fasilitas: [
      "Transportasi wisata",
      "Penginapan 2 malam",
      "Tiket masuk wisata",
      "Pemandu perjalanan",
    ],
  },

  bromo: {
    nama: "Bromo Sunrise Trip",
    destinasi: "Jawa Timur",
    kategori: "MOUNTAIN TRIP",
    durasi: "2 Hari 1 Malam",
    harga: 1350000,
    gambar: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    deskripsi:
      "Jelajahi kawasan Gunung Bromo dan nikmati panorama matahari terbit serta keindahan lautan pasir.",
    highlight: "Sunrise dan lautan pasir.",
    fasilitas: [
      "Transportasi wisata",
      "Penginapan 1 malam",
      "Jeep wisata",
      "Pemandu perjalanan",
    ],
  },

  raja: {
    nama: "Raja Ampat Discovery",
    destinasi: "Papua Barat Daya",
    kategori: "OCEAN ADVENTURE",
    durasi: "4 Hari 3 Malam",
    harga: 5750000,
    gambar: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
    deskripsi:
      "Jelajahi keindahan kepulauan Raja Ampat dengan pemandangan laut yang memukau dan pengalaman wisata bahari.",
    highlight: "Island hopping dan snorkeling.",
    fasilitas: [
      "Transportasi wisata",
      "Penginapan 3 malam",
      "Perjalanan perahu",
      "Pemandu perjalanan",
    ],
  },

  labuan: {
    nama: "Labuan Bajo Explorer",
    destinasi: "Nusa Tenggara Timur",
    kategori: "ISLAND EXPLORER",
    durasi: "3 Hari 2 Malam",
    harga: 3950000,
    gambar: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    deskripsi:
      "Nikmati perjalanan menjelajahi Labuan Bajo, Pulau Komodo, dan gugusan pulau dengan pemandangan laut yang indah.",
    highlight: "Pulau Komodo dan sailing.",
    fasilitas: [
      "Transportasi wisata",
      "Penginapan 2 malam",
      "Perjalanan kapal",
      "Pemandu perjalanan",
    ],
  },
};

// =====================================
// 2. FORMAT HARGA RUPIAH
// =====================================

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// =====================================
// 3. MENAMPILKAN DETAIL PAKET
// =====================================

let paketDipilih = "";

function tampilkanDetail(kodePaket) {
  const paket = dataPaket[kodePaket];

  if (!paket) {
    alert("Paket wisata tidak ditemukan.");
    return;
  }

  paketDipilih = kodePaket;

  document.getElementById("kategoriModal").textContent = paket.kategori;

  document.getElementById("namaModal").textContent = paket.nama;

  document.getElementById("destinasiModal").textContent = paket.destinasi;

  document.getElementById("durasiModal").textContent = paket.durasi;

  document.getElementById("hargaModal").textContent =
    formatRupiah(paket.harga) + " / orang";

  document.getElementById("deskripsiModal").textContent = paket.deskripsi;

  document.getElementById("highlightModal").textContent = paket.highlight;

  document.getElementById("gambarModal").src = paket.gambar;

  document.getElementById("gambarModal").alt = paket.nama;

  // Menampilkan daftar fasilitas
  const daftarFasilitas = document.getElementById("fasilitasModal");

  daftarFasilitas.innerHTML = "";

  paket.fasilitas.forEach(function (item) {
    const li = document.createElement("li");

    li.textContent = item;

    daftarFasilitas.appendChild(li);
  });

  // Membuka modal Bootstrap
  const modalElement = document.getElementById("modalPaket");

  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

  modal.show();
}

// =====================================
// 4. FORM PEMBELIAN PAKET
// =====================================

const tombolPesanPaket = document.getElementById("tombolPesanPaket");

tombolPesanPaket.addEventListener("click", function () {
  const paket = dataPaket[paketDipilih];

  if (!paket) {
    alert("Silakan pilih paket terlebih dahulu.");
    return;
  }

  // Memilih paket secara otomatis
  document.getElementById("bookingPaket").value = paketDipilih;

  // Menutup modal
  const modalElement = document.getElementById("modalPaket");

  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

  modal.hide();

  // Memperbarui ringkasan
  hitungTotalBooking();

  // Menuju form pembelian
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth",
  });
});

// =====================================
// 5. MENGHITUNG TOTAL PEMBELIAN
// =====================================

const pilihanBooking = document.getElementById("bookingPaket");

const jumlahBooking = document.getElementById("bookingJumlah");

function hitungTotalBooking() {
  const kode = pilihanBooking.value;

  const jumlah = Number(jumlahBooking.value);

  const paket = dataPaket[kode];

  if (!paket) {
    document.getElementById("summaryNama").textContent = "Belum dipilih";

    document.getElementById("summaryDurasi").textContent = "-";

    document.getElementById("summaryHarga").textContent = "Rp0";

    document.getElementById("summaryTotal").textContent = "Rp0";

    document.getElementById("summaryJumlah").textContent = jumlah + " orang";

    return;
  }

  const total = paket.harga * jumlah;

  document.getElementById("summaryNama").textContent = paket.nama;

  document.getElementById("summaryDurasi").textContent = paket.durasi;

  document.getElementById("summaryHarga").textContent = formatRupiah(
    paket.harga,
  );

  document.getElementById("summaryJumlah").textContent = jumlah + " orang";

  document.getElementById("summaryTotal").textContent = formatRupiah(total);
}

// Menghitung ulang ketika paket atau jumlah berubah
pilihanBooking.addEventListener("change", hitungTotalBooking);

jumlahBooking.addEventListener("input", hitungTotalBooking);

// =====================================
// 6. VALIDASI DAN SIMULASI PEMBELIAN
// =====================================

const formBooking = document.getElementById("formBooking");

formBooking.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("bookingNama").value.trim();

  const email = document.getElementById("bookingEmail").value.trim();

  const telepon = document.getElementById("bookingTelepon").value.trim();

  const kode = document.getElementById("bookingPaket").value;

  const tanggal = document.getElementById("bookingTanggal").value;

  const jumlah = Number(document.getElementById("bookingJumlah").value);

  const catatan = document.getElementById("bookingCatatan").value.trim();

  // Menghapus pesan error sebelumnya
  document
    .querySelectorAll("#formBooking .error-message")
    .forEach(function (error) {
      error.textContent = "";
    });

  document
    .querySelectorAll("#formBooking .form-control, #formBooking .form-select")
    .forEach(function (input) {
      input.classList.remove("input-error");
    });

  let valid = true;

  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const polaTelepon = /^[0-9+\-\s]{9,16}$/;

  const tanggalPilihan = new Date(tanggal + "T00:00:00");

  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);

  // Validasi nama
  if (nama === "") {
    document.getElementById("bookingErrorNama").textContent =
      "Nama wajib diisi.";

    document.getElementById("bookingNama").classList.add("input-error");

    valid = false;
  }

  // Validasi email
  if (!polaEmail.test(email)) {
    document.getElementById("bookingErrorEmail").textContent =
      "Masukkan email dengan format yang benar.";

    document.getElementById("bookingEmail").classList.add("input-error");

    valid = false;
  }

  // Validasi telepon
  if (!polaTelepon.test(telepon)) {
    document.getElementById("bookingErrorTelepon").textContent =
      "Masukkan nomor WhatsApp yang valid.";

    document.getElementById("bookingTelepon").classList.add("input-error");

    valid = false;
  }

  // Validasi paket
  if (!kode || !dataPaket[kode]) {
    document.getElementById("bookingErrorPaket").textContent =
      "Silakan pilih paket wisata.";

    document.getElementById("bookingPaket").classList.add("input-error");

    valid = false;
  }

  // Validasi tanggal
  if (!tanggal || tanggalPilihan < hariIni) {
    document.getElementById("bookingErrorTanggal").textContent =
      "Pilih tanggal hari ini atau setelahnya.";

    document.getElementById("bookingTanggal").classList.add("input-error");

    valid = false;
  }

  // Validasi jumlah peserta
  if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 20) {
    document.getElementById("bookingErrorJumlah").textContent =
      "Jumlah peserta harus antara 1 sampai 20.";

    document.getElementById("bookingJumlah").classList.add("input-error");

    valid = false;
  }

  if (!valid) {
    return;
  }

  // Menghitung total pembayaran
  const paket = dataPaket[kode];

  const total = paket.harga * jumlah;

  // Menampilkan hasil pemesanan
  const hasil = document.getElementById("hasilBooking");

  const detail = document.getElementById("detailHasilBooking");

  hasil.hidden = false;

  detail.innerHTML = "";

  const dataHasil = [
    ["Nama Pemesan", nama],
    ["Email", email],
    ["Nomor WhatsApp", telepon],
    ["Paket Wisata", paket.nama],
    ["Destinasi", paket.destinasi],
    ["Durasi", paket.durasi],
    ["Tanggal Keberangkatan", tanggal],
    ["Jumlah Peserta", jumlah + " orang"],
    ["Harga per Orang", formatRupiah(paket.harga)],
    ["Total Pembayaran", formatRupiah(total)],
    ["Catatan", catatan || "-"],
  ];

  const kotak = document.createElement("div");

  kotak.className = "booking-result-detail";

  dataHasil.forEach(function (item) {
    const baris = document.createElement("p");

    const label = document.createElement("span");

    const nilai = document.createElement("strong");

    label.textContent = item[0];

    nilai.textContent = item[1];

    baris.appendChild(label);

    baris.appendChild(nilai);

    kotak.appendChild(baris);
  });

  detail.appendChild(kotak);

  // Sembunyikan formulir dan panel informasi
  document.querySelector(".booking-layout-modern").style.display = "none";

  // Tampilkan invoice
  hasil.hidden = false;

  // Arahkan layar ke invoice
  hasil.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  alert("Pemesanan " + paket.nama + " berhasil disimulasikan!");
});

// =====================================
// 5. VALIDASI FORMULIR KONTAK
// =====================================

const formKontak = document.getElementById("formKontak");

formKontak.addEventListener("submit", function (event) {
  event.preventDefault();

  // Mengambil nilai input
  const nama = document.getElementById("contactNama").value.trim();

  const email = document.getElementById("contactEmail").value.trim();

  const subjek = document.getElementById("contactSubjek").value.trim();

  const pesan = document.getElementById("contactPesan").value.trim();

  // Mengambil elemen pesan kesalahan
  const errorNama = document.getElementById("errorNama");
  const errorEmail = document.getElementById("errorEmail");
  const errorSubjek = document.getElementById("errorSubjek");
  const errorPesan = document.getElementById("errorPesan");

  const pesanKontak = document.getElementById("pesanKontak");

  // Menghapus pesan sebelumnya
  errorNama.textContent = "";
  errorEmail.textContent = "";
  errorSubjek.textContent = "";
  errorPesan.textContent = "";

  pesanKontak.textContent = "";

  document
    .querySelectorAll("#formKontak .form-control")
    .forEach(function (input) {
      input.classList.remove("input-error");
    });

  let valid = true;

  // Validasi nama
  if (nama === "") {
    errorNama.textContent = "Nama lengkap wajib diisi.";

    document.getElementById("contactNama").classList.add("input-error");

    valid = false;
  }

  // Validasi email
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errorEmail.textContent = "Email wajib diisi.";

    document.getElementById("contactEmail").classList.add("input-error");

    valid = false;
  } else if (!polaEmail.test(email)) {
    errorEmail.textContent = "Format email tidak valid.";

    document.getElementById("contactEmail").classList.add("input-error");

    valid = false;
  }

  // Validasi subjek
  if (subjek === "") {
    errorSubjek.textContent = "Subjek wajib diisi.";

    document.getElementById("contactSubjek").classList.add("input-error");

    valid = false;
  }

  // Validasi pesan
  if (pesan === "") {
    errorPesan.textContent = "Pesan wajib diisi.";

    document.getElementById("contactPesan").classList.add("input-error");

    valid = false;
  }

  // Jika semua data valid
  if (valid) {
    pesanKontak.textContent =
      "Terima kasih, " + nama + "! Pesan kamu berhasil disimulasikan.";

    pesanKontak.className = "success-message";

    formKontak.reset();
  }
});


// PACKAGE SLIDER
let posisiPaket = 0;

function geserPaket(arah) {
  const track = document.getElementById("packageTrack");
  const slides = track.querySelectorAll(".package-slide");
  const slider = document.querySelector(".package-slider");

  if (!track || !slider || slides.length === 0) return;

  const lebarKartu = slides[0].getBoundingClientRect().width;
  const styleTrack = window.getComputedStyle(track);
  const jarak = parseFloat(styleTrack.columnGap) || 0;

  const jumlahTerlihat = Math.max(
    1,
    Math.floor((slider.clientWidth + jarak) / (lebarKartu + jarak))
  );

  const posisiMaksimal = Math.max(0, slides.length - jumlahTerlihat);

  posisiPaket += arah;
  posisiPaket = Math.max(0, Math.min(posisiPaket, posisiMaksimal));

  const geseran = posisiPaket * (lebarKartu + jarak);

  track.style.transform = `translateX(-${geseran}px)`;
}
