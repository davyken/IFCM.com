import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Give() {
  const { t } = useLanguage();
  return (
    <section id="give" className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('partnerWithUs')}</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-amber-100">{t('supportTheKingdomWork')}</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('mobileMoney')}</h3>
            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm text-amber-100 mb-1">{t('mtnMoMo')}</p>
                <p className="text-2xl font-bold">675 123 456</p>
                <p className="text-sm text-amber-100 mt-1">{t('ifcProjects')}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm text-amber-100 mb-1">{t('orangeMoney')}</p>
                <p className="text-2xl font-bold">699 987 654</p>
                <p className="text-sm text-amber-100 mt-1">{t('tithesOfferings')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('waysToGive')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('tithesOfferings')}</p>
                  <p className="text-sm text-amber-100">{t('tithesOfferingsDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('kingdomCenterProject')}</p>
                  <p className="text-sm text-amber-100">{t('buildOurPermanentWorshipCenter')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('mercyHandsProject')}</p>
                  <p className="text-sm text-amber-100">{t('supportHumanitarianOutreach')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t('missionsEvangelism')}</p>
                  <p className="text-sm text-amber-100">{t('reachTheUnreached')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-amber-100 italic">{t('giveQuote')}</p>
        </div>
      </div>
    </section>
  );
}
