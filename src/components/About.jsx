import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About({ openFormModal }) {
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

  const ministries = [
    'Children\'s Ministry',
    'Youth Ministry',
    'Women\'s Ministry',
    'Men\'s Ministry',
    'Music Ministry',
    'Outreach Ministry'
  ];

  const pastoralTeam = [
    { role: 'Senior Pastor:', name: '' },
    { role: 'Associate Pastor:', name: '' },
    { role: 'Youth Pastor:', name: '' }
  ];

  const anthem = {
    verse1: t('verse1'),
    chorus: t('chorus'),
    verse2: t('verse2'),
    verse3: t('verse3')
  };

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
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('aboutUs')}</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the heart and soul of Increasing Faith of Christ Ministries International
          </p>
        </div>

        {/* About IFC Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-white to-amber-50 rounded-3xl shadow-2xl p-12 border border-amber-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('aboutIFC')}</h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
            </div>
            <div className="max-w-5xl mx-auto space-y-8 text-gray-700 leading-relaxed text-justify">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-800 mb-6">{t('experiencePowerOfGod')}</p>
                <div className="w-16 h-1 bg-amber-600 mx-auto"></div>
              </div>
              <p className="text-lg">{t('ifcDescription')}</p>
              <p className="text-lg">{t('ifcFoundation')}</p>
            </div>
          </div>
        </div>

        {/* Prophet WT Milton Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-amber-50 to-white rounded-3xl shadow-2xl p-12 border border-amber-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('aboutProphetWTMilton')}</h2>
              <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
            </div>
            <div className="max-w-5xl mx-auto space-y-8 text-gray-700 leading-relaxed text-justify">
              <p className="text-lg">{t('prophetWTMiltonIntro')}</p>
              <p className="text-lg">{t('prophetWTMiltonBooks')}</p>
              <p className="text-lg">{t('prophetWTMiltonMinistry')}</p>
              <p className="text-lg">{t('prophetWTMiltonGifts')}</p>
              <p className="text-lg">{t('prophetWTMiltonSchools')}</p>
              <p className="text-lg">{t('prophetWTMiltonPhilanthropy')}</p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Goals Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('increasingFaithIntro')}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">{t('missionStatement')}</h3>
              <p className="text-xl italic leading-relaxed">"{t('missionText')}"</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">{t('vision')}</h3>
              <p className="text-xl leading-relaxed">{t('visionText')}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-2xl p-12 border border-gray-200 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('goals')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('goal1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('goal2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('goal3')}</span>
                </li>
              </ul>
              <ul className="space-y-4 text-gray-900">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('goal4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('goal5')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-amber-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('goal6')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ministries and Pastoral Team */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">{t('ministriesAbout')}</h3>
              <ul className="space-y-4">
                {ministries.map((ministry, idx) => (
                  <li key={idx} className="flex items-center text-lg">
                    <span className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></span>
                    {ministry}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">{t('pastoralTeam')}</h3>
              <ul className="space-y-6">
                {pastoralTeam.map((member, idx) => (
                  <li key={idx} className="text-xl">
                    <strong className="block text-lg">{member.role}</strong>
                    <span className="text-purple-100">{member.name || t('prophetName')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Anthem Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-3xl shadow-2xl p-12 border border-amber-200">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">{t('anthem')}</h3>
            <div className="max-w-4xl mx-auto space-y-8 whitespace-pre-line text-gray-900">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl"><strong className="text-amber-800">{t('verse1')}:</strong> {anthem.verse1}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl"><strong className="text-amber-800">{t('chorus')}:</strong> {anthem.chorus}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl"><strong className="text-amber-800">Verse 2:</strong> {t('verse2')}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl"><strong className="text-amber-800">Verse 3:</strong> {t('verse3')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-12 border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('howToBecomeMember')}</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-900 mb-6 leading-relaxed">{t('memberIntro')}</p>
              <ul className="space-y-3 mb-8 text-gray-900">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-lg">{t('memberRequirements')}</span>
                </li>
              </ul>
              <p className="text-lg italic text-gray-900 mb-8">{t('memberFormNote')}</p>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <p className="text-lg text-gray-900 mb-6">As you join us to fellowship and serve God, we would love you to fill in the following so we recognise you as a true member of IFCM:</p>
                <div className="text-center">
                  <button
                    onClick={() => openFormModal(t('newConvertForm'))}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    Fill True Member Form
                  </button>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-gray-900 mb-3">
                    *Are you born again? <input type="checkbox" className="ml-2 mr-2 w-4 h-4 text-blue-600" /> Yes
                  </p>
                  <p className="text-gray-900">
                    If not, click <a href="#salvation" className="text-blue-600 underline font-semibold hover:text-blue-800">this link</a> for Salvation Prayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motto and Slogan */}
        <div className="mb-20">
          <div className="text-center bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">{t('motto')}</h3>
            <p className="text-2xl italic">{t('slogan')}</p>
          </div>
        </div>

        {/* Beliefs Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('whatWeBelieveAndTeach')}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto"></div>
            <p className="text-xl text-gray-700 mt-6 max-w-3xl mx-auto">
              Discover the foundational beliefs that guide our ministry and shape our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.slice(0, showAllBeliefs ? beliefs.length : 6).map((belief, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer group"
                onClick={() => openModal(belief)}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">{belief.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-800 transition-colors">{truncateText(belief.content, 180)}</p>
                <div className="mt-6 text-amber-600 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  {t('readMore')} <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>

          {!showAllBeliefs && beliefs.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllBeliefs(true)}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                {t('showMoreBeliefs')}
              </button>
            </div>
          )}
          {showAllBeliefs && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllBeliefs(false)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
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
