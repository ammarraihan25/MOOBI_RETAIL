import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Product from './pages/products/Product';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import CreateAgenticInvoice from './pages/modules/invoice/CreateAgenticInvoice';
import ChatbotLiveSimulator from './pages/modules/chatbot/ChatbotLiveSimulator';
import WhatsAppBroadcast from './pages/modules/marketing/WhatsAppBroadcast';
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
            <Route path="/workspace/invoice" element={<CreateAgenticInvoice />} />
            <Route path="/workspace/chatbot" element={<ChatbotLiveSimulator />} />
            <Route path="/workspace/marketing" element={<WhatsAppBroadcast />} />
            <Route path="/workspace/monitoring" element={<RevenueMonitoring />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
