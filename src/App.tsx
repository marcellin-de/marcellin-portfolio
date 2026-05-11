import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import { Experience } from './components/Experience';
import { Services, Stack } from './components/ServicesStack';
import { WhyMe, Approach } from './components/WhyMe';
import { About, RecruiterSnapshot, FinalCTA, Footer } from './components/AboutFooter';

const BOOKING_URL = 'https://cal.com/marcellin-de/data-role-intro-30min';

export default function App() {
  const openBooking = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar onBookCall={openBooking} />
      <Hero onBookCall={openBooking} />
      <CaseStudies onBookCall={openBooking} />
      <Experience />
      <Services onBookCall={openBooking} />
      <Stack />
      <WhyMe onBookCall={openBooking} />
      <Approach />
      <About onBookCall={openBooking} />
      <RecruiterSnapshot onBookCall={openBooking} />
      <FinalCTA onBookCall={openBooking} />
      <Footer onBookCall={openBooking} />
    </div>
  );
}
