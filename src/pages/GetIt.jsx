function GetIt() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-theme-sage/10">
        {/* Hero Section */}
            <h1 className="text-4xl font-bold text-theme-dark text-center mb-12">
            Private Mailbox Services
            </h1>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Benefits */}
                <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                <h2 className="text-2xl font-semibold text-theme-dark mb-6">
                        Benefits of Renting a Private Mailbox
                    </h2>
                    <div className="mb-8">
                        <img
                            src="/Mailboxes.png"
                            alt="Private Mailboxes"
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <p className="text-theme-gray mb-6">
                            When you rent a Private mailbox from Power Pack and Ship, you get unmatched service,
                            convenience, and a safe location to receive and store your mail and packages.
                            Say goodbye to a standard P.O. box and experience the freedom that a Power Pack
                            and Ship mailbox offers.
                        </p>
                    </div>

                    <h3 className="text-xl font-semibold text-theme-dark mb-4">Features:</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-theme-green mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <p className="text-theme-gray">
                                We accept packages from all shipping carriers (including FedEx, UPS, DHL, On Trac and USPS).
                            </p>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-theme-green mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <p className="text-theme-gray">
                                Get a real street address without having to give out your home address. We help your
                                business project a professional image with an actual street address and suite number.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-theme-green mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <p className="text-theme-gray">
                                Choose the right option for your needs. We offer both business and personal mailbox
                                solutions in a range of sizes.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-theme-green mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <p className="text-theme-gray">
                                Save time with our package alert system. We email or text you once a package has arrived.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Pricing */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-theme-dark mb-6">
                        Mailbox Rates
                    </h2>

                    {/* Small Mailbox Card */}
                    <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                    <h3 className="text-xl font-semibold text-theme-dark mb-4">Small Mailbox</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg font-semibold text-theme-dark">$42</p>
                                <p className="text-sm text-theme-gray">3 months</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg font-semibold text-theme-dark">$63</p>
                                <p className="text-sm text-theme-gray">6 months</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg font-semibold text-theme-dark">$114</p>
                                <p className="text-sm text-theme-gray">1 year</p>
                            </div>
                        </div>
                    </div>

                    {/* Medium Mailbox Card */}
                    <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green">
                    <h3 className="text-xl font-semibold text-theme-dark mb-4">Medium Mailbox</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg font-semibold text-theme-dark">$57</p>
                                <p className="text-sm text-theme-gray">3 months</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg font-semibold text-theme-dark">$96</p>
                                <p className="text-sm text-theme-gray">6 months</p>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg font-semibold text-theme-dark">$165</p>
                                <p className="text-sm text-theme-gray">1 year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetIt;