import React from 'react';

export default function Ministries() {
  const ministries = [
    {
      name: 'Worship Team (Levites)',
      description: 'Ushering in the presence of God through prophetic music and Spirit-led worship',
      icon: '🎵',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Youth for Impact',
      description: 'Empowering the next generation through mentorship, service, and revival',
      icon: '⚡',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Mothers of Nations',
      description: 'A support and prayer network for women walking in their God-given purpose',
      icon: '👩',
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Intercession Army',
      description: 'Warriors standing in the gap for the church and the nations',
      icon: '🙏',
      color: 'from-amber-400 to-amber-600'
    },
    {
      name: 'Evangelism Squad',
      description: 'Taking the gospel to streets, hospitals, prisons, and remote communities',
      icon: '📢',
      color: 'from-green-400 to-green-600'
    },
    {
      name: "Children's Ministry",
      description: 'Nurturing young hearts to know and love Jesus from an early age',
      icon: '🧒',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section id="ministries" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Ministries</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Find your place to serve and grow</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ministries.map((ministry, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${ministry.color} rounded-full flex items-center justify-center mb-4 sm:mb-6 text-2xl sm:text-3xl mx-auto`}>
                {ministry.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{ministry.name}</h3>
              <p className="text-gray-600 leading-relaxed">{ministry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all shadow-lg">
            Join a Ministry
          </button>
        </div>
      </div>
    </section>
  );
}
