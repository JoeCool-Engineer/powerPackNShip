export const shippingServices = {
    fedex: {
        name: 'FedEx',
        logo: '/Fedex-Authorized-ShipCenter.png',
        services: [
            { text: 'FedEx Priority Overnight®', bold: false },
            { text: 'FedEx Express Saver®', bold: false },
            { text: 'FedEx Standard Overnight®', bold: false },
            { text: 'FedEx 2 Day®', bold: false },
            { text: 'FedEx Ground®', bold: false },
            { text: 'FedEx Ground-Home Delivery®', bold: false },
            { text: 'FedEx Priority International®', bold: false },
            { text: 'And more...', bold: false }
        ],
        hours: [
            'Mon-Fri 3PM',
            'Saturdays: 1PM',
            'Ground no ground Saturdays'
        ]
    },
    ups: {
        name: 'UPS',
        logo: '/UPS_accessPoint_logo.png',
        hours: [
            'Mon-Fri 3PM',
            'Saturdays: 1PM',
            'Both air and ground'
        ],
        services: [
            { text: 'UPS Next Day Air®', bold: false },
            { text: 'UPS 2-Day Air®', bold: false },
            { text: 'UPS 3-Day Select®', bold: false },
            { text: 'UPS Ground®', bold: false },
            { text: 'UPS Worldwide Express®', bold: false },
            { text: 'And more...', bold: false },
            { text: 'We do not accept Amazon QR codes for returns. This needs to be done at a UPS Store', bold: true}
        ]
    },
    usps: {
        name: 'USPS',
        logo: '/USPS.png',
        services: [
            { text: 'Stamps and First Class Mail®', bold: false },
            { text: 'Priority Mail®', bold: false },
            { text: 'Standard Post™', bold: false },
            { text: 'Signature Confirmation™', bold: false },
            { text: 'USPS Tracking', bold: false },
            { text: 'We do not offer Registered Mail services. Please see your local USPS location', bold: true }
        ],
        hours: [
            'Mon-Fri 12PM-2PM',
            'Saturdays: 3PM',
            'USPS varies and we cannot guarantee times'
        ]
    },
    dhl: {
        name: 'DHL',
        logo: '/DHL-Authorized-Shipping-Center.png',
        services: [
            { text: 'All DHL Services for worldwide shipping', bold: false }
        ],
        hours: [
            'Mon-Fri 2:30PM',
            'No weekend pickup dates'
        ]
    }
};