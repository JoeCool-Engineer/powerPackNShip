import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import holidays from "../config/holidays.json"; // adjust path if needed

// Get all holidays whose 7-day preview window includes today
function getUpcomingHolidays(holidayConfig) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = [];

  holidayConfig.forEach((holiday) => {
    const [year, month, day] = holiday.date.split("-").map(Number);
    const holidayDate = new Date(year, month - 1, day);
    holidayDate.setHours(0, 0, 0, 0);

    const previewStart = new Date(holidayDate);
    previewStart.setDate(previewStart.getDate() - 7); // 7 days prior

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
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  const upcomingHolidays = getUpcomingHolidays(holidays);

  const schedule = {
    title: "Hours",
    lines: ["Mon-Fri: 8:30 AM - 5:30 PM", "Sat: 10:00 AM - 4:00 PM"],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCompactMobile = isMobile && isScrolled;

  return (
    <header
      className={`sticky top-0 z-[999] w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/80"
      } backdrop-blur`}
    >
      {/* HOLIDAY BANNER – shows ALL upcoming holidays in window */}
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
                        h.isPreview ? "" : " (today)"
                      }`
                  )
                  .join(" • ")}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsBannerDismissed(true)}
              className="rounded-full border border-white/60 px-2 text-xs font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-3">
          {/* LEFT: Logo (and phone under logo on compact mobile) */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center">
              <img
                src="/logo_cropped.png"
                alt="Power Pack and Ship Logo"
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? "h-20 md:h-24" : "h-24 md:h-28"
                }`}
              />
            </a>

            {/* On compact mobile: show phone under logo */}
            {isCompactMobile && (
              <div className="mt-1 font-semibold text-green-700 text-base">
                <a href="tel:14809878517">(480) 987-8517</a>
              </div>
            )}
          </div>

          {/* CENTER: Normal hours + holiday notes (hidden on compact mobile) */}
          {!isCompactMobile && (
            <div className="flex-1 flex justify-center">
              <div className="text-center text-xs md:text-sm text-slate-700 leading-snug">
                <div className="font-semibold text-slate-900">
                  {schedule.title}
                </div>
                {schedule.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}

                {upcomingHolidays.length > 0 && (
                  <div className="mt-1 text-[11px] md:text-xs text-slate-600">
                    <div className="font-semibold">Upcoming holiday hours:</div>
                    {upcomingHolidays.map((h) => (
                      <div key={h.id}>
                        {h.label}: {h.adjustedHours}{" "}
                        {h.isPreview ? `(on ${h.dateLabel})` : `(today)`}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* RIGHT: Phone + Address (hidden on compact mobile) */}
          {!isCompactMobile && (
            <div className="text-right text-xs md:text-sm text-slate-700 leading-snug">
              <div className="font-semibold text-green-700 text-sm md:text-base">
                <a href="tel:14809878517">(480) 987-8517</a>
              </div>
              <div className="mt-1">
                270 E Hunt Hwy Ste 16
                <br />
                San Tan Valley, AZ 85143
              </div>
            </div>
          )}
        </div>
      </div>

      <Navigation />
    </header>
  );
}
