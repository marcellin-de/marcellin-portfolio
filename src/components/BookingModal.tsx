import { CalendarClock, ExternalLink, X } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingUrl?: string;
}

const DEFAULT_BOOKING_URL = 'https://cal.com/marcellin-de/data-role-intro-30min';

export default function BookingModal({
  isOpen,
  onClose,
  bookingUrl = DEFAULT_BOOKING_URL,
}: BookingModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-prussian/75 px-3 py-3 backdrop-blur-md sm:items-center sm:px-5">
      <button
        type="button"
        aria-label="Close booking modal"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section
        aria-modal="true"
        role="dialog"
        aria-labelledby="booking-modal-title"
        className="relative z-10 flex h-[92svh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl sm:h-[88vh]"
      >
        <header className="flex items-start justify-between gap-4 border-b border-gray-100 px-4 py-4 sm:px-5">
          <div>
            <p className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#995800]">
              <CalendarClock className="h-3.5 w-3.5" />
              30 min recruiter intro
            </p>
            <h2
              id="booking-modal-title"
              className="text-[18px] font-extrabold tracking-tight text-prussian sm:text-[22px]"
            >
              Book an Intro Call
            </h2>
            <p className="mt-1 text-[12px] leading-relaxed text-gray-500 sm:text-[13px]">
              Pick a time to discuss role fit, projects, and next steps.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-prussian/45 transition-colors hover:bg-gray-100 hover:text-prussian"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="min-h-0 flex-1 bg-surface px-4 py-5 sm:px-5">
          <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white px-5 py-8 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#995800]">
              Open the calendar
            </p>
            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-gray-500 sm:text-[14px]">
              The booking flow opens in a new Cal.com tab so you can choose a time quickly.
            </p>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-3 text-[13px] font-semibold text-prussian transition-all hover:bg-accent-hover"
            >
              Open Cal.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <footer className="flex items-center justify-between border-t border-gray-100 px-4 py-3 text-[12px] text-gray-500 sm:px-5">
          <span>The link opens in a new tab.</span>
        </footer>
      </section>
    </div>
  );
}
