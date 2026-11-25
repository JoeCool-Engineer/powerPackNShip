import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import holidays from "../config/holidays.json";

const MAPS_CID_URL = "https://www.google.com/maps?cid=12015125235544774477";
const DAY_MS = 86_400_000;

const phoenixDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Phoenix",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
const holidayDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  year: "numeric",
  month: "short",
  day: "numeric",
});

function getPhoenixDate() {
  const parts = phoenixDateFormatter.formatToParts(new Date());
  const value = (type) => Number(parts.find((part) => part.type === type).value);
  // Represent Phoenix calendar dates in UTC for date-only comparisons.
  return Date.UTC(value("year"), value("month") - 1, value("day"));
}

const holidaySchedule = holidays.map((holiday) => {
  const [year, month, day] = holiday.date.split("-").map(Number);
  return { ...holiday, day: Date.UTC(year, month - 1, day) };
}).sort((a, b) => a.day - b.day);

function getSchedule(phoenixDate) {
  const date = new Date(phoenixDate);
  const isDecember = date.getUTCMonth() === 11;
  const weekdayHours = isDecember ? "8:30 AM - 6:00 PM" : "8:30 AM - 5:30 PM";
  const saturdayHours = isDecember ? "9:00 AM - 4:00 PM" : "10:00 AM - 4:00 PM";
  const weekday = date.getUTCDay();
  const regularHours = weekday === 0 ? "Closed" : weekday === 6 ? saturdayHours : weekdayHours;
  const todayHoliday = holidaySchedule.find((holiday) => holiday.day === phoenixDate);
  return {
    title: isDecember ? "December hours" : "Regular hours",
    lines: [`Mon-Fri: ${weekdayHours}`, `Sat: ${saturdayHours}`, "Sun: Closed"],
    todayHours: todayHoliday?.adjustedHours ?? regularHours,
  };
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCompactMobile, setIsCompactMobile] = useState(false);
  const [dismissedBannerDate, setDismissedBannerDate] = useState(null);
  const [phoenixDate, setPhoenixDate] = useState(getPhoenixDate);
  const schedule = getSchedule(phoenixDate);
  const upcomingHolidays = holidaySchedule.filter(
    (holiday) => holiday.day >= phoenixDate && holiday.day <= phoenixDate + 7 * DAY_MS
  );

  useEffect(() => {
    const refreshDate = () => setPhoenixDate(getPhoenixDate());
    let timeout;
    const scheduleRefresh = () => {
      refreshDate();
      timeout = window.setTimeout(scheduleRefresh, 60_000 - (Date.now() % 60_000));
    };

    scheduleRefresh();
    document.addEventListener("visibilitychange", refreshDate);
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("visibilitychange", refreshDate);
    };
  }, []);

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
      {upcomingHolidays.length > 0 && dismissedBannerDate !== phoenixDate && (
        <div className="bg-green-600 text-white text-xs md:text-sm">
          <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="font-semibold">Holiday Hours:</span>
              <span className="opacity-90">
                {upcomingHolidays
                  .map(
                    (h) =>
                      `${h.label} (${holidayDateFormatter.format(h.day)}) – ${h.adjustedHours}${
                        h.day === phoenixDate ? " (Today)" : ""
                      }`
                  )
                  .join(" • ")}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setDismissedBannerDate(phoenixDate)}
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
          <div className="flex-1 text-center text-sm text-slate-700 leading-snug">
            <div className="font-semibold text-slate-900" aria-live="polite">
              Today&apos;s Hours: {schedule.todayHours}
            </div>
            {!collapseInfo && (
              <div className="mt-1">
                <div className="font-semibold text-slate-900">{schedule.title}</div>
                {schedule.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}

                {upcomingHolidays.length > 0 && (
                  <div className="mt-1 text-[11px] md:text-xs text-slate-600">
                    <div className="font-semibold">Holiday hours:</div>
                    {upcomingHolidays.map((h) => (
                      <div key={h.date}>
                        {h.label}: {h.adjustedHours}{" "}
                        {h.day === phoenixDate ? "(Today)" : `(on ${holidayDateFormatter.format(h.day)})`}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
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
