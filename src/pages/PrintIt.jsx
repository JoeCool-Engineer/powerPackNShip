function PrintIt() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-theme-sage/10">
        {/* Hero Section */}
            <h1 className="text-4xl font-bold text-theme-dark text-center mb-12">
                Document Services
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Notary Services */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                <div className="mb-6">
                        <div className="w-16 h-16 mb-4 mx-auto">
                            <img
                                src="/Notary.png"
                                alt="Notary Services"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-theme-dark mb-4 text-center">
                            Notary Services
                        </h2>
                    </div>
                    <ul className="space-y-3 text-theme-gray">
                        <li className="flex justify-between">
                            <span>Per notary signature</span>
                            <span className="font-semibold">$8.00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Each witness signature</span>
                            <span className="font-semibold">+$3.00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>I-9 notary</span>
                            <span className="font-semibold">$20.00</span>
                        </li>
                    </ul>
                </div>

                {/* Printing and Copies */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                <div className="mb-6">
                        <div className="w-16 h-16 mb-4 mx-auto">
                            <img
                                src="/brandedPrinter.png"
                                alt="Printing Services"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-theme-dark mb-4 text-center">
                            Printing & Copies
                        </h2>
                    </div>
                    <ul className="space-y-3 text-theme-gray">
                        <li className="flex justify-between">
                            <span>Black & White (per page)</span>
                            <span className="font-semibold">$0.30</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Color (per page)</span>
                            <span className="font-semibold">$0.50</span>
                        </li>
                    </ul>
                </div>

                {/* Faxing Services */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                <div className="mb-6">
                        <div className="w-16 h-16 mb-4 mx-auto">
                            <img
                                src="/brandedFax.png"
                                alt="Fax Services"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-theme-dark mb-4 text-center">
                            Domestic Faxing Services
                        </h2>
                    </div>
                    <ul className="space-y-3 text-theme-gray">
                        <li className="flex justify-between">
                            <span>Up to 10 pages (per page)</span>
                            <span className="font-semibold">$1.25</span>
                        </li>
                        <li className="flex justify-between">
                            <span>11+ pages (per page)</span>
                            <span className="font-semibold">$1.00</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Incoming fax (per page)</span>
                            <span className="font-semibold">$0.75</span>
                        </li>
                    </ul>
                </div>

                {/* Scanning Services */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                <div className="mb-6">
                        <div className="w-16 h-16 mb-4 mx-auto">
                            <img
                                src="/brandedScan.png"
                                alt="Scanning Services"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-theme-dark mb-4 text-center">
                            Scan to Email or USB
                        </h2>
                    </div>
                    <ul className="space-y-3 text-theme-gray">
                        <li className="flex justify-between">
                            <span>Base price</span>
                            <span className="font-semibold">$1.50</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Per page</span>
                            <span className="font-semibold">+$0.30</span>
                        </li>
                    </ul>
                </div>

                {/* Computer Usage */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                <div className="mb-6">
                        <div className="w-16 h-16 mb-4 mx-auto">
                            <img
                                src="/internetUsage.png"
                                alt="Computer Services"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-theme-dark mb-4 text-center">
                            Computer Usage
                        </h2>
                    </div>
                    <ul className="space-y-3 text-theme-gray">
                        <li className="flex justify-between">
                            <span>Up to 15 minutes</span>
                            <span className="font-semibold">$1.50</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PrintIt;