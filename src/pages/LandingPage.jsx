import React, { useState } from 'react';
import './LandingPage.css'; // Import the CSS file
import LanguageModal from './LanguageModal'; // Language modal for language selection
import logo from '../assets/logo.png';

function LandingPage() {
    const [language, setLanguage] = useState(null);
    const [flightNumber, setFlightNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleLanguageSelect = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal after selecting language
    };

    const handleSubmit = () => {
        setLoading(true);
        // Simulate API call for loading
        setTimeout(() => {
            setLoading(false);
            // Proceed with other actions like flight validation, etc.
        }, 2000);
    };

    const handleSettingsClick = () => {
        setIsModalOpen(true); // Open the language modal again
    };

    return (
        <div className="landing-page">
            {isModalOpen && (
                <LanguageModal
                    onSelectLanguage={handleLanguageSelect}
                    onClose={handleCloseModal}
                />
            )}

            <div className="header">
                <div className="logo"><img src={logo} /></div> {/* Replace with an actual logo */}
                <button className="settings-btn" onClick={handleSettingsClick}>
                    ⚙️ {/* Use an icon or text for settings */}
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
                    {loading ? 'Loading...' : 'Guide Me'}
                </button>

                {loading && <div className="loading-text">Fetching flight details...</div>}

                {/* Footer for copyright or other info */}

            </div>

            <div className="footer">
                <p>&copy; 2025 Airport Assistance System</p>
            </div>
        </div>
    );
}

export default LandingPage;
