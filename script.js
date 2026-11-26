document.addEventListener("DOMContentLoaded", function () {
  // =====================================
  // 1. PACKAGE SLIDER - SWIPER
  // =====================================

  if (typeof Swiper !== "undefined") {
    const packageSwiper = new Swiper(".packageSwiper", {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,

      navigation: {
        nextEl: ".package-swiper-next",
        prevEl: ".package-swiper-prev",
      },

      pagination: {
        el: ".packageSwiper .swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
  } else {
    console.error("Swiper belum dimuat. Periksa CDN Swiper di index.html.");
  }

  // =====================================
  // 2. DATA PAKET WISATA
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

    jogja: {
      nama: "Jogja Heritage Journey",
      destinasi: "Yogyakarta",
      kategori: "CULTURE & HERITAGE",
      durasi: "3 Hari 2 Malam",
      harga: 1850000,
      gambar: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd",
      deskripsi: "Jelajahi wisata budaya dan tempat bersejarah di Yogyakarta.",
      highlight: "Borobudur, Malioboro, dan Keraton.",
      fasilitas: [],
    },

    lombok: {
      nama: "Lombok Tropical Escape",
      destinasi: "Lombok",
      kategori: "TROPICAL ESCAPE",
      durasi: "3 Hari 2 Malam",
      harga: 2750000,
      gambar: "assets/59dadae1498c168dcf6382474d1ac756.jpg",
      deskripsi: "Nikmati keindahan pantai dan panorama alam di Pulau Lombok.",
      highlight: "Pantai Kuta dan Bukit Merese.",
      fasilitas: [],
    },

    toba: {
      nama: "Lake Toba Adventure",
      destinasi: "Sumatera Utara",
      kategori: "NATURE ADVENTURE",
      durasi: "3 Hari 2 Malam",
      harga: 2250000,
      gambar: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      deskripsi: "Jelajahi keindahan Danau Toba dan Pulau Samosir.",
      highlight: "Danau Toba dan Pulau Samosir.",
      fasilitas: [],
    },

    ijen: {
      nama: "Ijen Blue Fire Experience",
      destinasi: "Banyuwangi",
      kategori: "MOUNTAIN ADVENTURE",
      durasi: "2 Hari 1 Malam",
      harga: 1650000,
      gambar: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      deskripsi:
        "Nikmati panorama alam dan pengalaman wisata di kawasan Kawah Ijen.",
      highlight: "Kawah Ijen dan panorama alam.",
      fasilitas: [],
    },
  };

  // =====================================
  // 3. FORMAT HARGA RUPIAH
  // =====================================

  function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
  }

  // =====================================
  // 4. MENAMPILKAN DETAIL PAKET
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

    const daftarFasilitas = document.getElementById("fasilitasModal");

    daftarFasilitas.innerHTML = "";

    paket.fasilitas.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      daftarFasilitas.appendChild(li);
    });

    const modalElement = document.getElementById("modalPaket");
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

    modal.show();
  }

  // =====================================
  // 5. FORM PEMBELIAN PAKET
  // =====================================

  const tombolPesanPaket = document.getElementById("tombolPesanPaket");

  if (tombolPesanPaket) {
    tombolPesanPaket.addEventListener("click", function () {
      const paket = dataPaket[paketDipilih];

      if (!paket) {
        alert("Silakan pilih paket terlebih dahulu.");
        return;
      }

      document.getElementById("bookingPaket").value = paketDipilih;

      const modalElement = document.getElementById("modalPaket");
      const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

      modal.hide();

      hitungTotalBooking();

      document.getElementById("booking").scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // =====================================
  // 6. MENGHITUNG TOTAL PEMBELIAN
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

  if (pilihanBooking && jumlahBooking) {
    pilihanBooking.addEventListener("change", hitungTotalBooking);
    jumlahBooking.addEventListener("input", hitungTotalBooking);
  }

  // =====================================
  // 7. VALIDASI DAN SIMULASI PEMBELIAN
  // =====================================

  const formBooking = document.getElementById("formBooking");

  if (formBooking) {
    formBooking.addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("bookingNama").value.trim();
      const email = document.getElementById("bookingEmail").value.trim();
      const telepon = document.getElementById("bookingTelepon").value.trim();
      const kode = document.getElementById("bookingPaket").value;
      const tanggal = document.getElementById("bookingTanggal").value;
      const jumlah = Number(document.getElementById("bookingJumlah").value);
      const catatan = document.getElementById("bookingCatatan").value.trim();

      document
        .querySelectorAll("#formBooking .error-message")
        .forEach(function (error) {
          error.textContent = "";
        });

      document
        .querySelectorAll(
          "#formBooking .form-control, #formBooking .form-select",
        )
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

      const paket = dataPaket[kode];
      const total = paket.harga * jumlah;

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

      document.querySelector(".booking-layout-modern").style.display = "none";

      hasil.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // =====================================
  // 8. VALIDASI FORMULIR KONTAK
  // =====================================

  const formKontak = document.getElementById("formKontak");

  if (formKontak) {
    formKontak.addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("contactNama").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const subjek = document.getElementById("contactSubjek").value.trim();
      const pesan = document.getElementById("contactPesan").value.trim();

      const errorNama = document.getElementById("errorNama");
      const errorEmail = document.getElementById("errorEmail");
      const errorSubjek = document.getElementById("errorSubjek");
      const errorPesan = document.getElementById("errorPesan");

      const pesanKontak = document.getElementById("pesanKontak");

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

      const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validasi nama
      if (nama === "") {
        errorNama.textContent = "Nama lengkap wajib diisi.";

        document.getElementById("contactNama").classList.add("input-error");

        valid = false;
      }

      // Validasi email
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
  }
});
