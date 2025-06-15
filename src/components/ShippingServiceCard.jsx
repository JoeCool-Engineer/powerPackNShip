function ShippingServiceCard({hours, logo, title, services = [], showDetails}) {
    return (<section className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg">
            <div className="mb-6">
                <img
                    src={logo}
                    alt={`${title} logo`}
                    className="h-20 md:h-24 w-auto mx-auto"
                />
                <h2 className="text-shadow-lg font-semibold text-theme-dark mb-4 text-center">
                    {!showDetails ? `${title} pick up times` : `${title} services`}
                </h2>
                {!showDetails && (<span className="text-center text-theme-gray text-sm">
                    {hours && hours.length > 0 && hours.map((hour) => (<h3 key={hour}>{hour}</h3>))}
                </span>

                )}

            </div>
        {showDetails && services.length > 0 && (
            <ul className="list-disc pl-6 space-y-2">
                {services.map((service) => (
                    <li
                        key={service.text}
                        className={service.bold ? 'font-bold text-theme-dark' : 'text-theme-gray'}
                    >
                        {service.text}
                    </li>
                ))}
            </ul>
        )}

    </section>);
}

export default ShippingServiceCard;