# MOOBI_RETAIL
## Ekosistem & Suite Solusi Operasional E-Commerce & Retail Indonesia

Moobi Retail adalah platform e-commerce enabler terpadu yang memadukan 5 halaman utama (Home, Profile, Product, Blog, Contact) dengan 6 modul operasional interaktif (Komerce.id model):
1. **Agentic Invoice & Dynamic QRIS Generator** (Hermes/OpenClaw AI Chat Parser)
2. **AI Chatbot Customer Service 24/7** (Prism Engine)
3. **Smart Marketing CRM & RFM Segmentation** (WhatsApp Campaign Official API)
4. **Multi-Kurir Logistics & Cetak Resi Thermal A6** (15+ Ekspedisi)
5. **Multi-Channel Inventory Synchronizer** (Shopee, Tokopedia, TikTok Shop, Web Store)
6. **Commercial Monitoring & Financial Analytics** (GMV, Net Profit, SLA)

---

### Arsitektur Sistem & Struktur Repositori (Berdasarkan ARCHITECTURE.md)

- `index.html` — Aplikasi Web Interaktif All-in-One (5 Halaman Desain Figma + 6 Modul Workspace Demo).
- `app.js` — State Engine, AI Parser, Chatbot Simulator, Shipping Rate Comparator, & Sync Engine.
- `moobi-frontend/` — Single Page Application (React + Vite + Tailwind CSS + Lucide Icons).
- `moobi-backend/` — Modular Laravel 11 Clean Architecture & RESTful API Specifications.
- `docker-compose.yml` — Containerized Multi-Service Deployment (Frontend, Backend, PostgreSQL, Redis).
- `railway.json` — Deployment blueprint untuk Railway Cloud Staging & Testing.

---

### Cara Menjalankan Aplikasi Secara Lokal

#### 1. Langsung via Browser (Standalone):
Buka file `index.html` langsung di browser:
```bash
file:///d:/e-commerce%20moobi/index.html
```

#### 2. Menjalankan Frontend React:
```bash
cd moobi-frontend
npm install
npm run dev
```

#### 3. Menjalankan Multi-Container Docker:
```bash
docker-compose up -d
```
