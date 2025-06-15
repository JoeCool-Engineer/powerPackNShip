// src/pages/Home.jsx
import ShippingPartners from '../components/ShippingPartners';
import ServiceCard from '../components/ServiceCard';
import PackAndShipSection from "../components/PackAndShipSection.jsx";

function Home() {
    const services = [
        {
            title: 'Pack It',
            icon: 'https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8abce41bf31abcd7789bb_service-icon-4.svg',
            description:
                <ul>
                   <li>Professional Packing</li>
                    <li>Packing & Shipping supplies</li>
                </ul>,
            link: '/pack-it'
        },
        {
            title: 'Ship It',
            icon: 'https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8abce41bf31abcd7789bb_service-icon-4.svg',
            description:
                <ul>
                    <li>Domestic Shipping</li>
                    <li>International Shipping</li>
                    <li>Drop Offs</li>
                </ul>,
            link: '/pack-it'
        },
        {
            title: 'Print It',
            icon: 'https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8abe6f0ea249fb16adc1d_service-icon-3.svg',
            description:
                <ul>
                    <li>Self Service Copying</li>
                    <li>Self Service Printing</li>
                    <li>Color, and Black and White</li>
                </ul>
            ,
            link: '/print-it'
        },
        {
            title: 'Get It',
            icon: 'https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8ac067671fa0572e6f5cd_service-icon-2.svg',
            description:
                <ul>
                    <li>Mailbox rental</li>
                    <li>Faxing</li>
                    <li>Key Duplication</li>
                    <li>Notary</li>
                </ul>
            ,
            link: '/get-it'
        }
    ];

    return (
        <div className="py-12 px-4 container mx-auto bg-theme-sage/10">
            <ShippingPartners/>
            <PackAndShipSection />
            <section
                className="py-12 px-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        icon={service.icon}
                        description={service.description}
                        link={service.link}
                    />
                ))}
            </section>
        </div>
    );
}

export default Home;