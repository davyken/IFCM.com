import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Events() {
  const { t } = useLanguage();
  const events = [
    {
      title: 'This Mountain Must Be Removed',
      date: 'August 2025',
      description: 'A powerful crusade focused on breaking barriers and moving spiritual mountains',
      color: 'border-amber-500'
    },
    {
      title: 'My Family Must See Light',
      date: 'November 2025',
      description: 'Family transformation and breakthrough conference',
      color: 'border-blue-500'
    },
    {
      title: 'Healing & Deliverance Crusade (Cross Over)',
      date: 'December 2025',
      description: 'Year-end healing service and crossover night celebration',
      color: 'border-green-500'
    },
    {
      title: "Kingdom Women's Conference",
      date: 'April 2026',
      description: 'Empowering women to walk in their kingdom authority',
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
