import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Forms({ openFormModal }) {
  const { t } = useLanguage();
  const forms = [
    { 
      name: t('shareYourTestimony'), 
      title: 'Share Your Testimony',
      description: 'From testimonies to testimonies is our testimony. Share your testimony below.',
      icon: '📝', 
      color: 'from-amber-400 to-amber-600' 
    },
    { 
      name: t('registerForIFCMEducationalProgram'), 
      title: 'Registration For IFCM Educational program',
      description: 'Register for our educational programs to grow in faith.',
      icon: '📚', 
      color: 'from-purple-400 to-purple-600' 
    },
    { 
      name: t('counselingAppointment'), 
      title: 'COUNSELING',
      description: 'Counseling Form To book an appointment now, fill in the form below appropriately. We would reach out to you in the shortest possible time.',
      icon: '🤝', 
      color: 'from-pink-400 to-pink-600' 
    },
    { 
      name: t('joinAServiceGroup'), 
      title: 'Join a service group',
      description: 'Choose a service group to get involved: Choir, Usher, Media, Protocol, Evangelism, Sanctuary keeper, Interpretation.',
      icon: '⚡', 
      color: 'from-indigo-400 to-indigo-600' 
    },
    { 
      name: t('newConvertForm'), 
      title: 'New Convert Form',
      description: 'Welcome new converts to the ministry.',
      icon: '✨', 
      color: 'from-blue-400 to-blue-600' 
    },
    {
      name: t('membershipForm'),
      title: 'IFCM Membership Form',
      description: 'Dearly Beloved, Thank you for being a part of Increasing Faith of Christ Ministry. We would love to serve you better this 2025 so please kindly fill in your details on the membership form below.',
      icon: '👥',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'trueMemberRecognition',
      title: 'True Member Recognition',
      description: 'Fill to be recognized as a true member of IFCM',
      icon: '⭐',
      color: 'from-amber-400 to-amber-600'
    },
    { 
      name: t('preMaritalCounseling'), 
      title: 'Pre Marital counseling',
      description: 'Pre-marital Counseling Form To book an appointment now, fill in the form below appropriately. We would reach out to you in the shortest possible time.',
      icon: '💑', 
      color: 'from-red-400 to-red-600' 
    },
    { 
      name: t('postMaritalCounseling'), 
      title: 'Post Marital counseling',
      description: 'Post-marital Counseling Form To book an appointment now, fill in the form below appropriately. We would reach out to you in the shortest possible time.',
      icon: '💕', 
      color: 'from-yellow-400 to-yellow-600' 
    },
    { 
      name: t('invitedGuestForm'), 
      title: 'Invited Guest form',
      description: 'Invited Guest Form',
      icon: '🎉', 
      color: 'from-orange-400 to-orange-600' 
    },
    { 
      name: t('childDedication'), 
      title: 'Child dedication',
      description: 'Child Dedication Form',
      icon: '👶', 
      color: 'from-teal-400 to-teal-600' 
    },
    { 
      name: t('myAnsweredPrayerSlip'), 
      title: 'My answered prayer slip',
      description: 'My Answered Prayer Slip List Of Answered Prayers with events name',
      icon: '🙌', 
      color: 'from-cyan-400 to-cyan-600' 
    }
  ];

  return (
    <section id="forms" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('formsAndRegistration')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">{t('connectThroughForms')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {forms.map((form, idx) => (
            <button
              key={idx}
              onClick={() => openFormModal(form.name)}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
            >
              <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${form.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl mx-auto`}>
                {form.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight mb-1">{form.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{form.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
