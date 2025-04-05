import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';  // To call OpenCage API

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Custom component to move map to user's position
const MyLocationMarker = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.setView(position, 18); // Center map on user
        }
    }, [position, map]);

    return position ? (
        <Marker position={position}>
            <Popup>You are here 📍</Popup>
        </Marker>
    ) : null;
};

const MapPage = () => {
    const [userPosition, setUserPosition] = useState(null);
    const [locations, setLocations] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    // API Key for OpenCage Geolocation
    const apiKey = 'YOUR_API_KEY_HERE';

    // Example flight data
    const flightData = [
        {
            terminal: "Terminal A",
            checkIn: "Baggage Drop",
            security: "Security Check",
            gate: "Gate 12",
        },
    ];

    // Function to get geolocation from OpenCage API
    const getCoordinates = async (placeName) => {
        try {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=${apiKey}`
            );
            const { lat, lng } = response.data.results[0].geometry;
            return [lat, lng];
        } catch (error) {
            console.error('Error fetching coordinates:', error);
            return null;
        }
    };

    // Fetch coordinates for all locations
    useEffect(() => {
        const fetchLocations = async () => {
            const steps = await Promise.all(flightData.map(async (step) => {
                const terminalCoord = await getCoordinates(step.terminal);
                const checkInCoord = await getCoordinates(step.checkIn);
                const securityCoord = await getCoordinates(step.security);
                const gateCoord = await getCoordinates(step.gate);
                return {
                    terminalCoord,
                    checkInCoord,
                    securityCoord,
                    gateCoord
                };
            }));
            setLocations(steps[0]); // Set the first flight's locations
        };

        fetchLocations();
    }, []);

    const path = [
        locations.terminalCoord,
        locations.checkInCoord,
        locations.securityCoord,
        locations.gateCoord,
    ];

    const steps = [
        'Head to the Terminal',
        'Go to the Check-in Area',
        'Proceed to Security Check',
        'Head to Gate 12',
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            {/* Sidebar for Navigation Steps */}
            <div style={{ width: '25%', backgroundColor: '#f0f0f0', padding: '20px' }}>
                <h2>Next Steps</h2>
                <p>{steps[currentStep]}</p>
                <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next Step</button>
            </div>

            {/* Map */}
            <div style={{ width: '75%' }}>
                <MapContainer center={[32.8998, -97.0403]} zoom={18} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Draw route */}
                    <Polyline positions={path} color="blue" />

                    {/* Markers */}
                    {locations.terminalCoord && (
                        <Marker position={locations.terminalCoord}>
                            <Popup>Terminal A</Popup>
                        </Marker>
                    )}
                    {locations.checkInCoord && (
                        <Marker position={locations.checkInCoord}>
                            <Popup>Baggage Drop</Popup>
                        </Marker>
                    )}
                    {locations.securityCoord && (
                        <Marker position={locations.securityCoord}>
                            <Popup>Security Check</Popup>
                        </Marker>
                    )}
                    {locations.gateCoord && (
                        <Marker position={locations.gateCoord}>
                            <Popup>Gate 12</Popup>
                        </Marker>
                    )}

                    {/* User live location */}
                    <MyLocationMarker position={userPosition} />
                </MapContainer>
            </div>
        </div>
    );
};

export default MapPage;
