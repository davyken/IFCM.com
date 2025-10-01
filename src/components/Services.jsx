import React from 'react';
import { Calendar } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Times</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Join us for worship and fellowship</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Calendar className="text-amber-700" size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Sunday Service</h3>
            <p className="text-gray-600 mb-4">Experience powerful worship, prophetic teaching, and the presence of God</p>
            <div className="space-y-2">
              <p className="text-gray-700"><span className="font-semibold">First Service:</span> 8:00 AM - 10:30 AM</p>
              <p className="text-gray-700"><span className="font-semibold">Location:</span> Total Nsimeyong, Yaoundé</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Calendar className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Midweek Service</h3>
            <p className="text-gray-600 mb-4">Join us for Bible study, intercession, and deeper fellowship</p>
            <div className="space-y-2">
              <p className="text-gray-700"><span className="font-semibold">Service:</span> Wednesday - 6:00 PM</p>
              <p className="text-gray-700"><span className="font-semibold">Focus:</span> Teaching & Prayer</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Headquarters: Total Nsimeyong, Yaoundé, Cameroon</p>
          <p className="text-gray-600">Everyone is welcome! Come as you are.</p>
        </div>
      </div>
    </section>
  );
}
