import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Product from './pages/products/Product';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';

// Penawaran Modul Pages
import PenawaranMarketplace from './pages/modules/marketplace/penawaran_marketplace';
import PenawaranInvoice from './pages/modules/invoice/penawaran_invoice';
import PenawaranMarketing from './pages/modules/marketing/penawaran_marketing';
import PenawaranLogistics from './pages/modules/logistics/penawaran_logistics';
import PenawaranMonitoring from './pages/modules/monitoring/penawaran_monitoring';
import PenawaranChatbot from './pages/modules/chatbot/penawaran_chatbot';

// Live Demo & Workspace Pages
import MarketplaceSimulator from './pages/modules/marketplace/MarketplaceSimulator';
import CreateAgenticInvoice from './pages/modules/invoice/CreateAgenticInvoice';
import ChatbotLiveSimulator from './pages/modules/chatbot/ChatbotLiveSimulator';
import WhatsAppBroadcast from './pages/modules/marketing/WhatsAppBroadcast';
import LogisticsSimulator from './pages/modules/logistics/LogisticsSimulator';
import RevenueMonitoring from './pages/modules/monitoring/RevenueMonitoring';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Penawaran Routes */}
            <Route path="/penawaran/marketplace" element={<PenawaranMarketplace />} />
            <Route path="/penawaran/invoice" element={<PenawaranInvoice />} />
            <Route path="/penawaran/marketing" element={<PenawaranMarketing />} />
            <Route path="/penawaran/logistics" element={<PenawaranLogistics />} />
            <Route path="/penawaran/monitoring" element={<PenawaranMonitoring />} />
            <Route path="/penawaran/chatbot" element={<PenawaranChatbot />} />

            {/* Workspace / Live Demo Routes */}
            <Route path="/workspace/marketplace" element={<MarketplaceSimulator />} />
            <Route path="/workspace/invoice" element={<CreateAgenticInvoice />} />
            <Route path="/workspace/chatbot" element={<ChatbotLiveSimulator />} />
            <Route path="/workspace/marketing" element={<WhatsAppBroadcast />} />
            <Route path="/workspace/logistics" element={<LogisticsSimulator />} />
            <Route path="/workspace/monitoring" element={<RevenueMonitoring />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
