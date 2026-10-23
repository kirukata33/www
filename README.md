# Portofolio Ahmad Revalvala

Dibuat dengan Astro + Tailwind CSS. Konten berbahasa Indonesia.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:4321
npm run build    # hasil ada di folder dist/
```

## Mengganti isi

Semua teks yang sering berubah ada di `src/data/site.ts`:

- `site.email` dan `site.socials`: email dan tautan sosial
- `projects`: daftar proyek di halaman Portofolio
- `skills`: daftar keahlian di halaman Tentang

Teks beranda dan halaman Tentang ada di `src/pages/`.

## Deploy

Unggah folder ini ke Vercel atau Netlify (build command `npm run build`, output `dist`).
Setelah punya domain, ganti `site` di `astro.config.mjs`.
