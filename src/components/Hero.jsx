import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ifcm-logo.jpeg';
import worships from '../assets/worships.jpg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-8 sm:pt-12 min-h-screen flex items-center" style={{ backgroundImage: `url(${worships})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50 opacity-90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              {t('welcomeToIFCM')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              {t('bibleBelievingChurch')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/services"
                className="bg-amber-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl text-center"
              >
                {t('joinUsSunday')}
              </Link>
              <Link
                to="/about"
                className="border-2 border-amber-700 text-amber-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all text-center"
              >
                {t('learnMore')}
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-8 sm:pt-10">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-700">2019</p>
                <p className="text-sm text-gray-600">{t('founded')}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-700">500+</p>
                <p className="text-sm text-gray-600">{t('members')}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-amber-700">6</p>
                <p className="text-sm text-gray-600">{t('ministries')}</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src={logo}
              alt="IFCM Logo"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl animate-float rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
