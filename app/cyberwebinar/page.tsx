import CyberHero from './components/CyberHero';
import CyberProblem from './components/CyberProblem';
import CyberCurriculum from './components/CyberCurriculum';
import CyberComparison from './components/CyberComparison';
import CyberDeliverables from './components/CyberDeliverables';
import CyberAudience from './components/CyberAudience';
import CyberSessionDetails from './components/CyberSessionDetails';
import CyberTestimonials from './components/CyberTestimonials';
import CyberFAQ from './components/CyberFAQ';
import CyberCTA from './components/CyberCTA';
import CyberNavbar from './components/CyberNavbar';
import CyberFooter from './components/CyberFooter';
import CyberCountdownBar from './components/CyberCountdownBar';
import CyberBookingModal from './components/CyberBookingModal';

export default function CyberwebinarPage() {
  return (
    <>
      <CyberNavbar />
      <main>
        <CyberHero />
        <CyberProblem />
        <CyberCurriculum />
        <CyberComparison />
        <CyberDeliverables />
        <CyberAudience />
        <CyberSessionDetails />
        <CyberTestimonials />
        <CyberFAQ />
        <CyberCTA />
      </main>
      <CyberFooter />
      <CyberCountdownBar />
      <CyberBookingModal />
    </>
  );
}
