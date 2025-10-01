import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function FormModal({ isOpen, onClose, selectedForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for submitting the ${selectedForm} form! We will get back to you soon.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
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
            <input
              type="text"
              placeholder="Full Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
            />
            <textarea
              placeholder="Additional Information"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none"
            ></textarea>
            <button type="submit" className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-all">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
