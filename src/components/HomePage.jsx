import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Ministries from './Ministries';
import Events from './Events';
import Forms from './Forms';
import Give from './Give';
import Contact from './Contact';
import { useLanguage } from '../contexts/LanguageContext';
import pastor from '../assets/pastor.jpg';

// Testimonials Component
function Testimonials({ openFormModal }) {
  const { t } = useLanguage();
  const [userTestimonies, setUserTestimonies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const defaultTestimonials = [
    {
      name: 'Sister Jane',
      testimony: 'I received healing in my spine during a service. God restored me completely! The doctors were amazed.',
      initial: 'J',
      profilePic: null,
      date: null
    },
    {
      name: 'Brother Elijah',
      testimony: 'I gave my life to Christ at IFC. Since then, my family has never been the same. Peace and joy now reign in our home.',
      initial: 'E',
      profilePic: null,
      date: null
    },
    {
      name: 'Sister Grace',
      testimony: 'Through the prayers and teachings at IFCM, I experienced breakthrough in my finances and career. God is faithful!',
      initial: 'G',
      profilePic: null,
      date: null
    }
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('userTestimonies') || '[]');
    setUserTestimonies(stored);
  }, []);

  const allTestimonials = [...userTestimonies, ...defaultTestimonials];
  const displayedTestimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What God Is Doing</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">From testimonies to testimonies is our testimony</p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {displayedTestimonials.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 overflow-hidden mx-auto">
                {item.profilePic ? (
                  <img src={item.profilePic} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  item.initial
                )}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">"{item.testimony}"</p>
              <p className="font-bold text-gray-900">— {item.name}</p>
              {item.date && (
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>

        {allTestimonials.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <button onClick={() => openFormModal(t('shareYourTestimony'))} className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all shadow-lg">
            Share 
          </button>
        </div>
      </div>
    </section>
  );
}

// Leadership Component
function Leadership() {
  const { t } = useLanguage();

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ourLeadership')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={pastor} alt={t('prophetName')} className="w-48 h-48 rounded-full object-cover" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{t('prophetName')}</h3>
                <p className="text-xl text-amber-700 mb-4">{t('seniorPastorFounder')}</p>
                <p className="text-gray-600 leading-relaxed">
                  {t('prophetDescription')}
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-4 bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-800 transition-all"
                >
                  {t('readMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: t('leader1Name'), roleKey: 'associatePastor' },
            { name: t('leader2Name'), roleKey: 'headOfEvangelism' },
            { name: t('leader3Name'), roleKey: 'womenFellowshipLeader' },
            { name: t('leader4Name'), roleKey: 'youthMinistryCoordinator' }
          ].map((leader, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                {leader.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{leader.name}</h4>
              <p className="text-sm text-gray-600">{t(leader.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ openFormModal }) {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Ministries />
      <Events />
      <Leadership />
      <Testimonials openFormModal={openFormModal} />
      <Forms openFormModal={openFormModal} />
      <Give />
      <Contact />
    </>
  );
}
