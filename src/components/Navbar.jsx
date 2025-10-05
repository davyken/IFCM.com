import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import logo from '../assets/ifcm-logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar({ isMenuOpen, toggleMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/services', label: t('services') },
    { path: '/ministries', label: t('ministries') },
    { path: '/events', label: t('events') },
    { path: '/forms', label: t('forms') },
    { path: '/give', label: t('give') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={logo} alt="IFCM Logo" className="h-12 w-12 sm:h-16 sm:w-16 mr-2 sm:mr-3" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-amber-700">IFCM</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{t('increasingFaith')}</p>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-amber-700 font-medium transition-colors ${activeSection === item.path.slice(1) || (item.path === '/' && activeSection === 'home') ? 'text-amber-700 border-b-2 border-amber-700' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-4 p-2 border border-amber-700 rounded text-amber-700 hover:bg-amber-700 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Toggle Language"
              title="Toggle Language"
            >
              <Languages size={20} />
            </button>
            <span className="ml-2 text-amber-700 font-semibold">{language.toUpperCase()}</span>
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
              <Link
                key={item.path}
                to={item.path}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full text-center px-4 py-2 text-amber-700 border border-amber-700 rounded hover:bg-amber-700 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Toggle Language"
              title="Toggle Language"
            >
              <Languages size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
