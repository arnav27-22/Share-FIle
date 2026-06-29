# FlowShare ⚡ Production-Ready Enterprise File Sharing Platform

Built with Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion, and Prisma.

## Key Features
- **WeTransfer Style**: Secure links with password protection, expiration timers, and custom aliases.
- **Snapdrop P2P Radar**: Real-time browser-to-browser WebRTC file streaming between local devices.
- **AES-256 Encryption**: Client-side and server-side cryptographic encryption options.
- **Multi-Cloud Storage Driver**: Local storage fallback with seamless AWS S3, Cloudflare R2, and Backblaze B2 configuration support.
- **Dynamic QR Generation**: On-the-fly mobile scanning download codes.
- **Glassmorphism UI**: High-end frosted glass styling with background glowing aurora animations.
- **Built-in Credit**: Premium glass card footer featuring **Built with ❤️ by Arnav Pagare** on all pages.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Initialize SQLite database & seed demo accounts:
   ```bash
   npx prisma db push
   node prisma/seed.mjs
   ```
3. Run local dev server:
   ```bash
   npm run dev
   ```
4. Access app at `http://localhost:3000`
