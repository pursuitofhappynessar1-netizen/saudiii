import React from 'react';
import { FileText, Globe, Info } from 'lucide-react';

const VisaRequirementsEn = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Medical Tourism Association" 
              className="h-24 w-auto mx-auto mb-6 drop-shadow-lg logo-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            Visa Requirements
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-teal-500">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-teal-50 rounded-xl">
                <FileText className="w-12 h-12 text-teal-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-8 text-center">
              Visa Information – Taif Medical Tourism Conference
            </h2>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-darkBlue-800 mb-4">
                    Visa Information – Taif Medical Tourism Conference
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All attendees of the Taif Medical Tourism Conference – including exhibitors, visitors, sponsors, and speakers – are required to obtain a visa to enter the Kingdom of Saudi Arabia. Below is a list of available visa types and information on how to apply for each:<br/><br/><br/>
                    
Business Visa<br/>
	•	Exclusively for exhibitors and sponsors of the Taif Medical Tourism Conference.<br/>
	•	It is essential to apply for your Business Visa before traveling to the Kingdom.<br/>
	•	To obtain your official visa invitation letter, please contact the conference customer service team.<br/>
	•	Citizens of GCC countries (United Arab Emirates, Bahrain, Kuwait, Oman) do not require a Business Visa to enter the Kingdom.<br/><br/>
                    
Tourist eVisa<br/>
	•	All international visitors from eligible countries are required to apply for an electronic tourist visa (eVisa) before entering the Kingdom.<br/>
	•	The eVisa is valid for one year, allows multiple entries, and permits stays of up to 90 days per visit.<br/>
	•	The application process may take up to 72 hours for approval, so we recommend applying as early as possible to avoid delays or potential rejections.<br/><br/><br/>
                    
How to Apply:<br/>
	1.	Start your eVisa application through the official Saudi visa portal.<br/>
	2.	Complete the application form with your personal information, including:<br/> (full name, address, date of birth, passport details, and travel plans).<br/>
	3.	Pay the eVisa fee using a credit or debit card.<br/>
	4.	Once approved, you will receive the eVisa by email.<br/><br/><br/>
                    
                    * The information you provide will be screened through several databases. It is essential that your passport details match exactly the passport you will use for travel; otherwise, the eVisa will be invalid.<br/><br/>
                    Note: When completing the “Reason for Travel” section of your eVisa application, please state:<br/><br/>
                    “Attending Taif Medical Tourism Conference 2024”
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-darkBlue-800">For International Participants</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Please contact the Saudi Embassy in your country for updated information on visa requirements and necessary documents.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-darkBlue-800">Required Documents</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ensure your passport is valid for at least 6 months, along with any other documents that may be required based on your nationality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirementsEn;