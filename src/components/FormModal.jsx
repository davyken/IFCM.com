import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

export default function FormModal({ isOpen, onClose, selectedForm }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({});

  // Initialize EmailJS
  emailjs.init('Fy14o2md1Rr_eoO3L');

  const getFormFields = (formType) => {
    switch (formType) {
      case t('shareYourTestimony'):
        return [
          { name: 'status', type: 'select', placeholder: 'Status *', required: true, options: ['Mr'] },
          { name: 'firstName', type: 'text', placeholder: 'First *', required: true },
          { name: 'lastName', type: 'text', placeholder: 'Last *', required: true },
          { name: 'fullName', type: 'text', placeholder: 'Full Name *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email *', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Phone *', required: true },
          { name: 'gender', type: 'select', placeholder: 'Gender *', required: true, options: ['Male', 'Female'] },
          { name: 'shareMethod', type: 'select', placeholder: 'How would you like to share your Testimony ? *', required: true, options: ['Physically', 'Not physical', 'optional incase of video testimony uploads'] },
          { name: 'service', type: 'select', placeholder: 'What Service Do You Want It Shared?', required: false, options: ['First Service'] },
          { name: 'testimonyTitle', type: 'text', placeholder: 'Testimony Title *', required: true },
          { name: 'details', type: 'textarea', placeholder: 'Details of your testimony *', required: true, rows: 4 }
        ];
      case t('newConvertForm'):
        return [
          { name: 'firstName', type: 'text', placeholder: 'First *', required: true },
          { name: 'lastName', type: 'text', placeholder: 'Last *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email', required: false },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number *', required: true },
          { name: 'gender', type: 'select', placeholder: 'Gender *', required: true, options: ['Male', 'Female'] },
          { name: 'maritalStatus', type: 'select', placeholder: 'Marital Status *', required: true, options: ['Married', 'Single'] },
          { name: 'ageGroup', type: 'select', placeholder: 'Age Group *', required: true, options: ['Adult', 'Teen', 'Child'] },
          { name: 'occupation', type: 'text', placeholder: 'Occupation *', required: true },
          { name: 'address', type: 'text', placeholder: 'Address *', required: true },
          { name: 'howHeard', type: 'text', placeholder: 'How did you know about Increasing Faith of Christ Ministry (IFCM)*', required: true },
          { name: 'membershipInterest', type: 'select', placeholder: 'Would you like to be a member of IFCM ? *', required: true, options: ['Yes', 'NO'] },
          { name: 'contactPreference', type: 'select', placeholder: 'Would like us to contact, phone or visit you? *', required: true, options: ['Yes', 'NO'] },
          { name: 'prayerRequests', type: 'textarea', placeholder: 'Prayer Requests', rows: 3 }
        ];
      case t('membershipForm'):
        return [
          { name: 'email', type: 'email', placeholder: 'Email *', required: true },
          { name: 'firstName', type: 'text', placeholder: 'First Name*', required: true },
          { name: 'lastName', type: 'text', placeholder: 'Last Name.*', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number*', required: true },
          { name: 'gender', type: 'select', placeholder: 'Gender*', required: true, options: ['Male', 'Female'] },
          { name: 'residentialAddress', type: 'text', placeholder: 'Residential address*', required: true },
          { name: 'ageRange', type: 'select', placeholder: 'Age Range', required: false, options: ['13-16', '17-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60 and above'] },
          { name: 'dateOfBirth', type: 'date', placeholder: 'Date of Birth*', required: true },
          { name: 'maritalStatus', type: 'select', placeholder: 'Marital status*', required: true, options: ['Single', 'Married'] },
          { name: 'weddingAnniversary', type: 'date', placeholder: 'If married, please kindly share your wedding anniversary date with us', required: false },
          { name: 'occupation', type: 'text', placeholder: 'Occupation*', required: true },
          { name: 'corpMember', type: 'select', placeholder: 'Are you currently serving as a Corp Member?', required: false, options: ['Yes', 'No'] },
          { name: 'courseOfStudy', type: 'text', placeholder: 'If you are a student, what is your course of study?', required: false },
          { name: 'levelOfStudy', type: 'text', placeholder: 'What is your current level of study? (scroll with educational levels)', required: false },
          { name: 'membershipDuration', type: 'text', placeholder: 'Since when have you been a member of IFCM?*', required: true },
          { name: 'missionalCommunity', type: 'select', placeholder: 'Do you belong to a Missional Community in church?*', required: true, options: ['Yes', 'No'] },
          { name: 'missionalCommunityName', type: 'text', placeholder: 'If yes, please state the Missional Community you belong to in church? *', required: false },
          { name: 'addToCommunity', type: 'select', placeholder: 'If not, would you love to be added?', required: false, options: ['Yes', 'No'] },
          { name: 'workforceDepartment', type: 'text', placeholder: 'If you are a member of the Workforce, what department do you belong to?', required: false },
          { name: 'completedPrograms', type: 'select', placeholder: 'What IFCM Educational program (s) have you completed? (Simply click on the last IFCM you graduated from)*', required: true, options: ['Foundation school', 'Ministry classes', 'Baptismal classes', "I've not done any IFCM Educational programs yet"] },
          { name: 'otherPrograms', type: 'text', placeholder: 'Other:', required: false },
          { name: 'profilePicture', type: 'file', placeholder: 'Please upload a nice picture of you here.*', required: true, accept: 'image/*' },
          { name: 'bornAgain', type: 'checkbox', placeholder: 'Are you born again? *', required: true }
        ];
      case 'trueMemberRecognition':
        return [
          { name: 'fullName', type: 'text', placeholder: 'Full Name *', required: true },
          { name: 'address', type: 'text', placeholder: 'Address *', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email *', required: true },
          { name: 'status', type: 'select', placeholder: 'Status (Marital) *', required: true, options: ['Single', 'Married', 'Divorced', 'Widowed'] },
          { name: 'age', type: 'number', placeholder: 'Age *', required: true, min: 13 },
          { name: 'bornAgain', type: 'checkbox', placeholder: 'Are you born again? *', required: true }
        ];
      case t('registerForIFCMEducationalProgram'):
        return [
          { name: 'fullName', type: 'text', placeholder: 'Full Name *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email Address *', required: true },
          { name: 'gender', type: 'select', placeholder: 'Gender *', required: true, options: ['Male', 'Female'] },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number (indicate for both WhatsApp and calls only) *', required: true },
          { name: 'ageBracket', type: 'select', placeholder: 'Age bracket *', required: true, options: ['16-19', '20-25', '26-35', '36-45', '46 and above'] },
          { name: 'ageGroup', type: 'text', placeholder: 'Age Group', required: false },
          { name: 'program', type: 'select', placeholder: 'Which of the IFCM Educational programs are you registering for? *', required: true, options: ['Foundation school', 'Ministry school', 'Baptismal classes (Select Class)'] },
          { name: 'questions', type: 'textarea', placeholder: 'Please drop your questions or inquiries here.', rows: 3 }
        ];
      case t('counselingAppointment'):
        return [
          { name: 'firstName', type: 'text', placeholder: 'First *', required: true },
          { name: 'lastName', type: 'text', placeholder: 'Last *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email *', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number *', required: true },
          { name: 'churchMember', type: 'select', placeholder: 'Are you a member of the church? *', required: true, options: ['--- choose ---', 'Yes', 'No'] },
          { name: 'reason', type: 'select', placeholder: 'Reason for appointment *', required: true, options: ['Relationship', 'Marriage', 'spiritual', 'others " specify please"'] },
          { name: 'message', type: 'textarea', placeholder: 'Leave a message *', required: true, rows: 4 }
        ];
      case t('joinAServiceGroup'):
        return [
          { name: 'serviceGroup', type: 'select', placeholder: '(chose)', required: true, options: ['Choir', 'Usher', 'Media', 'Protocol', 'Evangelism', 'Santuary keeper', 'Interpretation'] }
        ];
      case t('preMaritalCounseling'):
        return [
          { name: 'firstName', type: 'text', placeholder: 'First *', required: true },
          { name: 'lastName', type: 'text', placeholder: 'Last *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email *', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number', required: false },
          { name: 'proposedWeddingDate', type: 'date', placeholder: 'Proposed Wedding Date *', required: true },
          { name: 'churchMember', type: 'select', placeholder: 'Are you a member of the Church? *', required: true, options: ['Yes', 'No'] },
          { name: 'missionalCommunity', type: 'text', placeholder: 'What IFCM Missional Community do you belong to? (please add the name of your MC Leader) *', required: true },
          { name: 'department', type: 'text', placeholder: 'Department', required: false },
          { name: 'notes', type: 'textarea', placeholder: 'Any note?', rows: 3 }
        ];
      case t('postMaritalCounseling'):
        return [
          { name: 'firstName', type: 'text', placeholder: 'First *', required: true },
          { name: 'lastName', type: 'text', placeholder: 'Last *', required: true },
          { name: 'email', type: 'email', placeholder: 'Email *', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Phone Number', required: false },
          { name: 'membershipDuration', type: 'select', placeholder: 'How long have you been a member in IFCM? *', required: true, options: ['0 - 6 Months', '7 Months - 1 year', '2 years and above'] },
          { name: 'marriageDuration', type: 'select', placeholder: 'How long have you been married? *', required: true, options: ['0 - 2 years', '3 - 5 years', '6 - 10 years', '10 years and above'] },
          { name: 'hasChildren', type: 'select', placeholder: 'Do you have children? *', required: true, options: ['Yes', 'NO'] },
          { name: 'notes', type: 'textarea', placeholder: 'Any note?', rows: 3 }
        ];
      case t('childDedication'):
        return [
          { name: 'fatherFirstName', type: 'text', placeholder: 'Father Name First', required: false },
          { name: 'fatherLastName', type: 'text', placeholder: 'Father Name Last', required: false },
          { name: 'fatherContact', type: 'tel', placeholder: 'contact', required: false },
          { name: 'motherFirstName', type: 'text', placeholder: 'Mother Name First', required: false },
          { name: 'motherLastName', type: 'text', placeholder: 'Mother Name Last', required: false },
          { name: 'motherContact', type: 'tel', placeholder: 'Contact', required: false },
          { name: 'childFirstName', type: 'text', placeholder: 'Child Name First', required: false },
          { name: 'childLastName', type: 'text', placeholder: 'Child Name Last', required: false },
          { name: 'dateOfBirth', type: 'date', placeholder: 'Date of birth', required: false },
          { name: 'ageRange', type: 'select', placeholder: 'Age range', required: false, options: ['0 - 3 months', '4 - 7 months', '8 - 1 year', '1 year and above'] },
          { name: 'placeOfBirth', type: 'text', placeholder: 'Place of birth', required: false },
          { name: 'residentialAddress', type: 'text', placeholder: 'Residents address', required: false }
        ];
      case t('invitedGuestForm'):
        return [
          { name: 'name', type: 'text', placeholder: 'Your Name *', required: true },
          { name: 'phone', type: 'tel', placeholder: 'Your Phone Number *', required: true },
          { name: 'invitees', type: 'textarea', placeholder: 'Name and phone number of invitees * example: James Martins (0812 319 6675) Name followed by phone number (one per line)(Big box)', required: true, rows: 4 },
          { name: 'invitationDate', type: 'date', placeholder: 'Date of invitation *', required: true }
        ];
      case t('myAnsweredPrayerSlip'):
        return [
          { name: 'answeredPrayers', type: 'textarea', placeholder: 'List Of Answered Prayers with events name', required: false, rows: 4 }
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
      if (selectedForm === t('shareYourTestimony')) {
        // Store testimony locally
        const existingTestimonies = JSON.parse(localStorage.getItem('userTestimonies') || '[]');
        const newTestimony = {
          name: formData.name,
          testimony: formData.testimony,
          profilePic: formData.profilePic || null,
          initial: formData.name.split(' ').map(n => n[0]).join('').toUpperCase(),
          date: new Date().toISOString()
        };
        existingTestimonies.unshift(newTestimony); // Add to beginning
        localStorage.setItem('userTestimonies', JSON.stringify(existingTestimonies));

        alert('Thank you for sharing your testimony! It has been added to the website.');
        const initialData = {};
        fields.forEach(field => {
          initialData[field.name] = '';
        });
        setFormData(initialData);
        onClose();
        // Trigger page refresh to show new testimony
        window.location.reload();
      } else if (selectedForm === t('membershipForm') || selectedForm === 'trueMemberRecognition') {
        // Store membership data locally on the website
        const existingMembers = JSON.parse(localStorage.getItem('ifcmMembers') || '[]');
        const newMember = {
          ...formData,
          formType: selectedForm,
          submittedAt: new Date().toISOString()
        };
        existingMembers.push(newMember);
        localStorage.setItem('ifcmMembers', JSON.stringify(existingMembers));

        alert(`Thank you for submitting the ${selectedForm} form! Your information has been stored on the website.`);
        const initialData = {};
        fields.forEach(field => {
          initialData[field.name] = '';
        });
        setFormData(initialData);
        onClose();
      } else {
        try {
          let message = `Form Type: ${selectedForm}\n\n`;
          for (let key in formData) {
            if (formData[key]) {
              message += `${key}: ${formData[key]}\n`;
            }
          }

          const templateParams = {
            form_type: selectedForm,
            message: message,
            to_email: 'increasingfaithofchristm@gmail.com',
            from_email: formData.email
          };

          await emailjs.send(
            'service_vukcx8r',
            'template_tked037',
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
          alert(`Sorry, there was an error sending your form: ${error.message || 'Unknown error'}. Please try again later.`);
        }
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
                ) : field.type === 'checkbox' ? (
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      required={field.required}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.checked})}
                      className="mr-2"
                    />
                    <label className="text-gray-700">{field.placeholder}</label>
                  </div>
                ) : field.type === 'file' ? (
                  <input
                    type="file"
                    accept={field.accept}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setFormData({...formData, [field.name]: reader.result});
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                  />
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
