import ShippingServiceCard from './ShippingServiceCard';
import {shippingServices} from "../data/shppingServiceInfo.js";

function ShippingPartners({ showDetails }) {
    return (
        <div className="grid md:grid-cols-4 gap-8">
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

export default ShippingPartners;