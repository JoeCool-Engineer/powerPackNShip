import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import MapAndSchedule from './MapAndSchedule';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);
        checkMobile();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <header className={`sticky w-full top-0 z-[999] ${isScrolled ? 'scroll-header' : ''}`}>
            {/* Logo Section */}
            <div className={`header-logo-section px-0 ${isScrolled ? 'bg-white' : 'bg-transparent'} shadow-md`}>
                <div className="px-4">
                    <a href="/" className="flex items-start">
                        <img
                            src="/Logo.png"
                            alt="PowerPack and Ship Logo"
                            className={`w-auto transition-all duration-300 ${
                                isScrolled ? 'h-16' : 'h-70'
                            }`}
                        />
                    </a>
                    
                    {isMobile && (
                        <div className="flex justify-between items-start mt-2">
                            <div className="text-sm text-theme-gray">
                                270 E Hunt Hwy Ste 16<br />
                                San Tan Valley, AZ 85143
                            </div>
                            <MapAndSchedule isScrolled={!isScrolled} isMobile={isMobile} />
                        </div>
                    )}
                    
                    {!isMobile && (
                        <div className={`transition-all duration-700 absolute top-0 right-4 ${
                            isScrolled ? 'mt-1' : 'mt-2'
                        }`}>
                            <MapAndSchedule isScrolled={!isScrolled} isMobile={false} />
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Section */}
            <Navigation />
        </header>
    );
}

export default Header;