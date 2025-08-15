import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Conference from './pages/Conference';
import ConferenceRegister from './pages/ConferenceRegister';
import BookSponsorship from './pages/BookSponsorship';
import PlaceholderPage from './pages/PlaceholderPage';
import Contact from './pages/Contact';
import ConferenceProgram from './pages/ConferenceProgram';
import ConferenceSpeakers from './pages/ConferenceSpeakers';
import AboutAssociation from './pages/AboutAssociation';
import WhoShouldAttend from './pages/WhoShouldAttend';
import Flights from './pages/Flights';
import VisaRequirements from './pages/VisaRequirements';
import AboutConference from './pages/AboutConference';

// English components
import LayoutEn from './components/en/LayoutEn';
import HomeEn from './pages/en/HomeEn';
import AboutEn from './pages/en/AboutEn';
import AboutAssociationEn from './pages/en/AboutAssociationEn';
import ConferenceEn from './pages/en/ConferenceEn';
import ConferenceProgramEn from './pages/en/ConferenceProgramEn';
import ConferenceSpeakersEn from './pages/en/ConferenceSpeakersEn';
import ConferenceRegisterEn from './pages/en/ConferenceRegisterEn';
import BookSponsorshipEn from './pages/en/BookSponsorshipEn';
import ContactEn from './pages/en/ContactEn';
import WhoShouldAttendEn from './pages/en/WhoShouldAttendEn';
import FlightsEn from './pages/en/FlightsEn';
import VisaRequirementsEn from './pages/en/VisaRequirementsEn';
import AboutConferenceEn from './pages/en/AboutConferenceEn';
import PlaceholderPageEn from './pages/en/PlaceholderPageEn';

function App() {
  return (
    <Router>
      <Routes>
        {/* Arabic Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/taif" element={<PlaceholderPage title="عن الطائف" description="معلومات شاملة عن مدينة الطائف ومقوماتها السياحية والعلاجية" />} />
          <Route path="about/association" element={<AboutAssociation />} />
          <Route path="about/conference" element={<AboutConference />} />
          <Route path="about/scientific-committee" element={<PlaceholderPage title="اللجنة العلمية" description="أعضاء اللجنة العلمية للمؤتمر وخبراتهم" />} />
          
          <Route path="conference" element={<Conference />} />
          <Route path="conference/register" element={<ConferenceRegister />} />
          <Route path="conference/program" element={<ConferenceProgram />} />
          <Route path="conference/speakers" element={<ConferenceSpeakers />} />
          <Route path="conference/who-should-attend" element={<WhoShouldAttend />} />
          
          <Route path="partners" element={<PlaceholderPage title="الشركاء والرعاة" description="شركاؤنا الاستراتيجيون في تطوير السياحة العلاجية" />} />
          <Route path="partners/sponsors" element={<PlaceholderPage title="الرعاة" description="الشركات والمؤسسات الراعية للمؤتمر" />} />
          <Route path="partners/book-sponsorship" element={<BookSponsorship />} />
          
          <Route path="media" element={<PlaceholderPage title="الإعلام" description="التغطية الإعلامية والأنشطة الإعلامية للمؤتمر" />} />
          <Route path="media/coverage" element={<PlaceholderPage title="تغطية إعلامية" description="التغطية الإعلامية للمؤتمر والفعاليات" />} />
          <Route path="media/exhibition" element={<PlaceholderPage title="المعرض" description="معرض السياحة العلاجية المصاحب للمؤتمر" />} />
          
          <Route path="registration" element={<ConferenceRegister />} />
          
          <Route path="hospitality" element={<PlaceholderPage title="الضيافة" description="خدمات الضيافة والإقامة للمشاركين في المؤتمر" />} />
          <Route path="hospitality/accommodation" element={<PlaceholderPage title="الإقامة" description="خيارات الإقامة المتاحة للمشاركين" />} />
          <Route path="hospitality/visa" element={<VisaRequirements />} />
          <Route path="hospitality/flights" element={<Flights />} />
          
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* English Routes */}
        <Route path="/en" element={<LayoutEn />}>
          <Route index element={<HomeEn />} />
          <Route path="about" element={<AboutEn />} />
          <Route path="about/taif" element={<PlaceholderPageEn title="About Taif" description="Comprehensive information about Taif city and its tourism and medical capabilities" />} />
          <Route path="about/association" element={<AboutAssociationEn />} />
          <Route path="about/conference" element={<AboutConferenceEn />} />
          <Route path="about/scientific-committee" element={<PlaceholderPageEn title="Scientific Committee" description="Conference scientific committee members and their expertise" />} />
          
          <Route path="conference" element={<ConferenceEn />} />
          <Route path="conference/register" element={<ConferenceRegisterEn />} />
          <Route path="conference/program" element={<ConferenceProgramEn />} />
          <Route path="conference/speakers" element={<ConferenceSpeakersEn />} />
          <Route path="conference/who-should-attend" element={<WhoShouldAttendEn />} />
          
          <Route path="partners" element={<PlaceholderPageEn title="Partners & Sponsors" description="Our strategic partners in developing medical tourism" />} />
          <Route path="partners/sponsors" element={<PlaceholderPageEn title="Sponsors" description="Companies and institutions sponsoring the conference" />} />
          <Route path="partners/book-sponsorship" element={<BookSponsorshipEn />} />
          
          <Route path="media" element={<PlaceholderPageEn title="Media" description="Media coverage and media activities for the conference" />} />
          <Route path="media/coverage" element={<PlaceholderPageEn title="Media Coverage" description="Media coverage of the conference and events" />} />
          <Route path="media/exhibition" element={<PlaceholderPageEn title="Exhibition" description="Medical tourism exhibition accompanying the conference" />} />
          
          <Route path="registration" element={<ConferenceRegisterEn />} />
          
          <Route path="hospitality" element={<PlaceholderPageEn title="Hospitality" description="Hospitality and accommodation services for conference participants" />} />
          <Route path="hospitality/accommodation" element={<PlaceholderPageEn title="Accommodation" description="Available accommodation options for participants" />} />
          <Route path="hospitality/visa" element={<VisaRequirementsEn />} />
          <Route path="hospitality/flights" element={<FlightsEn />} />
          
          <Route path="contact" element={<ContactEn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;