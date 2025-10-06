import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Initialize EmailJS
  emailjs.init('RaNLKs63cJiPkuGDT');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let message = `Contact Form Submission\n\n`;
      for (let key in formData) {
        if (formData[key]) {
          message += `${key}: ${formData[key]}\n`;
        }
      }

      const templateParams = {
        message: message,
        to_email: 'increasingfaithofchristm@gmail.com'
      };

      await emailjs.send(
        'service_7ig6m9x',
        'template_rvi8tdn',
        templateParams
      );

      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contactUs')}</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">{t('wedLoveToHearFromYou')}</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-amber-700" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{t('locationLabel')}</h3>
                <p className="text-gray-600">Total Nsimeyong, Yaoundé, Cameroon</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-blue-700" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{t('phoneLabel')}</h3>
                <p className="text-gray-600">+237 672 796 404</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-green-700" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{t('emailLabel')}</h3>
                <p className="text-gray-600">info@ifcministry.org</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">{t('followUs')}</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/increasingfaithofchristministryinternational?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.youtube.com/@increasingfaithofchristmin150" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="https://instagram.com/ifcministry" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t('sendUsAMessage')}</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t('yourName')}
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
              />
              <input
                type="email"
                placeholder={t('yourEmail')}
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder={t('yourPhone')}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
              />
              <textarea
                placeholder={t('yourMessage')}
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none"
              ></textarea>
              <button type="submit" className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all shadow-lg">
                {t('sendMessage')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
