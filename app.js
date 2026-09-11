/**
 * Moobi Eco - Master Controller & Router
 * Faithful to Design Tokens & ARCHITECTURE.md
 */

// Global State
const appState = {
  currentPage: 'home', // 'home' | 'profile' | 'product' | 'blog' | 'contact' | 'workspace'
  activeWorkspaceModule: 'agenticInvoice',
  walletBalance: 14850000,
  
  // Modul 1: Agentic Invoice State
  currentInvoice: {
    status: 'UNPAID',
    invNumber: 'INV/2025/MOOBI/0984',
    date: '11 September 2025',
    customer: 'Rian Ardiansyah',
    phone: '0812-8899-1234',
    address: 'Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan (12190)',
    courier: 'J&T Express (Reguler)',
    shippingCost: 15000,
    items: [
      { name: 'Batik Mega Mendung Premium (Size L)', sku: 'BTK-MGM-L', qty: 2, price: 185000 }
    ]
  },

  // Modul 3: CRM Customers Data
  crmCustomers: [
    { id: 1, name: 'Rian Ardiansyah', phone: '0812-8899-1234', segment: 'Champions', orders: 12, totalSpend: 'Rp 4.250.000', points: 420 },
    { id: 2, name: 'Siti Nurhaliza', phone: '0813-7722-9988', segment: 'Loyal', orders: 6, totalSpend: 'Rp 1.850.000', points: 185 },
    { id: 3, name: 'Budi Prakoso', phone: '0857-1122-3344', segment: 'At-Risk', orders: 2, totalSpend: 'Rp 450.000', points: 45 },
    { id: 4, name: 'Devi Anggraini', phone: '0819-3344-5566', segment: 'Champions', orders: 9, totalSpend: 'Rp 3.100.000', points: 310 },
    { id: 5, name: 'Ahmad Fauzi', phone: '0821-4455-6677', segment: 'Loyal', orders: 5, totalSpend: 'Rp 1.400.000', points: 140 },
    { id: 6, name: 'Kurnia Ramadhan', phone: '0878-5566-7788', segment: 'At-Risk', orders: 1, totalSpend: 'Rp 220.000', points: 20 },
  ],

  // Modul 4: Orders Fulfillment Queue
  ordersQueue: [
    { id: 'ORD-984', resi: 'JT982173619283ID', name: 'Rian Ardiansyah', city: 'Jakarta Selatan', courier: 'J&T Express', status: 'Siap Pick Up', items: 'Batik Mega Mendung (L) x2' },
    { id: 'ORD-985', resi: 'SC1928381920ID', name: 'Siti Nurhaliza', city: 'Bandung', courier: 'SiCepat BEST', status: 'Siap Pick Up', items: 'Kemeja Batik Parang (M) x1' },
    { id: 'ORD-986', resi: 'TK8829102910ID', name: 'Devi Anggraini', city: 'Surabaya', courier: 'JNE Reguler', status: 'Siap Pick Up', items: 'Outer Batik Casual x1' },
  ],

  // Modul 5: Multi-Channel Inventory
  inventory: [
    { sku: 'BTK-MGM-L', name: 'Batik Mega Mendung Premium (L)', masterStock: 18, shopee: 18, tokopedia: 18, tiktok: 18, web: 18, status: 'Synced' },
    { sku: 'KMJ-PRG-M', name: 'Kemeja Batik Parang Slim (M)', masterStock: 24, shopee: 24, tokopedia: 24, tiktok: 24, web: 24, status: 'Synced' },
    { sku: 'OUT-CSL-ALL', name: 'Outer Batik Casual Modern', masterStock: 5, shopee: 5, tokopedia: 5, tiktok: 5, web: 5, status: 'Synced' },
    { sku: 'DHK-LRS-XL', name: 'Daster Harian Katun Rayon (XL)', masterStock: 65, shopee: 65, tokopedia: 65, tiktok: 65, web: 65, status: 'Synced' },
  ]
};

// Preset Chat Messages for Modul 1
const chatPresets = {
  1: `Halo kak, saya mau pesan Batik Mega Mendung Premium size L 2 pcs ya.
Kirim ke: Rian Ardiansyah
No HP: 081288991234
Alamat: Jl. Senopati No. 45, RT 02/03, Kebayoran Baru, Jakarta Selatan (12190)
Pakai kurir J&T Express ya kak. Minta QRIS nya ya.`,

  2: `Pagi min, mau order Serum Brightening Glow 3 botol.
Atas nama: Siti Nurhaliza
Telp: 081377229988
Alamat kirim: Jl. Dago Atas No. 120, Coblong, Bandung, Jawa Barat (40135)
Ekspedisi: SiCepat BEST besok sampai. Tolong buatkan invoice QRIS.`,

  3: `Halo Moobi Store, mau pesan Kopi Arabica Gayo Whole Beans 250g sebanyak 5 pack.
Nama: Ahmad Fauzi (082144556677)
Alamat: Jl. Basuki Rahmat No. 88, Tegalsari, Surabaya (60261)
Kurir: JNE Regular. Minta link pembayarannya terima kasih!`
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCrmTable();
  renderOrdersQueue();
  renderInventoryTable();
  calculateShippingRates();
  loadChatPreset(1);

  // Check URL hash for direct routing if present
  const hash = window.location.hash.replace('#', '');
  if (['home', 'profile', 'product', 'blog', 'contact', 'workspace'].includes(hash)) {
    if (hash === 'workspace') {
      navigateToWorkspace();
    } else {
      navigateToPage(hash);
    }
  } else {
    navigateToPage('home');
  }
});

/* ========================================================================== */
/* PAGE ROUTER (HOME, PROFILE, PRODUCT, BLOG, CONTACT, WORKSPACE)             */
/* ========================================================================== */

function navigateToPage(pageKey) {
  appState.currentPage = pageKey;

  // Hide all page containers
  document.querySelectorAll('.page-container').forEach(page => {
    page.classList.add('hidden');
  });

  // Show target page
  const target = document.getElementById(`page-${pageKey}`);
  if (target) {
    target.classList.remove('hidden');
  }

  // Show mainNav, hide workspaceNav
  const mainNav = document.getElementById('mainNav');
  const workspaceNav = document.getElementById('workspaceNav');
  if (mainNav) mainNav.classList.remove('hidden');
  if (workspaceNav) {
    workspaceNav.classList.add('hidden');
    workspaceNav.classList.remove('flex');
  }

  // Update Top Switcher Buttons
  const btnTopWeb = document.getElementById('btnTopWeb');
  const btnTopWorkspace = document.getElementById('btnTopWorkspace');
  if (btnTopWeb) btnTopWeb.className = 'px-3 py-1 rounded-full text-[11px] font-bold transition-all bg-white text-[#071330] shadow-sm flex items-center gap-1.5';
  if (btnTopWorkspace) btnTopWorkspace.className = 'px-3 py-1 rounded-full text-[11px] font-bold transition-all text-white hover:bg-white/20 flex items-center gap-1.5';

  // Update Main Nav Link Classes
  document.querySelectorAll('.page-nav-link').forEach(link => {
    link.className = 'page-nav-link px-3.5 py-1.5 text-slate-600 hover:text-primary transition-colors font-medium';
  });

  const activeNavLink = document.getElementById(`nav-${pageKey}`);
  if (activeNavLink) {
    activeNavLink.className = 'page-nav-link px-4 py-1.5 rounded-xl bg-primary/10 text-primary font-semibold transition-colors';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToWorkspace() {
  appState.currentPage = 'workspace';

  // Hide all public pages
  document.querySelectorAll('.page-container').forEach(page => {
    page.classList.add('hidden');
  });

  // Show workspace page
  const target = document.getElementById('page-workspace');
  if (target) {
    target.classList.remove('hidden');
  }

  // Switch navbars
  const mainNav = document.getElementById('mainNav');
  const workspaceNav = document.getElementById('workspaceNav');
  if (mainNav) mainNav.classList.add('hidden');
  if (workspaceNav) {
    workspaceNav.classList.remove('hidden');
    workspaceNav.classList.add('flex');
  }

  // Update Top Switcher Buttons
  const btnTopWeb = document.getElementById('btnTopWeb');
  const btnTopWorkspace = document.getElementById('btnTopWorkspace');
  if (btnTopWorkspace) btnTopWorkspace.className = 'px-3 py-1 rounded-full text-[11px] font-bold transition-all bg-white text-[#071330] shadow-sm flex items-center gap-1.5';
  if (btnTopWeb) btnTopWeb.className = 'px-3 py-1 rounded-full text-[11px] font-bold transition-all text-white hover:bg-white/20 flex items-center gap-1.5';

  switchWorkspaceModule(appState.activeWorkspaceModule);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchWorkspaceModule(moduleId) {
  appState.activeWorkspaceModule = moduleId;

  // Hide all module panels
  document.querySelectorAll('.workspace-module-panel').forEach(panel => {
    panel.classList.add('hidden');
  });

  // Show active module panel
  const activePanel = document.getElementById(`module${capitalizeFirstLetter(moduleId)}`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
  }

  // Metadata update
  const moduleMeta = {
    agenticInvoice: {
      title: 'Agentic Invoice & Dynamic QRIS Generator',
      desc: 'Parsing otomatis chat pesanan WhatsApp pembeli menjadi faktur digital ber-QRIS dalam 3 detik.',
      icon: 'receipt_long',
      badge: 'MODUL 01 • INVOICING'
    },
    chatbotCs: {
      title: 'AI Chatbot Customer Service 24/7 (Prism Engine)',
      desc: 'Asisten AI cerdas untuk menangani tanya-jawab produk, kalkulasi ongkir, dan closing penjualan di WhatsApp.',
      icon: 'smart_toy',
      badge: 'MODUL 02 • AI CS 24/7'
    },
    smartCrm: {
      title: 'Smart Marketing CRM & RFM Segmentation',
      desc: 'Pengelompokan otomatis pelanggan (Champions, Loyal, At-Risk) dan broadcast promosi terarah via WhatsApp Official API.',
      icon: 'groups',
      badge: 'MODUL 03 • CRM & WA'
    },
    logisticsShip: {
      title: 'Multi-Kurir Logistics & Cetak Resi Thermal A6',
      desc: 'Komparasi tarif 15+ ekspedisi, request pick-up massal, dan cetak label resi thermal A6 standar marketplace.',
      icon: 'local_shipping',
      badge: 'MODUL 04 • LOGISTIK'
    },
    channelSync: {
      title: 'Multi-Channel Inventory & Stock Synchronizer',
      desc: 'Sentralisasi stok 1 pintu ke Shopee, Tokopedia, TikTok Shop, dan Web Store tanpa risiko overselling.',
      icon: 'sync_alt',
      badge: 'MODUL 05 • OMNICHANNEL'
    },
    analyticsFinance: {
      title: 'Commercial Monitoring & Financial Analytics',
      desc: 'Dasbor pendapatan real-time, rekonsiliasi kas mutasi bank, dan analisis profit margin bersih.',
      icon: 'monitoring',
      badge: 'MODUL 06 • ANALYTICS'
    }
  };

  const meta = moduleMeta[moduleId] || moduleMeta.agenticInvoice;
  const titleElem = document.getElementById('currentModuleTitle');
  const descElem = document.getElementById('currentModuleDesc');
  const iconElem = document.getElementById('currentModuleIcon');
  const badgeElem = document.getElementById('currentModuleBadge');

  if (titleElem) titleElem.innerText = meta.title;
  if (descElem) descElem.innerText = meta.desc;
  if (iconElem) iconElem.innerText = meta.icon;
  if (badgeElem) badgeElem.innerText = meta.badge;

  // Update tabs styling
  document.querySelectorAll('.ws-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-module') === moduleId) {
      btn.className = 'ws-tab-btn px-3 py-1.5 rounded-lg bg-primary text-white shadow-sm flex items-center gap-1.5 whitespace-nowrap font-bold';
    } else {
      btn.className = 'ws-tab-btn px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap font-semibold';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert('Terima kasih! Permintaan konsultasi Anda telah berhasil dikirimkan ke tim analis Moobi Eco. Kami akan menghubungi Anda via WhatsApp dalam 15-30 menit.');
  e.target.reset();
}

/* ========================================================================== */
/* MODUL 1: AGENTIC INVOICE LOGIC                                             */
/* ========================================================================== */

function loadChatPreset(presetNum) {
  const text = chatPresets[presetNum] || chatPresets[1];
  const textarea = document.getElementById('chatInputArea');
  if (textarea) {
    textarea.value = text;
    parseChatWithAi();
  }
}

function clearChatInput() {
  const textarea = document.getElementById('chatInputArea');
  if (textarea) textarea.value = '';
}

function parseChatWithAi() {
  const rawText = document.getElementById('chatInputArea')?.value || '';
  const btn = document.getElementById('btnParseAi');

  if (!rawText.trim()) return;

  if (btn) {
    btn.innerHTML = `<span class="material-symbols-outlined text-[18px] animate-spin">sync</span> Mengekstrak Entitas Data...`;
    btn.disabled = true;
  }

  setTimeout(() => {
    if (btn) {
      btn.innerHTML = `<span class="material-symbols-outlined text-[18px]">neurology</span> Ekstrak Data &amp; Terbitkan Invoice Instan`;
      btn.disabled = false;
    }

    let parsedData = {};

    if (rawText.toLowerCase().includes('batik')) {
      parsedData = {
        status: 'UNPAID',
        customer: 'Rian Ardiansyah',
        phone: '0812-8899-1234',
        address: 'Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan (12190)',
        courier: 'J&T Express - Regular',
        shippingCost: 15000,
        items: [
          { name: 'Batik Mega Mendung Premium (Size L)', sku: 'BTK-MGM-L', qty: 2, price: 185000 }
        ]
      };
    } else if (rawText.toLowerCase().includes('serum') || rawText.toLowerCase().includes('skincare')) {
      parsedData = {
        status: 'UNPAID',
        customer: 'Siti Nurhaliza',
        phone: '0813-7722-9988',
        address: 'Jl. Dago Atas No. 120, Coblong, Bandung, Jawa Barat (40135)',
        courier: 'SiCepat BEST - Next Day',
        shippingCost: 18000,
        items: [
          { name: 'Serum Brightening Glow 30ml', sku: 'SRM-GLW-30', qty: 3, price: 125000 }
        ]
      };
    } else {
      parsedData = {
        status: 'UNPAID',
        customer: 'Ahmad Fauzi',
        phone: '0821-4455-6677',
        address: 'Jl. Basuki Rahmat No. 88, Tegalsari, Surabaya (60261)',
        courier: 'JNE Reguler',
        shippingCost: 22000,
        items: [
          { name: 'Kopi Arabica Gayo Whole Beans 250g', sku: 'KOP-GYO-250', qty: 5, price: 85000 }
        ]
      };
    }

    // Update State
    appState.currentInvoice.status = 'UNPAID';
    appState.currentInvoice.customer = parsedData.customer;
    appState.currentInvoice.phone = parsedData.phone;
    appState.currentInvoice.address = parsedData.address;
    appState.currentInvoice.courier = parsedData.courier;
    appState.currentInvoice.shippingCost = parsedData.shippingCost;
    appState.currentInvoice.items = parsedData.items;

    renderInvoiceUi();

    const subtotal = parsedData.items.reduce((acc, it) => acc + (it.price * it.qty), 0);
    const grandTotal = subtotal + parsedData.shippingCost;
    const jsonOutput = {
      status: "extracted_success",
      confidence: "99.4%",
      customer: parsedData.customer,
      phone: parsedData.phone,
      address: parsedData.address,
      courier: parsedData.courier,
      items: parsedData.items,
      subtotal: subtotal,
      shipping_cost: parsedData.shippingCost,
      grand_total: grandTotal
    };

    const jsonArea = document.getElementById('jsonPreviewArea');
    if (jsonArea) jsonArea.innerText = JSON.stringify(jsonOutput, null, 2);
  }, 350);
}

function renderInvoiceUi() {
  const inv = appState.currentInvoice;
  const nameEl = document.getElementById('invCustomerName');
  const phoneEl = document.getElementById('invCustomerPhone');
  const addrEl = document.getElementById('invCustomerAddress');
  const courierEl = document.getElementById('invCourier');

  if (nameEl) nameEl.innerText = inv.customer;
  if (phoneEl) phoneEl.innerText = inv.phone;
  if (addrEl) addrEl.innerText = inv.address;
  if (courierEl) courierEl.innerText = inv.courier;

  let itemsHtml = '';
  let subtotal = 0;

  inv.items.forEach(it => {
    const itemTotal = it.price * it.qty;
    subtotal += itemTotal;
    itemsHtml += `
      <div class="flex items-center justify-between py-1.5 border-b border-slate-50">
        <div>
          <span class="font-bold text-slate-800 block">${it.name}</span>
          <span class="text-[11px] text-slate-400 font-mono">${it.qty} pcs x Rp ${it.price.toLocaleString('id-ID')}</span>
        </div>
        <span class="font-bold text-slate-900">Rp ${itemTotal.toLocaleString('id-ID')}</span>
      </div>
    `;
  });

  const grandTotal = subtotal + inv.shippingCost;
  const itemsListEl = document.getElementById('invItemsList');
  const subtotalEl = document.getElementById('invSubtotal');
  const shippingEl = document.getElementById('invShipping');
  const grandTotalEl = document.getElementById('invGrandTotal');

  if (itemsListEl) itemsListEl.innerHTML = itemsHtml;
  if (subtotalEl) subtotalEl.innerText = `Rp ${subtotal.toLocaleString('id-ID')}`;
  if (shippingEl) shippingEl.innerText = `Rp ${inv.shippingCost.toLocaleString('id-ID')}`;
  if (grandTotalEl) grandTotalEl.innerText = `Rp ${grandTotal.toLocaleString('id-ID')}`;

  const badge = document.getElementById('invoiceStatusBadge');
  const btnPay = document.getElementById('btnSimulatePay');

  if (badge && btnPay) {
    if (inv.status === 'PAID') {
      badge.className = 'px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm flex items-center gap-1';
      badge.innerHTML = `<span class="material-symbols-outlined text-[16px] text-emerald-600">verified</span> LUNAS (PAID)`;
      btnPay.disabled = true;
      btnPay.className = 'px-3.5 py-1.5 bg-slate-300 text-slate-600 font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5 cursor-not-allowed';
      btnPay.innerHTML = `<span class="material-symbols-outlined text-[16px]">check</span> Pembayaran Terverifikasi`;
    } else {
      badge.className = 'px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 shadow-sm flex items-center gap-1';
      badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> MENUNGGU PEMBAYARAN`;
      btnPay.disabled = false;
      btnPay.className = 'px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-1.5';
      btnPay.innerHTML = `<span class="material-symbols-outlined text-[16px]">check_circle</span> Simulasi Pembayaran Sukses`;
    }
  }
}

function simulatePaymentSuccess() {
  appState.currentInvoice.status = 'PAID';
  renderInvoiceUi();

  const subtotal = appState.currentInvoice.items.reduce((acc, it) => acc + (it.price * it.qty), 0);
  const totalReceived = subtotal + appState.currentInvoice.shippingCost;
  appState.walletBalance += totalReceived;
  const walletEl = document.getElementById('walletBalance');
  if (walletEl) walletEl.innerText = `Rp ${appState.walletBalance.toLocaleString('id-ID')}`;

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function copyInvoiceLink() {
  const text = `Halo Kak ${appState.currentInvoice.customer}, link invoice resmi: https://moobi.id/pay/${appState.currentInvoice.invNumber}`;
  navigator.clipboard?.writeText(text);
  alert('Link Invoice Berhasil Disalin ke Clipboard:\n\n' + text);
}

/* ========================================================================== */
/* MODUL 2: AI CHATBOT LOGIC                                                  */
/* ========================================================================== */

function sendQuickBotQuery(text) {
  const input = document.getElementById('userChatMessageInput');
  if (input) {
    input.value = text;
    sendUserChat();
  }
}

function sendUserChat() {
  const input = document.getElementById('userChatMessageInput');
  const query = input?.value.trim() || '';
  if (!query) return;

  const chatContainer = document.getElementById('chatMessageHistory');
  if (!chatContainer) return;

  const timeNow = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  const userBubble = document.createElement('div');
  userBubble.className = 'flex justify-end';
  userBubble.innerHTML = `
    <div class="bg-[#d9fdd3] text-slate-800 p-3 rounded-2xl rounded-tr-none max-w-sm shadow-sm text-xs space-y-1">
      <p class="leading-relaxed">${escapeHtml(query)}</p>
      <span class="text-[9px] text-slate-400 block text-right">${timeNow} ✓✓</span>
    </div>
  `;
  chatContainer.appendChild(userBubble);
  input.value = '';
  chatContainer.scrollTop = chatContainer.scrollHeight;

  setTimeout(() => {
    let botReply = '';
    const q = query.toLowerCase();

    if (q.includes('stok') || q.includes('ready') || q.includes('gamis') || q.includes('batik')) {
      botReply = `Untuk produk tersebut saat ini <strong>Ready Stock</strong> di gudang pusat kami ya kak! Siap dikirim hari ini sebelum cut-off jam 16.00 WIB.`;
    } else if (q.includes('ongkir') || q.includes('surabaya') || q.includes('kirim')) {
      botReply = `Estimasi ongkir ke Surabaya:<br>• <strong>SiCepat Reguler:</strong> Rp 18.000 (2 hari)<br>• <strong>J&T Express:</strong> Rp 19.000 (1-2 hari)<br>• <strong>JNE YES:</strong> Rp 28.000 (Besok Sampai)`;
    } else if (q.includes('rekening') || q.includes('qris') || q.includes('bayar') || q.includes('invoice')) {
      botReply = `Bisa langsung scan QRIS Instan Moobi Pay kami ya kak. Bebas biaya admin dan otomatis terverifikasi lunas tanpa perlu kirim bukti transfer.`;
    } else {
      botReply = `Baik kak, terima kasih atas pertanyaannya! Tim spesialis produk kami siap membantu detail spesifikasi pesanan Anda. Mau kami pesankan sekarang?`;
    }

    const botBubble = document.createElement('div');
    botBubble.className = 'flex justify-start';
    botBubble.innerHTML = `
      <div class="bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-none max-w-sm shadow-sm text-xs space-y-1.5">
        <p class="leading-relaxed">${botReply}</p>
        <span class="text-[9px] text-slate-400 block text-right">${timeNow}</span>
      </div>
    `;
    chatContainer.appendChild(botBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 500);
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ========================================================================== */
/* MODUL 3: SMART CRM LOGIC                                                   */
/* ========================================================================== */

function renderCrmTable(filterSegment = 'all', searchQuery = '') {
  const tbody = document.getElementById('crmCustomerTableBody');
  if (!tbody) return;

  let filtered = appState.crmCustomers;
  if (filterSegment !== 'all') {
    filtered = filtered.filter(c => c.segment.toLowerCase() === filterSegment.toLowerCase());
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(c => c.name.toLowerCase().includes(q) || c.phone.includes(q));
  }

  let html = '';
  filtered.forEach(c => {
    let badgeClass = 'bg-slate-100 text-slate-700';
    if (c.segment === 'Champions') badgeClass = 'bg-emerald-100 text-emerald-800 border border-emerald-300';
    if (c.segment === 'Loyal') badgeClass = 'bg-blue-100 text-blue-800 border border-blue-300';
    if (c.segment === 'At-Risk') badgeClass = 'bg-amber-100 text-amber-800 border border-amber-300';

    html += `
      <tr class="hover:bg-slate-50 transition">
        <td class="p-3">
          <strong class="text-slate-900 block">${c.name}</strong>
          <span class="text-[11px] text-slate-500 font-mono">${c.phone}</span>
        </td>
        <td class="p-3">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${badgeClass}">${c.segment}</span>
        </td>
        <td class="p-3 text-right">
          <span class="font-bold text-slate-800 block">${c.totalSpend}</span>
          <span class="text-[10px] text-slate-400">${c.orders}x Order</span>
        </td>
        <td class="p-3 text-right font-mono font-bold text-brand-600">${c.points} Pts</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function filterCrmTable() {
  const searchVal = document.getElementById('crmSearchInput')?.value || '';
  renderCrmTable('all', searchVal);
}

function triggerBroadcastSimulation() {
  const btn = document.getElementById('btnStartBroadcast');
  const box = document.getElementById('broadcastProgressBox');
  const bar = document.getElementById('broadcastProgressBar');
  const txt = document.getElementById('broadcastProgressText');

  if (box) box.classList.remove('hidden');
  if (btn) {
    btn.disabled = true;
    btn.className = 'w-full py-3 px-4 rounded-xl bg-slate-400 text-white font-bold text-xs cursor-not-allowed flex items-center justify-center gap-2';
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    if (bar) bar.style.width = `${progress}%`;
    const sentCount = Math.round((progress / 100) * 640);
    if (txt) txt.innerText = `${sentCount} / 640 Terkirim (${progress}%)`;

    if (progress >= 100) {
      clearInterval(interval);
      if (btn) {
        btn.disabled = false;
        btn.className = 'w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2';
      }
      if (txt) txt.innerText = `640 / 640 Sukses Terkirim (100%) - Tingkat Buka: 94.2%`;
      alert('Kampanye Broadcast WhatsApp Berhasil Dikirim ke 640 Kontak!');
    }
  }, 350);
}

/* ========================================================================== */
/* MODUL 4: LOGISTIK & CETAK RESI LOGIC                                       */
/* ========================================================================== */

function calculateShippingRates() {
  const dest = document.getElementById('shippingDestSelect')?.value || 'jakarta';
  const container = document.getElementById('courierRatesList');
  if (!container) return;

  const baseMultipliers = { jakarta: 1, surabaya: 1.6, medan: 2.2, makassar: 2.8, bali: 1.9 };
  const mult = baseMultipliers[dest] || 1;

  const rates = [
    { courier: 'J&T Express', service: 'EZ (Reguler)', time: '1-2 Hari', price: Math.round(15000 * mult), discount: 'Diskon 20%' },
    { courier: 'SiCepat', service: 'BEST (Next Day)', time: '1 Hari', price: Math.round(18000 * mult), discount: 'Diskon 15%' },
    { courier: 'JNE', service: 'REG (Reguler)', time: '2-3 Hari', price: Math.round(16000 * mult), discount: 'Tarif Spesial' },
    { courier: 'Ninja Xpress', service: 'Standar', time: '2 Hari', price: Math.round(14000 * mult), discount: 'Hemat 25%' },
  ];

  let html = '';
  rates.forEach(r => {
    html += `
      <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-brand-500 transition cursor-pointer">
        <div>
          <div class="flex items-center gap-1.5 font-bold text-slate-800">
            <span>${r.courier}</span>
            <span class="text-[10px] font-normal text-slate-500">(${r.service})</span>
          </div>
          <span class="text-[10px] text-emerald-600 font-semibold">${r.time} • ${r.discount}</span>
        </div>
        <span class="font-extrabold text-brand-600">Rp ${r.price.toLocaleString('id-ID')}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderOrdersQueue() {
  const tbody = document.getElementById('ordersFulfillmentTableBody');
  if (!tbody) return;

  let html = '';
  appState.ordersQueue.forEach(o => {
    html += `
      <tr class="hover:bg-slate-50 transition">
        <td class="p-3 text-center"><input type="checkbox" checked class="rounded text-brand-500"></td>
        <td class="p-3">
          <strong class="text-slate-900 block font-mono">${o.id}</strong>
          <span class="text-[11px] text-slate-400 font-mono">${o.resi}</span>
        </td>
        <td class="p-3">
          <span class="font-bold text-slate-800 block">${o.name}</span>
          <span class="text-[10px] text-slate-500">${o.city} • ${o.items}</span>
        </td>
        <td class="p-3">
          <span class="bg-blue-50 text-brand-700 font-semibold px-2 py-0.5 rounded text-[11px] border border-blue-200">${o.courier}</span>
        </td>
        <td class="p-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">${o.status}</span>
        </td>
        <td class="p-3 text-center">
          <button onclick="openThermalLabelModal()" class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-[11px] font-bold transition flex items-center gap-1 mx-auto">
            <span class="material-symbols-outlined text-[14px]">print</span> Cetak
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function requestBatchPickup() {
  alert('Request Pick-Up Berhasil Dikirim ke Ekspedisi J&T & SiCepat!\nDriver dijadwalkan tiba pukul 14.30 WIB di Hub Jakarta.');
}

function openThermalLabelModal() {
  const modal = document.getElementById('thermalLabelModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeThermalLabelModal() {
  const modal = document.getElementById('thermalLabelModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

/* ========================================================================== */
/* MODUL 5: MULTI-CHANNEL INVENTORY SYNC LOGIC                                */
/* ========================================================================== */

function renderInventoryTable() {
  const tbody = document.getElementById('inventorySyncTableBody');
  if (!tbody) return;

  let html = '';
  appState.inventory.forEach(item => {
    html += `
      <tr class="hover:bg-slate-50 transition">
        <td class="p-3.5">
          <span class="font-bold text-slate-900 block">${item.name}</span>
          <span class="font-mono text-[11px] text-slate-400">SKU: ${item.sku}</span>
        </td>
        <td class="p-3.5 text-center font-extrabold text-slate-900 text-sm bg-blue-50/50">${item.masterStock}</td>
        <td class="p-3.5 text-center font-bold text-[#ee4d2d]">${item.shopee}</td>
        <td class="p-3.5 text-center font-bold text-[#00aa5b]">${item.tokopedia}</td>
        <td class="p-3.5 text-center font-bold text-slate-900">${item.tiktok}</td>
        <td class="p-3.5 text-center font-bold text-brand-600">${item.web}</td>
        <td class="p-3.5 text-center">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 inline-flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${item.status}
          </span>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function simulateMarketplaceSale(channelName) {
  const targetItem = appState.inventory[0];
  if (targetItem.masterStock <= 0) {
    alert('Stok barang sudah habis!');
    return;
  }

  targetItem.masterStock -= 1;
  targetItem.shopee = targetItem.masterStock;
  targetItem.tokopedia = targetItem.masterStock;
  targetItem.tiktok = targetItem.masterStock;
  targetItem.web = targetItem.masterStock;

  renderInventoryTable();

  const terminal = document.getElementById('syncLogTerminal');
  if (terminal) {
    const timeNow = new Date().toLocaleTimeString('id-ID');
    const newLog = document.createElement('p');
    newLog.className = 'text-amber-300';
    newLog.innerText = `[${timeNow}] SALE at ${channelName}: SKU ${targetItem.sku} sold 1 pcs. Real-time sync push sent! New stock = ${targetItem.masterStock}.`;
    terminal.prepend(newLog);
  }
}

function resetWorkspaceDemo() {
  appState.walletBalance = 14850000;
  const wEl = document.getElementById('walletBalance');
  if (wEl) wEl.innerText = 'Rp 14.850.000';
  appState.inventory[0].masterStock = 18;
  appState.inventory[0].shopee = 18;
  appState.inventory[0].tokopedia = 18;
  appState.inventory[0].tiktok = 18;
  appState.inventory[0].web = 18;
  renderInventoryTable();
  loadChatPreset(1);
  alert('Data sandbox berhasil direset ke kondisi awal.');
}
