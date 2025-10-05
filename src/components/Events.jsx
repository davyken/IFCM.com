import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Events() {
  const { t } = useLanguage();
  const events = [
    {
      title: t('event1Title'),
      date: t('event1Date'),
      description: t('event1Description'),
      color: 'border-amber-500'
    },
    {
      title: t('event2Title'),
      date: t('event2Date'),
      description: t('event2Description'),
      color: 'border-blue-500'
    },
    {
      title: t('event3Title'),
      date: t('event3Date'),
      description: t('event3Description'),
      color: 'border-green-500'
    },
    {
      title: t('event4Title'),
      date: t('event4Date'),
      description: t('event4Description'),
      color: 'border-pink-500'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('upcomingEvents')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">{t('joinUsForLifeChangingExperiences')}</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, idx) => (
            <div key={idx} className={`bg-white border-l-4 ${event.color} p-6 sm:p-8 rounded-r-2xl shadow-lg hover:shadow-xl transition-all`}>
              <div className="flex items-start gap-4">
                <Calendar className="text-amber-700 flex-shrink-0" size={24} />
                <div>
                  <p className="text-amber-700 font-semibold mb-2">{event.date}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
