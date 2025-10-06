import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChevronRight, Book, Cross, Heart, Users, Calendar, Phone, Mail, MapPin, Facebook, Youtube, Instagram, Menu, X, Languages } from 'lucide-react';
import logo from './assets/ifcm-logo.jpeg';
import pastor from './assets/pastor.jpg';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Forms from './components/Forms';
import Give from './components/Give';
import Contact from './components/Contact';
import FormModal from './components/FormModal';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const openFormModal = (formType) => {
    setSelectedForm(formType);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedForm(null);
  };

  return (
    <LanguageProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage openFormModal={openFormModal} />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="ministries" element={<Ministries />} />
            <Route path="events" element={<Events />} />
            <Route path="forms" element={<Forms openFormModal={openFormModal} />} />
            <Route path="give" element={<Give />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        {showModal && <FormModal isOpen={showModal} onClose={closeModal} selectedForm={selectedForm} />}
      </>
    </LanguageProvider>
  );
}

import { useLanguage } from './contexts/LanguageContext';

// Navbar Component
function Navbar({ isMenuOpen, toggleMenu, scrollToSection, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'services', label: t('services') },
    { id: 'ministries', label: t('ministries') },
    { id: 'events', label: t('events') },
    { id: 'forms', label: t('forms') },
    { id: 'give', label: t('give') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src={logo} alt="IFCM Logo" className="h-16 w-16 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-amber-700">IFCM</h1>
              <p className="text-xs text-gray-600">{t('increasingFaith')}</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-700 hover:text-amber-700 font-medium transition-colors ${activeSection === item.id ? 'text-amber-700 border-b-2 border-amber-700' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}



// Projects Component
function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Cross className="text-amber-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IFC Kingdom Center Project</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are building a permanent worship center to house thousands of believers, host revivals, and serve as a training ground for future leaders. This is more than a building—it's a kingdom assignment.
            </p>
            <button className="text-amber-700 font-semibold hover:text-amber-800 flex items-center gap-2">
              Partner With Us <ChevronRight size={20} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-blue-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IFC Mercy Hands Project</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our humanitarian arm supports widows, orphans, prisoners, and displaced persons with food, clothing, counseling, and prayer. We believe in practical Christianity that touches lives.
            </p>
            <button className="text-blue-700 font-semibold hover:text-blue-800 flex items-center gap-2">
              Learn More <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



// Footer Component
function Footer({ scrollToSection }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="IFCM Logo" className="h-12 w-12 mr-2 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-lg">IFCM</h3>
                <p className="text-xs text-gray-400">Increasing Faith</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Raising a generation passionate about the Kingdom of God.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'about', 'services', 'ministries'].map(link => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block text-gray-400 hover:text-amber-500 transition-colors capitalize text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <div className="space-y-2">
              {['events', 'forms', 'give', 'contact'].map(link => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block text-gray-400 hover:text-amber-500 transition-colors capitalize text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Total Nsimeyong, Yaoundé</p>
              <p>+237 672 796 404</p>
              <p>increasingfaithofchristm@gmail.com</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/increasingfaithofchristministryinternational?mibextid=ZbWKwL" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.youtube.com/@increasingfaithofchristmin150" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Youtube size={16} />
              </a>
              <a href="https://instagram.com/ifcministry" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Increasing Faith Of Christ Ministries International. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Motto: Restoration, Manifestation, Teaching Spiritual Realities
          </p>
          <p className="text-amber-600 font-semibold text-sm mt-2">
            Solo: Increasing Faith of Christ Ministry, All: We are an Increase.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-out;
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);