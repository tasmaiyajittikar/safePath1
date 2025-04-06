import React, { useState, useEffect, useRef } from "react";
import "./AirportChatbot.css"; // Import the CSS file

function AirportChatbot({ flightDetails }) { // Accept flightDetails as a prop
    const [messages, setMessages] = useState([]);
    const [flightInfo, setFlightInfo] = useState(null);
    const [stepIndex, setStepIndex] = useState(-1);
    const [showOptions, setShowOptions] = useState(false);
    const chatboxRef = useRef(null);

    const steps = [
        (flight) => `Follow the signs to Terminal ${flight.terminal}.`,
        (flight) => `Go to the ${flight.checkInCounterName} to check in.`,
        (flight) => `Drop your baggage at the ${flight.baggageDropName}.`,
        () => `Proceed to the security checkpoint. Please note: Any fluids, flammable items, or sharp objects may be confiscated.`,
        (flight) => `Once through security, follow the signs to Gate ${flight.gateNumber}.`,
        () => `Wait at the gate and listen for boarding announcements. Safe travels!`,
    ];

    useEffect(() => {
        // Scroll to the bottom of the chatbox whenever messages are added
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        // Initialize messages with flight details when component mounts
        if (flightDetails) {
            setFlightInfo(flightDetails);
            setMessages([
                { type: "bot", text: `Your flight is ${flightDetails.flightNumber}.` },
                { type: "bot", text: "Would you like step-by-step instructions?" },
            ]);
            setShowOptions(true); // Show Yes/No options initially
        } else {
            setMessages([
                { type: "bot", text: "No flight details available. Please enter your flight number to get started." },
            ]);
        }
    }, [flightDetails]);

    const handleFlightNumberInput = (input) => {
        if (!flightDetails) {
            setMessages((prev) => [
                ...prev,
                { type: "bot", text: "No flight data available. Please provide a valid flight number from the map page." },
            ]);
            return;
        }

        const trimmedInput = input.trim().toLowerCase();

        // Check if input is an affirmation
        const affirmations = ["yes", "y", "sure", "ok", "yeah"];
        if (affirmations.includes(trimmedInput) && flightInfo) {
            setMessages((prev) => [
                ...prev,
                { type: "user", text: input },
                { type: "bot", text: "Great! Let’s get started. Click 'Next' to see the first step or 'Help' if you need assistance." },
                { type: "bot", text: steps[0](flightInfo) },
            ]);
            setStepIndex(0); // Start from the first step
            setShowOptions(false); // Hide Yes/No options
            return;
        }

        // Check if input matches the flight number
        const flight = trimmedInput === flightDetails.flightNumber.toLowerCase() ? flightDetails : null;
        if (flight) {
            setFlightInfo(flight);
            setMessages((prev) => [
                ...prev,
                { type: "user", text: input },
                { type: "bot", text: `Your flight is ${flight.flightNumber}.` },
                { type: "bot", text: "Would you like step-by-step instructions?" },
            ]);
            setShowOptions(true); // Show Yes/No options
            setStepIndex(-1); // Reset steps if new flight number is entered
        } else {
            setMessages((prev) => [
                ...prev,
                { type: "user", text: input },
                { type: "bot", text: "Sorry, I couldn't find information for this flight. Please check the flight number and try again." },
            ]);
        }
    };

    const handleStepByStepResponse = (response) => {
        if (response === "yes") {
            setMessages((prev) => [
                ...prev,
                { type: "bot", text: "Great! Let’s get started. Click 'Next' to see the first step or 'Help' if you need assistance." },
                { type: "bot", text: steps[0](flightInfo) },
            ]);
            setStepIndex(0); // Start from the first step
        } else if (response === "no") {
            setMessages((prev) => [
                ...prev,
                { type: "bot", text: "Alright! Let me know if you need anything else." },
            ]);
        }
        setShowOptions(false); // Hide Yes/No options
    };

    const handleStepNavigation = (action) => {
        if (action === "next") {
            const nextStepIndex = stepIndex + 1;
            if (nextStepIndex < steps.length) {
                setStepIndex(nextStepIndex);
                setMessages((prev) => [
                    ...prev,
                    { type: "bot", text: steps[nextStepIndex](flightInfo) },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { type: "bot", text: "You’ve reached the end of the instructions. Safe travels!" },
                ]);
                setStepIndex(-1); // Reset step index
            }
        } else if (action === "help") {
            setMessages((prev) => [
                ...prev,
                {
                    type: "bot",
                    text: "If you need help, please see a nearby security guard or airline associate for assistance.",
                },
            ]);
        }
    };

    const renderOptions = () => {
        if (showOptions) {
            return (
                <div className="options-container">
                    <button
                        onClick={() => handleStepByStepResponse("yes")}
                        className="option-button yes-button"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => handleStepByStepResponse("no")}
                        className="option-button no-button"
                    >
                        No
                    </button>
                </div>
            );
        }

        if (stepIndex >= 0) {
            return (
                <div className="options-container">
                    <button
                        onClick={() => handleStepNavigation("next")}
                        className="option-button next-button"
                    >
                        Next
                    </button>
                    <button
                        onClick={() => handleStepNavigation("help")}
                        className="option-button help-button"
                    >
                        Help
                    </button>
                </div>
            );
        }

        return null;
    };

    const handleUserInput = (e) => {
        e.preventDefault();
        const input = e.target.flightNumber.value.trim();
        if (input) {
            handleFlightNumberInput(input);
        }
        e.target.reset();
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-window">
                <div ref={chatboxRef} className="chatbox">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.type === "bot" ? "bot-message" : "user-message"}`}
                        >
                            <span className="message-text">{msg.text}</span>
                        </div>
                    ))}
                    {renderOptions()}
                </div>
                <form onSubmit={handleUserInput} className="input-form">
                    <input
                        type="text"
                        name="flightNumber"
                        className="input-field"
                        placeholder="Enter a different flight number or 'yes' for steps..."
                    />
                    <button type="submit" className="send-button">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AirportChatbot;