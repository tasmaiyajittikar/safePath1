import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import LanguageModal from "./LanguageModal";
import logo from "../assets/logo.png";
import lanLogo from "../assets/language-icon.png";
import { useNavigate } from "react-router-dom";
import filterFlightByNumber from "../utilities/sampleData";

function LandingPage() {
    const [language, setLanguage] = useState(null);
    const [flightNumber, setFlightNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [flightDetails, setFlightDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal off by default
    const navigate = useNavigate();

    // Load Google Translate script and apply stored language on mount
    useEffect(() => {
        // Check localStorage for saved language
        const savedLanguage = localStorage.getItem("selectedLanguage");
        if (savedLanguage) {
            setLanguage(savedLanguage);
            applyGoogleTranslate(savedLanguage);
        } else {
            setIsModalOpen(true); // Show modal only on first load if no language is saved
        }

        // Load Google Translate script
        const addGoogleTranslateScript = () => {
            const script = document.createElement("script");
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en", // Default language
                        includedLanguages: "en,es,hi", // English, Spanish, Hindi
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            };
        };

        if (!window.googleTranslateElementInit) {
            addGoogleTranslateScript();
        }
    }, []);

    // Apply Google Translate based on language code
    const applyGoogleTranslate = (langCode) => {
        if (window.google && window.google.translate) {
            document.cookie = `googtrans=/en/${langCode};path=/`;
            window.location.reload(); // Reload to apply translation
        }
    };

    const handleLanguageSelect = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage); // Store in localStorage
        applyGoogleTranslate(selectedLanguage);
        setLoading(false); // Ensure loading stops after language selection
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setLoading(false); // Stop loading when modal closes
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const details = filterFlightByNumber(flightNumber);
            setFlightDetails(details);

            if (details.length > 0) {
                console.log("Landing", details[0]);
                navigate("/map", { state: { flightDetails: details[0] } });
            } else {
                alert("No flight details found.");
            }
        } catch (error) {
            console.error("Error fetching flight details:", error);
            alert("An error occurred while fetching flight details.");
        } finally {
            setLoading(false); // Ensure loading stops regardless of success or failure
        }
    };

    const handleSettingsClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="landing-page">
            {isModalOpen && (
                <LanguageModal
                    onSelectLanguage={handleLanguageSelect}
                    onClose={handleCloseModal}
                />
            )}

            {/* Hidden div for Google Translate */}
            <div id="google_translate_element" style={{ display: "none" }}></div>

            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button className="settings-btn" onClick={handleSettingsClick}>
                    <img src={lanLogo} alt="language" />
                </button>
            </div>

            <div className="form-container">
                <h1>Welcome to the Airport Assistance System</h1>
                <input
                    type="text"
                    placeholder="Enter Flight Number"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                />
                <button onClick={handleSubmit} disabled={loading}>
                    {loading ? "Loading..." : "Guide Me"}
                </button>
                {loading && <div className="loading-text">Fetching flight details...</div>}
            </div>

            <div className="footer">
                <p>© 2025 Airport Assistance System</p>
            </div>
        </div>
    );
}

export default LandingPage;