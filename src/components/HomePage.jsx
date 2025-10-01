import React from 'react';
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
              <img src={pastor} alt="Prophet W.T. Milton" className="w-48 h-48 rounded-full object-cover" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Prophet W.T. Milton</h3>
                <p className="text-xl text-amber-700 mb-4">{t('seniorPastorFounder')}</p>
                <p className="text-gray-600 leading-relaxed">
                  Prophet W.T. Milton is a seasoned servant of God with a prophetic mantle and a deep passion for discipleship. Called into ministry through a divine encounter, he has dedicated his life to raising end-time warriors who are rooted in Christ. Under his leadership, IFCM has grown both spiritually and numerically, impacting lives across Cameroon and beyond.
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
            { name: 'Pastor Anna N.', roleKey: 'associatePastor' },
            { name: 'Evangelist Samuel T.', roleKey: 'headOfEvangelism' },
            { name: 'Sister Martha L.', roleKey: 'womenFellowshipLeader' },
            { name: 'Brother Joel M.', roleKey: 'youthMinistryCoordinator' }
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

      <Forms openFormModal={openFormModal} />
      <Give />
      <Contact />
    </>
  );
}
