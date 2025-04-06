import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapPage.css";
import AirportChatbot from "../components/AirportChatbot"; // Adjust the import path as needed

// Fix default Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const DEFAULT_POSITION = [32.89613104905737, -97.04336386895568]; // DFW Airport fallback

// Custom icon for highlighted marker
const highlightedIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Earth's radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return Math.round(distance); // Return distance in meters
};

// Component to handle map centering and zoom effect
const MapCenter = ({ center, showUserLocation, gatePosition }) => {
    const map = useMap();

    useEffect(() => {
        if (!center || !gatePosition) return;

        if (showUserLocation) {
            map.setView(center, 18); // Start at user location with high zoom
        } else {
            map.setView(center, 14, { animate: true }); // Zoom out to level 14
            setTimeout(() => {
                map.setView(gatePosition, 18, { animate: true }); // Zoom in to gate
            }, 1000); // Wait 1 second after zooming out
        }
    }, [map, center, showUserLocation, gatePosition]);

    return null;
};

const MapPage = () => {
    const { state } = useLocation();
    const [userPosition, setUserPosition] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showUserLocation, setShowUserLocation] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const [isChatOpen, setIsChatOpen] = useState(false); // State for chat visibility
    const flightDetails = state?.flightDetails;

    const isValidCoord = (coord) =>
        Array.isArray(coord) && coord.length === 2 && !isNaN(coord[0]) && !isNaN(coord[1]);

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log("Geolocation not supported");
            setLoading(false);
            setShowUserLocation(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserPosition([position.coords.latitude, position.coords.longitude]);
                setLoading(false);
                setTimeout(() => {
                    setShowUserLocation(false);
                }, 2000); // Show user location for 2 seconds
            },
            (error) => {
                console.error("Geolocation error:", error);
                setLoading(false);
                setShowUserLocation(false);
            }
        );
    }, []);

    if (!flightDetails) {
        return <div className="error-message">No flight details available</div>;
    }

    if (loading) {
        return <div className="loading">Loading map...</div>;
    }

    const {
        terminal,
        terminalCoordinates,
        checkInLocation,
        checkInCounterName,
        baggageDropName,
        securityLocation,
        gateLocation,
        gateNumber,
    } = flightDetails;

    const validTerminal = isValidCoord(terminalCoordinates)
        ? terminalCoordinates
        : DEFAULT_POSITION;
    const validCheckIn = isValidCoord(checkInLocation) ? checkInLocation : DEFAULT_POSITION;
    const validSecurity = isValidCoord(securityLocation)
        ? securityLocation
        : DEFAULT_POSITION;
    const validGate = isValidCoord(gateLocation) ? gateLocation : DEFAULT_POSITION;

    // Calculate distances between consecutive points
    const distanceToCheckIn = calculateDistance(
        validTerminal[0],
        validTerminal[1],
        validCheckIn[0],
        validCheckIn[1]
    );
    const distanceToSecurity = calculateDistance(
        validCheckIn[0],
        validCheckIn[1],
        validSecurity[0],
        validSecurity[1]
    );
    const distanceToGate = calculateDistance(
        validSecurity[0],
        validSecurity[1],
        validGate[0],
        validGate[1]
    );

    const steps = [
        {
            name: `Enter Terminal ${terminal} and check in at ${checkInCounterName}`,
            position: "terminalCoordinates",
            label: "Proceed to terminal entrance",
        },
        {
            name: `In ${distanceToCheckIn} meters Go to ${baggageDropName}`,
            position: "checkInLocation",
            label: "Drop off your baggage",
        },
        {
            name: `In ${distanceToSecurity} meters Proceed to TGS Security Check`,
            position: "securityLocation",
            label: "Pass through security",
        },
        {
            name: `In ${distanceToGate} meters Proceed to Gate ${gateNumber}`,
            position: "gateLocation",
            label: "Proceed to your gate",
        },
    ];

    const path = [validTerminal, validCheckIn, validSecurity, validGate];
    const centerPosition = showUserLocation && userPosition ? userPosition : validTerminal;

    const handleNextStep = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="map-page">
            {/* Left Panel */}
            <div className="left-panel">
                <h2>Navigation Steps</h2>
                <ul className="steps-list">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className={`step-item ${activeStep === index ? "active" : ""}`}
                            onClick={() => handleStepClick(index)}
                        >
                            <span className="step-number">{index + 1}</span>
                            <div>
                                <strong>{step.name}</strong>
                                <p>{step.label}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="step-buttons">
                    <button
                        onClick={handlePreviousStep}
                        disabled={activeStep === 0}
                        className="nav-button"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextStep}
                        disabled={activeStep === steps.length - 1}
                        className="nav-button"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Map Container */}
            <div className="map-container">
                {showUserLocation && userPosition && (
                    <div className="location-message">You are currently here</div>
                )}
                <MapContainer
                    center={centerPosition}
                    zoom={18}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Polyline positions={path} color="blue" weight={4} />

                    <Marker
                        position={validTerminal}
                        icon={activeStep === 0 ? highlightedIcon : L.Icon.Default.prototype}
                    >
                        <Popup>Terminal Entrance</Popup>
                    </Marker>
                    <Marker
                        position={validCheckIn}
                        icon={activeStep === 1 ? highlightedIcon : L.Icon.Default.prototype}
                    >
                        <Popup>Baggage Drop</Popup>
                    </Marker>
                    <Marker
                        position={validSecurity}
                        icon={activeStep === 2 ? highlightedIcon : L.Icon.Default.prototype}
                    >
                        <Popup>Security Check</Popup>
                    </Marker>
                    <Marker
                        position={validGate}
                        icon={activeStep === 3 ? highlightedIcon : L.Icon.Default.prototype}
                    >
                        <Popup>Gate</Popup>
                    </Marker>
                    {showUserLocation && userPosition && (
                        <Marker position={userPosition}>
                            <Popup>You are here 📍</Popup>
                        </Marker>
                    )}

                    <MapCenter
                        center={centerPosition}
                        showUserLocation={showUserLocation}
                        gatePosition={validGate}
                    />
                </MapContainer>

                {/* Chat Icon */}
                <button className="chat-icon" onClick={toggleChat}>
                    💬
                </button>

                {/* Chatbot Window */}
                {isChatOpen && (
                    <div className="chat-overlay">
                        <button className="close-chat" onClick={toggleChat}>✖</button>
                        <div className="chat-window">
                            <AirportChatbot flightDetails={flightDetails} /> {/* Pass flightDetails as prop */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MapPage;