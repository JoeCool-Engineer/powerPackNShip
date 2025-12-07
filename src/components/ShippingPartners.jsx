import ShippingServiceCard from './ShippingServiceCard';
import { shippingServices } from "../data/shppingServiceInfo.js";

export default function ShippingPartners({ showDetails }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {Object.values(shippingServices).map((provider) => (
                <ShippingServiceCard
                    key={provider.name}
                    hours={provider.hours}
                    logo={provider.logo}
                    title={`${provider.name}`}
                    services={provider.services}
                    showDetails={showDetails}
                />
            ))}
        </div>
    );
}
