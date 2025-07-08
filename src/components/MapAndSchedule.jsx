// MapAndSchedule.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';


function MapAndSchedule({isScrolled, isMobile}) {
    const [currentDay, setCurrentDay] = useState('');
    const [currentHours, setCurrentHours] = useState('');

    // San Tan Valley approximate coordinates
    const position = [33.16371703546661, -111.56295699377678]


    // Fix for marker icon in React
    useEffect(() => {
        // This fixes the missing marker icon issue
        delete Icon.Default.prototype._getIconUrl;
        Icon.Default.mergeOptions({
            iconRetinaUrl: '/node_modules/leaflet/dist/images/marker-icon-2x.png',
            iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
            shadowUrl: '/node_modules/leaflet/dist/images/marker-shadow.png',
        });
    }, []);



    const schedule = {
        Monday: '8:30AM - 5:30PM',
        Tuesday: '8:30AM - 5:30PM',
        Wednesday: '8:30AM - 5:30PM',
        Thursday: '8:30AM - 5:30PM',
        Friday: '8:30AM - 5:30PM',
        Saturday: '10:00AM - 4:00PM',
        Sunday: 'Closed'
    };

    useEffect(() => {
        const updateCurrentDay = () => {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date();
            const dayName = days[today.getDay()];
            setCurrentDay(dayName);
            setCurrentHours(schedule[dayName]);
        };

        updateCurrentDay();
        // Update every minute to ensure day changes at midnight
        const interval = setInterval(updateCurrentDay, 60000);
        return () => clearInterval(interval);
    }, []);

    if (isMobile) {
        return (
            <div className="text-right">
                <div className="text-sm font-medium text-theme-dark">Today's Hours</div>
                <div className="text-sm text-theme-gray">{currentHours}</div>
            </div>
        );
    }


    return (
        <div className="flex gap-4 h-16">
            {/* Weekly Schedule Table */}
            <div className="w-56">
                <table className="w-full text-sm">
                    <thead>
                    <tr className="bg-theme-sage">
                        <th className="py-1 text-left font-bold" colSpan="2">
                            Today ({currentDay})
                        </th>
                    </tr>
                    <tr className="bg-theme-sage">
                        <td className="py-1 text-left font-bold" colSpan="2">
                            {currentHours}
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {isScrolled && Object.entries(schedule).map(([day, hours]) => (
                        <tr key={day} className={day === currentDay ? 'bg-theme-sage' : ''}>
                            <td className="py-1 text-left">{day}</td>
                            <td className="py-1 text-left">{hours}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/*/!* Map or Address *!/*/}
            {/*{isScrolled ? (*/}
            {/*    <div className="map-wrapper">*/}
            {/*        <MapContainer*/}
            {/*            center={position}*/}
            {/*            zoom={14}*/}
            {/*            style={{*/}
            {/*                height: "200px",*/}
            {/*                width: "300px"*/}
            {/*            }}*/}
            {/*            zoomControl={false}*/}
            {/*        >*/}
            {/*            <TileLayer*/}
            {/*                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
            {/*            />*/}
            {/*            <Marker position={position}>*/}
            {/*                <Popup>*/}
            {/*                    Power Pack and Ship*/}
            {/*                </Popup>*/}
            {/*            </Marker>*/}
            {/*        </MapContainer>*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <div className="text-sm">*/}
            {/*        <p>270 E Hunt Hwy Ste 16</p>*/}
            {/*        <p>San Tan Valley, AZ 85143</p>*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className="text-sm">
                <p>270 E Hunt Hwy Ste 16</p>
                <p>San Tan Valley, AZ 85143</p>
            </div>
        </div>
    );

}

export default MapAndSchedule;