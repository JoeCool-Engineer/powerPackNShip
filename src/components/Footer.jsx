// TODO: Addjustments for mobile responsiveness and accessibility Contact information refer to tailwindcss cheat sheet

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 bottom-0 z-[999]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* LEFT: Logo + Address */}
                    <div className="flex items-center space-x-4">
                        <img src="/logo_cropped.png" alt="Logo" className="h-8 w-auto" />
                        <div className="text-sm">
                            <p className="text-gray-400">
                                270 E Hunt Hwy Ste 16<br />
                                San Tan Valley, AZ 85143
                            </p>
                        </div>
                    </div>

                    {/* CENTER: Contact */}
                    <div className="text-sm text-center">
                        <span>Contact: </span>
                        <a href="tel:480-987-8517" className="hover:text-green-400">
                            480-987-8517
                        </a>
                        <span className="mx-2">|</span>
                        <a
                            href="mailto:info@powerpackandship.com"
                            className="hover:text-green-400"
                        >
                            info@powerpackandship.com
                        </a>
                    </div>

                    {/* RIGHT: Social + Copyright */}
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        {/* Facebook icon */}
                        <a
                            href="https://www.facebook.com/powerpackandship"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.55V12h2.78l-.44 3.01h-2.34V22c4.78-.76 8.44-4.9 8.44-9.93z" />
                            </svg>
                        </a>

                        <p>© {new Date().getFullYear()} All rights reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
