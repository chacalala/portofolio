import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "pencarian-jamu-tradisional-madura",
    title: "Pencarian Jamu Tradisional Madura Berdasarkan Keluhan Pengguna",
    category: "Skripsi",
    description:
      "Sistem pencarian jamu tradisional Madura berdasarkan keluhan pengguna menggunakan metode N-Gram untuk ekstraksi fitur teks dan Cosine Similarity untuk menghitung tingkat kemiripan.",
    technologies: [
      "Python",
      "Streamlit",
      "N-Gram",
      "Cosine Similarity",
      "Natural Language Processing",
    ],
    image: "/projects/search.webp",
    gallery: [
      "/projects/jamu-tradisional-madura/1.webp",
      "/projects/jamu-tradisional-madura/2.webp",
    ],
    featured: true,
    github: "https://github.com/chacalala/Skripsi",
    year: 2026,
  },

  {
    slug: "sistem-rekomendasi-wisata",
    title: "Sistem Rekomendasi Wisata",
    category: "Proyek Mata Kuliah",
    description:
      "Sistem rekomendasi wisata yang dikembangkan untuk membantu pengguna menemukan destinasi wisata berdasarkan kata kunci atau kebutuhan pencarian menggunakan metode Hybrid Search BM25 dan Cosine Similarity.",
    technologies: [
      "Python",
      "Streamlit",
      "BM25",
      "Cosine Similarity",
    ],
    image: "/projects/rekomendasi.webp",
    gallery: [
      "/projects/rekomendasi-wisata/1.webp",
      "/projects/rekomendasi-wisata/2.webp",
    ],
    featured: true,
    github: "https://github.com/chacalala/informatika-pariwisata",
    year: 2026,
  },

  {
    slug: "project-management-task",
    title: "Project Management Task",
    category: "Proyek Mata Kuliah",
    description:
      "Sistem manajemen proyek dan tugas berbasis web yang membantu pengguna mengelola tugas, proyek, kategori, serta profil pengguna melalui fitur autentikasi dan dashboard.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/projects/task.webp",
    gallery: [
      "/projects/project-management-task/1.webp",
      "/projects/project-management-task/2.webp",
    ],
    featured: true,
    github: "https://github.com/Vems04-sync/PPLL_UAS",
    year: 2026,
  },

  {
    slug: "sistem-informasi-magang",
    title: "Sistem Informasi Magang",
    category: "Proyek Magang",
    description:
      "Sistem informasi berbasis web untuk mengelola proses magang, mulai dari pengajuan dan pengelolaan data instansi hingga pemantauan kegiatan, logbook, absensi, penilaian, dan sertifikat mahasiswa.",
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    image: "/projects/magang.webp",
    featured: true,
    github: "https://github.com/DeviDuwiSusanti/magang",
    year: 2025,
  },

  {
    slug: "acala-bromo",
    title: "ACALA BROMO - Travel & Tourism Website",
    category: "Proyek Mata Kuliah",
    description:
      "Website travel dan wisata Bromo yang menyediakan informasi destinasi, paket perjalanan, blog, kontak, serta fitur pemesanan dan pembayaran untuk memberikan pengalaman perjalanan yang lebih mudah dan terintegrasi.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/projects/acala.webp",
    featured: true,
    github: "https://github.com/chacalala/Acala",
    year: 2024,
  },

  {
    slug: "bitcoin-prediction",
    title: "Bitcoin Price Prediction",
    category: "Personal Project",
    description:
      "Sistem prediksi harga Bitcoin yang memanfaatkan data harga pembukaan, harga tertinggi, harga terendah, dan harga penutupan untuk membantu memperkirakan harga Bitcoin berdasarkan data yang tersedia.",
    technologies: [
      "HTML",
      "CSS",
      "Python",
      "JavaScript",
    ],
    image: "/projects/psd.webp",
    featured: true,
    github: "https://github.com/chacalala/psd",
    year: 2024,
  },

  {
    slug: "tasty-treats",
    title: "Tasty Treats - Sistem Pemesanan Makanan",
    category: "Proyek Mata Kuliah",
    description:
      "Website pemesanan makanan yang menyediakan fitur pemesanan, pengelolaan menu, riwayat pesanan, pencarian dan pengurutan data pesanan, serta proses pembayaran. Sistem dilengkapi dengan login dan pengelolaan data menggunakan database.",
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Bootstrap",
    ],
    image: "/projects/tasty.webp",
    featured: true,
    github: "https://github.com/chacalala/php-crud.git",
    year: 2023,
  },
];