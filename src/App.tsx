import { useState } from 'react';
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import { Experience } from './components/Experience';
import { Services, Stack } from './components/ServicesStack';
import { WhyMe, Approach } from './components/WhyMe';
import { About, RecruiterSnapshot, FinalCTA, Footer } from './components/AboutFooter';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

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

      <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
    </div>
  );
}
