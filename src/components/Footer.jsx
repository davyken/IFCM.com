import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import logo from '../assets/ifcm-logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <img src={logo} alt="IFCM Logo" className="h-10 w-10 sm:h-12 sm:w-12 mr-2" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">IFCM</h3>
                <p className="text-xs text-gray-400">{t('augmentFaithMinistries')}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {t('raisingGeneration')}
            </p>
          </div>

            <div>
              <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('home')}</Link>
                <Link to="/about" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('about')}</Link>
                <Link to="/services" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('services')}</Link>
                <Link to="/ministries" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('ministries')}</Link>
              </div>
            </div>

          <div>
            <h4 className="font-bold mb-4">{t('getInvolved')}</h4>
            <div className="space-y-2 text-sm">
              <Link to="/events" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('events')}</Link>
              <Link to="/forms" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('forms')}</Link>
              <Link to="/give" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('give')}</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-amber-500 transition-colors capitalize">{t('contact')}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t('connect')}</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{t('totalNsimeyong')}</p>
              <p>{t('phone')}</p>
              <p>{t('email')}</p>
            </div>
          <div className="flex gap-3 mt-4 justify-center sm:justify-start">
              <a href="https://www.facebook.com/increasingfaithofchristministryinternational?mibextid=ZbWKwL" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://www.youtube.com/@increasingfaithofchristmin150" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Youtube size={14} />
              </a>
              <a href="https://instagram.com/ifcministry" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            {t('copyright')}
          </p>
          <p className="text-gray-500 text-xs">
            {t('motto')}
          </p>
          <p className="text-amber-600 font-semibold text-sm mt-2">
            {t('solo')}
          </p>
        </div>
      </div>
    </footer>
  );
}
