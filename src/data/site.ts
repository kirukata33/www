// Semua isi situs yang sering berubah ada di berkas ini.
// Ganti bagian bertanda "GANTI" dengan data aslimu.

export const site = {
  name: 'Ahmad Revalvala',
  role: 'Programmer, editor, dan game developer',
  description:
    'Portofolio Ahmad Revalvala: proyek Laravel, klip video, serta game 2D dan 3D.',
  // GANTI: alamat email yang mau ditampilkan di halaman Kontak
  email: 'emailkamu@example.com',
  socials: [
    // GANTI atau tambah tautan sosial lain (YouTube, Instagram, itch.io, dll.)
    { label: 'GitHub', href: 'https://github.com/kirukata33' },
  ],
};

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Portofolio', href: '/portofolio' },
  { label: 'Kontak', href: '/kontak' },
];

export type Category = 'laravel' | 'clipper' | 'game2d' | 'game3d';

export const categories: {
  id: Category;
  label: string;
  color: string;
  summary: string;
}[] = [
  {
    id: 'laravel',
    label: 'Laravel',
    color: 'violet',
    summary: 'Aplikasi web dengan Laravel: autentikasi, panel admin, dan API.',
  },
  {
    id: 'clipper',
    label: 'Clipper',
    color: 'amber',
    summary: 'Memotong video panjang menjadi klip pendek yang enak ditonton.',
  },
  {
    id: 'game2d',
    label: 'Game 2D',
    color: 'teal',
    summary: 'Game 2D mulai dari gameplay, sprite, sampai antarmuka.',
  },
  {
    id: 'game3d',
    label: 'Game 3D',
    color: 'rose',
    summary: 'Game 3D mulai dari level, karakter, sampai kamera.',
  },
];

export type Project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  href?: string; // tautan demo atau repositori, boleh dikosongkan
};

// GANTI: isi dengan proyek aslimu. Tiap entri akan muncul di halaman Portofolio.
export const projects: Project[] = [
  {
    title: 'Aplikasi web Laravel',
    category: 'laravel',
    description:
      'Aplikasi web dengan Laravel yang mencakup login, pengelolaan data, dan panel admin.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Klip dan highlight video',
    category: 'clipper',
    description:
      'Memilih momen terbaik dari video panjang, lalu mengeditnya menjadi klip pendek dengan ritme yang pas.',
    tags: ['Editing', 'Highlight', 'Video pendek'],
  },
  {
    title: 'Game 2D',
    category: 'game2d',
    description:
      'Game 2D dengan sistem gameplay, animasi sprite, dan antarmuka yang jelas dibaca.',
    tags: ['Unity', 'C#', '2D'],
  },
  {
    title: 'Game 3D',
    category: 'game3d',
    description:
      'Game 3D dengan level, karakter, dan sistem kamera yang dibangun dari awal.',
    tags: ['Unity', 'C#', '3D'],
  },
];

export const skills = [
  {
    group: 'Pemrograman',
    color: 'violet',
    items: ['Laravel', 'PHP', 'JavaScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    group: 'Game development',
    color: 'teal',
    items: ['Unity', 'C#', 'Game 2D', 'Game 3D'],
  },
  {
    group: 'Editing video',
    color: 'amber',
    items: ['Memotong klip', 'Ritme dan transisi', 'Highlight', 'Video pendek'],
  },
];
