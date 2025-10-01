import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Give() {
  return (
    <section id="give" className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Partner With Us</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-amber-100">Support the Kingdom work through your giving</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Mobile Money</h3>
            <div className="space-y-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm text-amber-100 mb-1">MTN MoMo</p>
                <p className="text-2xl font-bold">675 123 456</p>
                <p className="text-sm text-amber-100 mt-1">IFC Projects</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm text-amber-100 mb-1">Orange Money</p>
                <p className="text-2xl font-bold">699 987 654</p>
                <p className="text-sm text-amber-100 mt-1">Tithes & Offerings</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ways to Give</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Tithes & Offerings</p>
                  <p className="text-sm text-amber-100">Support regular church operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Kingdom Center Project</p>
                  <p className="text-sm text-amber-100">Build our permanent worship center</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Mercy Hands Project</p>
                  <p className="text-sm text-amber-100">Support humanitarian outreach</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Missions & Evangelism</p>
                  <p className="text-sm text-amber-100">Reach the unreached with the gospel</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-amber-100 italic">"Give, and it will be given to you. A good measure, pressed down, shaken together and running over." - Luke 6:38</p>
        </div>
      </div>
    </section>
  );
}
