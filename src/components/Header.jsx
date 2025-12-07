import { useEffect, useMemo, useState } from "react";
import Navigation from "./Navigation";
import holidays from "../config/holidays.json";

const MAPS_CID_URL = "https://www.google.com/maps?cid=12015125235544774477";

// Get all holidays whose 7-day preview window includes today
function getUpcomingHolidays(holidayConfig) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = [];

  holidayConfig.forEach((holiday) => {
    if (!holiday?.date || !holiday?.label || !holiday?.adjustedHours) return;

    const [year, month, day] = holiday.date.split("-").map(Number);
    const holidayDate = new Date(year, month - 1, day);
    holidayDate.setHours(0, 0, 0, 0);

    const previewStart = new Date(holidayDate);
    previewStart.setDate(previewStart.getDate() - 7);

    if (today >= previewStart && today <= holidayDate) {
      const isPreview = today < holidayDate;
      const dateLabel = holidayDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      upcoming.push({
        id: holiday.date,
        label: holiday.label,
        adjustedHours: holiday.adjustedHours,
        dateLabel,
        isPreview,
      });
    }
  });

  return upcoming;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCompactMobile, setIsCompactMobile] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  const upcomingHolidays = useMemo(() => getUpcomingHolidays(holidays), []);

  const schedule = {
    title: "Hours",
    lines: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 5:00 PM", "Sun: Closed"],
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsCompactMobile(false);
      } else {
        const y = window.scrollY;
        if (y > 90) setIsCompactMobile(true);
        else if (y < 30) setIsCompactMobile(false);
      }
    };

    const handleScroll = () => {
      const y = window.scrollY;

      const scrolled = y > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      // Compact mobile mode w/ hysteresis
      if (window.innerWidth < 768) {
        if (y > 90) setIsCompactMobile(true);
        else if (y < 30) setIsCompactMobile(false);
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const collapseInfo = isMobile && isCompactMobile;

  const logoHeight = collapseInfo
    ? "h-14"
    : isScrolled
      ? "h-18 md:h-22"
      : "h-22 md:h-26";

  return (
    <header
      className={`sticky top-0 z-[999] w-full transition-colors transition-shadow duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80"
      }`}
    >
      {/* HOLIDAY BANNER */}
      {upcomingHolidays.length > 0 && !isBannerDismissed && (
        <div className="bg-green-600 text-white text-xs md:text-sm">
          <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="font-semibold">Upcoming Holiday Hours:</span>
              <span className="opacity-90">
                {upcomingHolidays
                  .map(
                    (h) =>
                      `${h.label} (${h.dateLabel}) – ${h.adjustedHours}${
                        h.isPreview ? "" : " (Today)"
                      }`
                  )
                  .join(" • ")}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsBannerDismissed(true)}
              className="rounded-full border border-white/60 px-2 text-xs font-semibold hover:bg-white hover:text-green-700 transition-colors"
              aria-label="Dismiss holiday hours banner"
              title="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between gap-3 transition-[padding] duration-200 ${
            collapseInfo ? "py-1" : "py-3"
          }`}
        >
          {/* LEFT: Logo + phone-under-logo on compact mobile */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center">
              <img
                src="/logo_cropped.png"
                alt="Power Pack and Ship Logo"
                className={`w-auto transition-all duration-300 ${logoHeight}`}
              />
            </a>

            {collapseInfo && (
              <div className="mt-0.5 font-semibold text-green-700 text-base md:hidden">
                <a href="tel:14809878517">(480) 987-8517</a>
              </div>
            )}
          </div>

          {/* CENTER: Hours + holiday notes */}
          <div
            className={`flex-1 flex justify-center overflow-hidden transition-[max-height,opacity] duration-200 ${
              collapseInfo ? "max-h-0 opacity-0 pointer-events-none" : "max-h-96 opacity-100"
            }`}
          >
            <div className="text-center text-sm md:text-sm text-slate-700 leading-snug">
              <div className="font-semibold text-slate-900">{schedule.title}</div>
              {schedule.lines.map((line) => (
                <div key={line}>{line}</div>
              ))}

              {upcomingHolidays.length > 0 && (
                <div className="mt-1 text-[11px] md:text-xs text-slate-600">
                  <div className="font-semibold">Upcoming holiday hours:</div>
                  {upcomingHolidays.map((h) => (
                    <div key={h.id}>
                      {h.label}: {h.adjustedHours}{" "}
                      {h.isPreview ? `(on ${h.dateLabel})` : `(Today)`}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Phone + Address */}
          <div
            className={`text-right text-xs md:text-sm text-slate-700 leading-snug overflow-hidden transition-[max-height,opacity] duration-200 ${
              collapseInfo ? "max-h-0 opacity-0 pointer-events-none" : "max-h-40 opacity-100"
            }`}
          >
            <div className="font-semibold text-green-700 text-sm md:text-base">
              <a href="tel:14809878517">(480) 987-8517</a>
            </div>

            {/* Address now links to Google Maps CID */}
            <a
              href={MAPS_CID_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block hover:underline"
              aria-label="View Power Pack and Ship on Google Maps"
              title="View us on Google"
            >
              270 E Hunt Hwy Ste 16
              <br />
              San Tan Valley, AZ 85143
            </a>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}
