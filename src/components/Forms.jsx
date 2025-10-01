import React from 'react';

export default function Forms({ openFormModal }) {
  const forms = [
    { name: 'Share Your Testimony', icon: '📝', color: 'from-amber-400 to-amber-600' },
    { name: 'New Convert Form', icon: '✨', color: 'from-blue-400 to-blue-600' },
    { name: 'Membership Form', icon: '👥', color: 'from-green-400 to-green-600' },
    { name: 'Register for IFCM Educational Program', icon: '📚', color: 'from-purple-400 to-purple-600' },
    { name: 'Counseling Appointment', icon: '🤝', color: 'from-pink-400 to-pink-600' },
    { name: 'Join a Service Group', icon: '⚡', color: 'from-indigo-400 to-indigo-600' },
    { name: 'Pre-Marital Counseling', icon: '💑', color: 'from-red-400 to-red-600' },
    { name: 'Post-Marital Counseling', icon: '💕', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Child Dedication', icon: '👶', color: 'from-teal-400 to-teal-600' },
    { name: 'Invited Guest Form', icon: '🎉', color: 'from-orange-400 to-orange-600' },
    { name: 'My Answered Prayer Slip', icon: '🙌', color: 'from-cyan-400 to-cyan-600' }
  ];

  return (
    <section id="forms" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Forms & Registration</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Connect with us through these forms</p>
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
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{form.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
