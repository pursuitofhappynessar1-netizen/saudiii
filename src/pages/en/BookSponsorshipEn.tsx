import React, { useState } from 'react';
import { Building, User, Phone, FileText, CheckCircle } from 'lucide-react';

const BookSponsorshipEn = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    phone: '',
    sponsorshipType: 'Gold Sponsor',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="py-20 bg-gray-50" dir="ltr">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">Request Sent Successfully!</h3>
            <p className="text-green-600">
              Thank you for your interest in sponsoring the conference. Our team will contact you soon to discuss the details.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Sponsorship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of this important event and support the future of medical tourism in the Kingdom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sponsorship Packages */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sponsorship Packages</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">Gold Sponsor</h4>
                <p className="mb-4">Get the best promotional and marketing opportunities</p>
                <ul className="space-y-2 text-sm">
                  <li>• Large logo on all promotional materials</li>
                  <li>• Premium booth at the exhibition</li>
                  <li>• Opportunity to speak at the ceremony</li>
                  <li>• 10 free invitations</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-400 to-gray-500 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">Silver Sponsor</h4>
                <p className="mb-4">Distinguished sponsorship with diverse benefits</p>
                <ul className="space-y-2 text-sm">
                  <li>• Medium logo on promotional materials</li>
                  <li>• Booth at the exhibition</li>
                  <li>• 5 free invitations</li>
                  <li>• Media coverage</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-lg text-white">
                <h4 className="text-xl font-bold mb-2">Bronze Sponsor</h4>
                <p className="mb-4">A distinguished start to partnership with us</p>
                <ul className="space-y-2 text-sm">
                  <li>• Logo in the program</li>
                  <li>• Space at the exhibition</li>
                  <li>• 3 free invitations</li>
                  <li>• Certificate of appreciation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsorship Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sponsorship Request</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Company or organization name"
                    />
                    <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Contact person name"
                    />
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="05xxxxxxxx"
                    />
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sponsorship Type *
                  </label>
                  <select
                    name="sponsorshipType"
                    value={formData.sponsorshipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  >
                    <option value="Gold Sponsor">Gold Sponsor</option>
                    <option value="Silver Sponsor">Silver Sponsor</option>
                    <option value="Bronze Sponsor">Bronze Sponsor</option>
                    <option value="Custom Sponsorship">Custom Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Any notes or special requirements"
                    />
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Sponsorship Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSponsorshipEn;