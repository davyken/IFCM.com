import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('serviceTimes')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">{t('joinUsWorshipFellowship')}</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Calendar className="text-amber-700" size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{t('sundayService')}</h3>
            <p className="text-gray-600 mb-4">{t('sundayServiceDesc')}</p>
            <div className="space-y-2">
              <p className="text-gray-700"><span className="font-semibold">{t('firstService')}</span></p>
              <p className="text-gray-700"><span className="font-semibold">{t('location')}</span></p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Calendar className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{t('midweekService')}</h3>
            <p className="text-gray-600 mb-4">{t('midweekServiceDesc')}</p>
            <div className="space-y-2">
              <p className="text-gray-700"><span className="font-semibold">{t('midweekServiceTime')}</span></p>
              <p className="text-gray-700"><span className="font-semibold">{t('focus')}</span></p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">{t('headquarters')}</p>
          <p className="text-gray-600">{t('everyoneWelcome')}</p>
        </div>
      </div>
    </section>
  );
}
