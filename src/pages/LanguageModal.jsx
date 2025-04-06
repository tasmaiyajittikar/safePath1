
import React, { useState } from "react";
import "./LanguageModal.css";

const LanguageModal = ({ onClose, onSelectLanguage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to English

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSubmit = () => {
        onSelectLanguage(selectedLanguage); // Pass selected language to parent
        onClose(); // Close the modal
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
                    <option value="es">Spanish</option>
                    <option value="hi">Hindi</option>
                </select>
                <button onClick={handleSubmit} className="submit-button">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default LanguageModal;