import React from 'react';
import { Users, Target, Building, GraduationCap, Briefcase, Stethoscope, Plane, Shield, Heart, Globe } from 'lucide-react';

const WhoShouldAttendEn = () => {
  const targetAudiences = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Healthcare Providers',
      description: 'A unique opportunity to showcase their medical expertise and position themselves as innovators in the rapidly growing global therapeutic healthcare market. By engaging in discussions and panels, they can expand their network with decision-makers and establish strategic partnerships for international growth.',
      color: 'teal'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Medical Travel Agencies',
      description: 'Empowering them to build strong ties with leading providers of medical tourism services to create innovative and competitive packages. The event also facilitates engagement with government representatives and sector leaders to stay ahead of policy and market trends.',
      color: 'purple'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Healthcare Practitioners & Institutions',
      description: 'An ideal platform for global visibility by presenting their services to an audience of travel agencies and government entities. They can also form partnerships with high-end wellness resorts to access the premium medical tourism segment.',
      color: 'orange'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Universities & Educational Institutions',
      description: 'An opportunity to expand academic collaboration through local and international partnerships supporting research in medical tourism. It also enables connections with researchers and investors interested in clinical studies.',
      color: 'pink'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Government Representatives',
      description: 'A platform for stakeholder dialogue to discuss developing the medical tourism infrastructure through public-private partnerships. The event aligns policy with global market developments.',
      color: 'teal'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Investors & Entrepreneurs in Healthcare',
      description: 'Empowering them to enter a fast-growing sector by identifying promising investment opportunities. The event facilitates interaction with industry leaders to define strategic market entry points.',
      color: 'purple'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Startups & HealthTech Companies',
      description: 'A platform to showcase innovative digital health solutions such as telemedicine and AI. They can connect with providers and travel agencies to form strategic partnerships that support digital healthcare transformation.',
      color: 'orange'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Specialized Travel Facilitators in Medical Tourism',
      description: 'A chance to build strategic alliances with healthcare providers to create customized packages that meet global demand. They can also gain insights into trends and supportive policies in this growing field.',
      color: 'pink'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Ancillary Service Providers for Medical Tourism',
      description: 'Companies in transport, hospitality, therapeutic nutrition, and others can leverage the event to market their services and partner with insurers and travel facilitators to provide a holistic patient experience.',
      color: 'teal'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Wellness & Health Resorts',
      description: 'Participation offers the chance to build partnerships with medical tourism facilities and companies, and to develop therapeutic programs combining luxury and traditional practices, unlocking new international market opportunities.',
      color: 'purple'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Local & International Insurance Companies',
      description: 'Discovering opportunities to extend coverage to medical tourism services and developing specialized insurance packages in collaboration with care providers and travel agencies, reinforcing their leadership in comprehensive health insurance.',
      color: 'orange'
    }
  ];

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
            Target Audiences
          </h1>
        </div>

        <div className="space-y-8">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 animate-slide-up border-t-4 border-${audience.color}-500 hover:shadow-2xl transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 p-4 bg-${audience.color}-50 rounded-xl`}>
                  <div className={`text-${audience.color}-600`}>{audience.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-darkBlue-800 mb-4">
                    {index + 1}. {audience.title}:
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttendEn;