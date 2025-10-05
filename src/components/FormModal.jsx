import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

export default function FormModal({ isOpen, onClose, selectedForm }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({});

  // Initialize EmailJS
  emailjs.init('RaNLKs63cJiPkuGDT');

  const getFormFields = (formType) => {
    switch (formType) {
      case t('shareYourTestimony'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber') },
          { name: 'testimony', type: 'textarea', placeholder: t('yourTestimony'), required: true, rows: 4 },
          { name: 'date', type: 'date', placeholder: t('dateOfTestimony') }
        ];
      case t('newConvertForm'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber') },
          { name: 'conversionDate', type: 'date', placeholder: t('dateOfConversion'), required: true },
          { name: 'howHeard', type: 'text', placeholder: t('howDidYouHear') },
          { name: 'prayerRequest', type: 'textarea', placeholder: t('prayerRequests'), rows: 3 }
        ];
      case t('membershipForm'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber'), required: true },
          { name: 'address', type: 'text', placeholder: t('address'), required: true },
          { name: 'dateOfBirth', type: 'date', placeholder: t('dateOfBirth'), required: true },
          { name: 'maritalStatus', type: 'select', placeholder: t('maritalStatus'), options: ['Single', 'Married', 'Divorced', 'Widowed'] },
          { name: 'occupation', type: 'text', placeholder: t('occupation') },
          { name: 'emergencyContact', type: 'text', placeholder: t('emergencyContactName') },
          { name: 'emergencyPhone', type: 'tel', placeholder: t('emergencyContactPhone') }
        ];
      case t('registerForIFCMEducationalProgram'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber'), required: true },
          { name: 'program', type: 'select', placeholder: t('programOfInterest'), required: true, options: ['Bible Study', 'Leadership Training', 'Ministry School', 'Theological Studies'] },
          { name: 'experience', type: 'textarea', placeholder: t('previousMinistryExperience'), rows: 3 },
          { name: 'expectations', type: 'textarea', placeholder: t('whatDoYouHopeToGain'), rows: 3 }
        ];
      case t('counselingAppointment'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber'), required: true },
          { name: 'preferredDate', type: 'date', placeholder: t('preferredDate'), required: true },
          { name: 'preferredTime', type: 'select', placeholder: t('preferredTime'), options: ['Morning (9-12)', 'Afternoon (12-5)', 'Evening (5-8)'] },
          { name: 'counselingType', type: 'select', placeholder: t('typeOfCounseling'), options: ['Marriage', 'Family', 'Personal', 'Spiritual', 'Career', 'Other'] },
          { name: 'issue', type: 'textarea', placeholder: t('briefDescriptionOfIssue'), required: true, rows: 4 }
        ];
      case t('joinAServiceGroup'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber') },
          { name: 'serviceGroup', type: 'select', placeholder: t('serviceGroup'), required: true, options: ['Worship Team', 'Ushering', 'Media', 'Children Ministry', 'Youth Ministry', 'Outreach', 'Hospitality'] },
          { name: 'experience', type: 'textarea', placeholder: t('relevantExperienceOrSkills'), rows: 3 },
          { name: 'availability', type: 'textarea', placeholder: t('availability'), rows: 2 }
        ];
      case t('preMaritalCounseling'):
        return [
          { name: 'partner1Name', type: 'text', placeholder: t('partner1FullName'), required: true },
          { name: 'partner1Email', type: 'email', placeholder: t('partner1Email'), required: true },
          { name: 'partner1Phone', type: 'tel', placeholder: t('partner1Phone'), required: true },
          { name: 'partner2Name', type: 'text', placeholder: t('partner2FullName'), required: true },
          { name: 'partner2Email', type: 'email', placeholder: t('partner2Email'), required: true },
          { name: 'partner2Phone', type: 'tel', placeholder: t('partner2Phone'), required: true },
          { name: 'weddingDate', type: 'date', placeholder: t('expectedWeddingDate') },
          { name: 'howLongDating', type: 'text', placeholder: t('howLongHaveYouBeenDating') },
          { name: 'concerns', type: 'textarea', placeholder: t('anySpecificConcerns'), rows: 3 }
        ];
      case t('postMaritalCounseling'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber'), required: true },
          { name: 'spouseName', type: 'text', placeholder: t('spouseName') },
          { name: 'yearsMarried', type: 'number', placeholder: t('yearsMarried') },
          { name: 'issues', type: 'textarea', placeholder: t('issuesToAddress'), required: true, rows: 4 }
        ];
      case t('childDedication'):
        return [
          { name: 'parent1Name', type: 'text', placeholder: t('parent1FullName'), required: true },
          { name: 'parent1Email', type: 'email', placeholder: t('parent1Email'), required: true },
          { name: 'parent1Phone', type: 'tel', placeholder: t('parent1Phone'), required: true },
          { name: 'parent2Name', type: 'text', placeholder: t('parent2FullName') },
          { name: 'parent2Email', type: 'email', placeholder: t('parent2Email') },
          { name: 'parent2Phone', type: 'tel', placeholder: t('parent2Phone') },
          { name: 'childName', type: 'text', placeholder: t('childFullName'), required: true },
          { name: 'childDOB', type: 'date', placeholder: t('childDateOfBirth'), required: true },
          { name: 'address', type: 'text', placeholder: t('address'), required: true }
        ];
      case t('invitedGuestForm'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber') },
          { name: 'event', type: 'text', placeholder: t('eventServiceAttending'), required: true },
          { name: 'guests', type: 'number', placeholder: t('numberOfGuests') },
          { name: 'specialNeeds', type: 'textarea', placeholder: t('specialNeeds'), rows: 2 }
        ];
      case t('myAnsweredPrayerSlip'):
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber') },
          { name: 'prayerRequest', type: 'textarea', placeholder: t('originalPrayerRequest'), required: true, rows: 3 },
          { name: 'testimony', type: 'textarea', placeholder: t('howGodAnswered'), required: true, rows: 4 },
          { name: 'dateAnswered', type: 'date', placeholder: t('dateAnswered') }
        ];
      default:
        return [
          { name: 'name', type: 'text', placeholder: t('fullName'), required: true },
          { name: 'email', type: 'email', placeholder: t('emailAddress'), required: true },
          { name: 'phone', type: 'tel', placeholder: t('phoneNumber') },
          { name: 'message', type: 'textarea', placeholder: t('additionalInformation'), rows: 4 }
        ];
    }
  };

  const fields = getFormFields(selectedForm);

  useEffect(() => {
    const initialData = {};
    fields.forEach(field => {
      initialData[field.name] = '';
    });
    setFormData(initialData);
  }, [selectedForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm(`Are you sure you want to submit the ${selectedForm} form?`);
    if (confirmed) {
      try {
        const templateParams = {
          form_type: selectedForm,
          form_data: JSON.stringify(formData, null, 2),
          to_email: 'increasingfaithofchristm@gmail.com'
        };

        await emailjs.send(
          'service_7ig6m9x',
          'template_rvi8tdn',
          templateParams
        );

        alert(`Thank you for submitting the ${selectedForm} form! We will get back to you soon.`);
        const initialData = {};
        fields.forEach(field => {
          initialData[field.name] = '';
        });
        setFormData(initialData);
        onClose();
      } catch (error) {
        console.error('Email sending failed:', error);
        alert('Sorry, there was an error sending your form. Please try again later.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{selectedForm}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((field, idx) => (
              <div key={idx}>
                {field.type === 'textarea' ? (
                  <textarea
                    placeholder={field.placeholder}
                    rows={field.rows || 4}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none"
                  />
                ) : field.type === 'select' ? (
                  <select
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map((option, optIdx) => (
                      <option key={optIdx} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name] || ''}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                  />
                )}
              </div>
            ))}
            <button type="submit" className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all">
              {t('submitForm')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
