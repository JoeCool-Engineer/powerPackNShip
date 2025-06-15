import ShippingPartners from "../components/ShippingPartners.jsx";

function PackIt() {
    return (
        <div className="py-12 px-4 container mx-auto bg-theme-sage/10">
        {/* Hero Section */}
            <h1 className="text-3xl font-bold mb-6 text-theme-dark">
            Pack & Ship Services
            </h1>

            {/* Packaging Supplies Section */}
            <section className="bg-white rounded-lg shadow-md p-8 border-t-4 border-theme-green mb-12">
                <h2 className="text-2xl font-semibold text-theme-dark mb-4">Packaging Supplies</h2>
                <p className="text-lg text-theme-dark mb-6 font-medium">
                    We carry all the packaging items you may need!
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <ul className="list-disc pl-6 space-y-2 text-theme-gray">
                            <li>Tape ($0.50 per box)</li>
                            <li>Boxes of all sizes</li>
                            <li>Bubble wrap</li>
                            <li>Packing peanuts</li>
                            <li>Mailing tubes</li>
                            <li>Art boxes</li>
                            <li>Custom box making</li>
                        </ul>
                        <p className="mt-4 text-sm text-theme-gray italic">
                            *$0.50 transaction fee for purchases under $4
                        </p>
                    </div>
                </div>
            </section>
            <ShippingPartners showDetails/>
        </div>
    );
}

export default PackIt;