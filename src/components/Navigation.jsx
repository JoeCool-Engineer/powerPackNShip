
import { useState } from 'react';
import {Link} from "react-router-dom";

const navItems = [
    { name: 'Home', link: '/' },
    // { name: 'Tracking', link: '/ship-it' },
    { name: 'Pack and Ship', link: '/pack-it' },
    { name: 'Document Services', link: '/print-it' },
    { name: 'Mailboxes', link: '/get-it' },
    { name: 'Merchandise', link: '/merchandise' },
];

const mobileNavItems = [
    { name: 'Home', link: '/' },
    // { name: 'Tracking', link: '/ship-it' },
    { name: 'Pack and Ship', link: '/pack-it' },
    { name: 'Document Services', link: '/print-it' },
    { name: 'Mailboxes', link: '/get-it' },
    { name: 'Merchandise', link: '/merchandise' },
];

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="header-nav-section w-full">
        {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8 py-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.link}
                        className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden px-4 py-2">
                <button
                    className="text-white"
                    aria-label="Menu"
                    id="mobile-menu-button"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden w-full ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {mobileNavItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            className="block px-3 py-2 text-white hover:text-gray-200 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navigation;