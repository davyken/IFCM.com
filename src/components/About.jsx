import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBelief, setSelectedBelief] = useState(null);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showAllBeliefs, setShowAllBeliefs] = useState(false);

  const beliefs = [
    {
      title: t('belief1Title'),
      content: t('belief1Content')
    },
    {
      title: t('belief2Title'),
      content: t('belief2Content')
    },
    {
      title: t('belief3Title'),
      content: t('belief3Content')
    },
    {
      title: t('belief4Title'),
      content: t('belief4Content')
    },
    {
      title: t('belief5Title'),
      content: t('belief5Content')
    },
    {
      title: t('belief6Title'),
      content: t('belief6Content')
    },
    {
      title: t('belief7Title'),
      content: t('belief7Content')
    },
    {
      title: t('belief8Title'),
      content: t('belief8Content')
    },
    {
      title: t('belief9Title'),
      content: t('belief9Content')
    },
    {
      title: t('belief10Title'),
      content: t('belief10Content')
    },
    {
      title: t('belief11Title'),
      content: t('belief11Content')
    },
    {
      title: t('belief12Title'),
      content: t('belief12Content')
    },
    {
      title: t('belief13Title'),
      content: t('belief13Content')
    },
    {
      title: t('belief14Title'),
      content: t('belief14Content')
    },
    {
      title: t('belief15Title'),
      content: t('belief15Content')
    },
    {
      title: t('belief16Title'),
      content: t('belief16Content')
    },
    {
      title: t('belief17Title'),
      content: t('belief17Content')
    }
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const openModal = (belief) => {
    setSelectedBelief(belief);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBelief(null);
  };
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('aboutProphetWTMilton')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            {t('prophetWTMiltonIntro')}
          </p>
          {!showFullAbout && (
            <div className="text-center">
              <button
                onClick={() => setShowFullAbout(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showMore')}
              </button>
            </div>
          )}
          {showFullAbout && (
            <>
              <p>
                {t('prophetWTMiltonBooks')}
              </p>
              <p>
                {t('prophetWTMiltonMinistry')}
              </p>
              <p>
                {t('prophetWTMiltonGifts')}
              </p>
              <p>
                {t('prophetWTMiltonSchools')}
              </p>
              <p>
                {t('prophetWTMiltonPhilanthropy')}
              </p>
              <h3 className="text-2xl text-justify font-bold mt-8 mb-4">{t('aboutIFC')}</h3>
              <p>
                {t('experiencePowerOfGod')}
                {t('ifcDescription')}
              </p>
              <p>
                {t('ifcFoundation')}
              </p>
              <button
                onClick={() => setShowFullAbout(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showLess')}
              </button>
            </>
          )}
        </div>

        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('whatWeBelieveAndTeach')}</h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.slice(0, showAllBeliefs ? beliefs.length : 6).map((belief, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 border border-amber-200 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(belief)}
              >
                <h3 className="text-xl font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">{belief.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">{truncateText(belief.content, 150)}</p>
                <div className="mt-4 text-amber-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">{t('readMore')}</div>
              </div>
            ))}
          </div>
          {!showAllBeliefs && beliefs.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllBeliefs(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showMoreBeliefs')}
              </button>
            </div>
          )}
          {showAllBeliefs && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllBeliefs(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-md"
              >
                {t('showLess')}
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedBelief && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-200 transform scale-95 animate-scale-in">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-amber-900">{selectedBelief.title}</h3>
                <button
                  onClick={closeModal}
                  className="bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-md"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-800 leading-relaxed text-justify text-lg">{selectedBelief.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
