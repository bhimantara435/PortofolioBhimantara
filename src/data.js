import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFigma,
  FaBootstrap,
  FaNodeJs,
  FaPenNib,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiFlutter,
  SiLivewire,
  SiCanva,
} from "react-icons/si";

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/bhimantara435",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bmntra.wep/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@bmntra.wep",
    icon: FaTiktok,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@smoky404-6",
    icon: FaYoutube,
  },
];

export const listTools = [
  { name: "HTML", category: "Frontend", icon: FaHtml5 },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt },
  { name: "JavaScript", category: "Language", icon: FaJs },
  { name: "React JS", category: "Frontend", icon: FaReact },
  { name: "Tailwind CSS", category: "Framework", icon: SiTailwindcss },
  { name: "Vite", category: "Build Tool", icon: SiVite },
  { name: "Laravel", category: "Backend", icon: SiLaravel },
  { name: "PHP", category: "Language", icon: SiPhp },
  { name: "MySQL", category: "Database", icon: SiMysql },
  { name: "Firebase", category: "Database", icon: SiFirebase },
  { name: "Flutter", category: "Mobile", icon: SiFlutter },
  { name: "Bootstrap", category: "Framework", icon: FaBootstrap },
  { name: "Node JS", category: "Runtime", icon: FaNodeJs },
  { name: "Figma", category: "Design", icon: FaFigma },
  { name: "Canva", category: "Design", icon: SiCanva },
  { name: "Adobe Illustrator", category: "Design", icon: FaPenNib },
];

export const listProyek = [
  {
    title: "Prestasi Mahasiswa",
    image: "/assets/poster_prestasi_mahasiswa.png",
    description:
      "Website pengelolaan prestasi, kompetisi, sertifikat, dan data mahasiswa dengan dashboard admin.",
    tech: ["PHP", "MySQL", "Bootstrap", "Admin Panel"],
    github: "https://github.com/atslhamny/PBL-PRESTASI-MAHASISWA",
  },
  {
    title: "MindCheck",
    image: "/assets/poster_website_screening_kesehatan_mental.png",
    description:
      "Website screening kesehatan mental berbasis Laravel dengan fitur screening, dashboard, CRUD, dan riwayat.",
    tech: ["Laravel", "PHP", "Vite", "Tailwind CSS", "MySQL"],
    github: "https://github.com/aldofebryn/pblmindcheck",
  },
  {
    title: "SIMPEL Peminjaman Lab",
    image: "/assets/poster_mobile_apps_peminjaman_lab_revisi.png",
    description:
      "Aplikasi mobile peminjaman laboratorium untuk mahasiswa, admin, dan aslab dengan status real-time.",
    tech: ["Flutter", "Firebase", "Firestore", "Auth"],
    github: "https://github.com/septyandini921/pbl_peminjaman_lab",
  },
  {
    title: "Website Pendaftaran TOEIC",
    image: "/assets/poster_website_pendaftaran_toeic.png",
    description:
      "Website pendaftaran ujian TOEIC berbasis Laravel untuk mahasiswa dan admin dengan fitur approval peserta.",
    tech: ["Laravel", "PHP", "Livewire", "Excel Import"],
    github: "https://github.com/igaramadana/PWL_PBL_TOEIC",
  },
];

export const listSertifikat = [
  {
    title: "Sertifikat Kompetensi BNSP",
    subtitle: "Teknisi Jaringan dan Sistem Komputer",
    image: "/assets/Sertifikat Teknisi Jaringan dan Sistem Komputer (2).jpg",
  },
  {
    title: "Sertifikat PECT",
    subtitle: "Polytechnic English Competence Test",
    image: "/assets/Sertifikat PECT Bhimantara (1).jpg",
  },
  {
    title: "Latihan Dasar Kedisiplinan",
    subtitle: "LDK Mahasiswa Baru",
    image: "/assets/Sertifikat Latihan Dasar Kedisiplinan Bhimantara (1).jpg",
  },
  {
    title: "On Job Training",
    subtitle: "Planet Computer / CV Planet Solusindo",
    image: "/assets/Sertifikat On Job Training (2).jpg",
  },
  {
    title: "Praktik Kerja Industri",
    subtitle: "Universitas Yudharta Pasuruan",
    image: "/assets/Sertifikat Praktik Kerja Industri (2).jpg",
  },
];