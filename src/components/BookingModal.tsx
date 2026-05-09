'use client';

import { ctaConfig } from '@/config/CTA';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { useUmami } from '@/hooks/use-umami';
import Cal, { getCalApi } from '@calcom/embed-react';
import { CalendarClock, CircleDot } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

import Container from '../common/Container';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface CallToActionProps {
  profileImage?: string;
  profileAlt?: string;
  linkText?: string;
  calLink?: string;
  preText?: string;
}

export default function CTA({
  profileImage = ctaConfig.profileImage,
  profileAlt = ctaConfig.profileAlt,
  linkText = ctaConfig.linkText,
  calLink = ctaConfig.calLink,
  preText = ctaConfig.preText,
}: CallToActionProps) {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const { trackEvent } = useUmami();
  const [showCalPopup, setShowCalPopup] = useState(false);

  const normalizedCalLink = useMemo(
    () =>
      calLink
        .replace(/^https?:\/\/(?:app\.)?cal\.com\//, '')
        .replace(/^\/+/, ''),
    [calLink],
  );

  const calUrl = useMemo(
    () =>
      calLink.startsWith('http://') || calLink.startsWith('https://')
        ? calLink
        : `https://app.cal.com/${normalizedCalLink}`,
    [calLink, normalizedCalLink],
  );

  useEffect(() => {
    const cal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi('on', {
            action: 'bookingSuccessful',
            callback: () => {
              trackEvent({
                name: 'button_click',
                data: {
                  buttonId: 'cal_booking_success',
                  section: 'cta',
                  action: 'booking_success',
                },
              });
              setShowCalPopup(false);
            },
          });
        }
      } catch (error) {
        console.error('Failed to initialize Cal API:', error);
      }
    };
    cal();
  }, [trackEvent]);

  const handleButtonClick = () => {
    if (isMobile()) {
      triggerHaptic('medium');
    }
    trackEvent({
      name: 'button_click',
      data: {
        buttonId: 'cta_cal_open',
        section: 'cta',
        action: 'open_cal_embed',
      },
    });
    setShowCalPopup(true);
  };

  return (
    <>
      <Container className="mt-24">
        <section className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/60 p-5 md:p-8 lg:p-10 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-400/12 blur-3xl" />

          <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="space-y-4">
              <p className="text-secondary text-xs font-semibold tracking-[0.2em] uppercase">
                Let&apos;s Talk
              </p>
              <h2 className="text-xl leading-tight font-semibold sm:text-2xl md:text-3xl">
                {preText}
              </h2>
              <p className="text-secondary max-w-2xl text-sm leading-6 md:text-base">
                Book a focused call to discuss your data platform, analytics
                roadmap, or delivery priorities.
              </p>
              <p className="text-secondary text-xs">
                No pressure, no commitment. Clear next steps in one call.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-900/70">
                  <CalendarClock className="h-3.5 w-3.5" /> 30 min session
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/80 bg-emerald-50/80 px-3 py-1 text-xs text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-950/40 dark:text-emerald-300">
                  It&apos;s free
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-900/70">
                  <CircleDot className="h-3.5 w-3.5 text-emerald-500" /> Remote
                  friendly
                </span>
              </div>
            </div>

            <div className="flex md:justify-end">
              <button
                type="button"
                onClick={handleButtonClick}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-zinc-300/90 bg-white/90 px-4 py-3 text-sm font-semibold shadow-[0_12px_30px_-20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-400 md:w-auto dark:border-zinc-700 dark:bg-zinc-900/90 dark:hover:border-zinc-600"
                aria-label={linkText}
              >
                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
                  <Image
                    alt={profileAlt}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                    src={profileImage}
                  />
                  <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border border-white bg-emerald-500 dark:border-zinc-900" />
                </div>
                <span>{linkText}</span>
                <span className="text-secondary transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
      </Container>

      <Dialog open={showCalPopup} onOpenChange={setShowCalPopup}>
        <DialogContent className="max-h-[94vh] max-w-[99vw] overflow-hidden p-4 sm:max-w-[96vw] lg:max-w-[92vw] 2xl:max-w-[1720px]">
          <DialogHeader>
            <DialogTitle>Book a Meeting</DialogTitle>
            <DialogDescription>
              Schedule a time to connect and discuss opportunities
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[calc(94vh-170px)] overflow-y-auto rounded-lg">
            <Cal
              calLink={normalizedCalLink}
              config={{
                theme: 'auto',
                layout: 'month_view',
                utm_source: 'portfolio',
                utm_medium: 'website',
                utm_campaign: 'cta_booking',
              }}
              className="h-[72vh] min-h-[640px] w-full rounded-lg"
            />
          </div>

          <p className="text-secondary mt-2 text-xs">
            If the embed is blocked,{' '}
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              onClick={() =>
                trackEvent({
                  name: 'external_link_click',
                  data: {
                    url: calUrl,
                    text: 'Open Cal.com in a new tab',
                    location: 'cta_dialog',
                  },
                })
              }
            >
              open Cal.com in a new tab
            </a>
            .
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}