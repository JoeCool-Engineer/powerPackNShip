import { useEffect, useState } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize
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
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          {/* LEFT: Logo (and phone under logo on compact mobile) */}
          <div className="shrink-0 flex flex-col items-center md:items-start">
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

          {/* CENTER: Hours (hidden on compact mobile) */}
          {!isCompactMobile && (
            <div className="flex-1 flex justify-center">
              <div className="text-center text-xs md:text-sm text-slate-700 leading-snug">
                <div className="font-semibold text-slate-900">Hours</div>
                <div>Mon–Fri: 9:00 AM – 6:00 PM</div>
                <div>Sat: 10:00 AM – 2:00 PM</div>
              </div>
            </div>
          )}

          {/* RIGHT: Phone + Address (hidden on compact mobile) */}
          {!isCompactMobile && (
            <div className="shrink-0 text-right leading-snug text-xs md:text-sm text-slate-700">
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

      {/* Navigation stays right under the header always */}
      <Navigation />
    </header>
  );
}
