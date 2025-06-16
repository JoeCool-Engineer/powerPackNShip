// TODO: Addjustments for mobile responsiveness and accessibility Contact information refer to tailwindcss cheat sheet

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 bottom-0 z-[999]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src="/Logo.png" alt="Logo" className="h-8 w-auto"/>
                        <div className="text-sm">
                            <p className="text-gray-400">270 E Hunt Hwy Ste 16 San Tan Valley, AZ 85143</p>
                        </div>
                    </div>

                    <div className="text-sm">
                        <span>Contact: </span>
                        <a href="tel:480-987-8517" className="hover:text-blue-400">480-987-8517</a>
                        <span className="mx-2">|</span>
                        <a href="mailto:info@powerpackandship.com"
                           className="hover:text-blue-400">info@powerpackandship.com</a>
                    </div>

                    <div className="text-sm text-gray-400">
                        <p>© {new Date().getFullYear()} All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;