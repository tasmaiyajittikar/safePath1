import React, { useState } from 'react';
import './LanguageModal.css'; // Import the CSS file

const LanguageModal = ({ onClose, onSelectLanguage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSubmit = () => {
        onSelectLanguage(selectedLanguage); // Pass selected language to parent
        onClose(); // Close the modal after selecting the language
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Select Your Language</h2>
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="language-select"
                >
                    <option value="en">English</option>
                    <option value="es">Hindi</option>
                    <option value="fr">Spanish</option>
                    {/* Add more languages if needed */}
                </select>
                <button onClick={handleSubmit} className="submit-button">Submit</button>
            </div>
        </div>
    );
};

export default LanguageModal;
