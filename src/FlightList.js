import React, { useState } from 'react';
import axios from 'axios';

const FlightList = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlights = async () => {
    if (!flightNumber) {
      alert("Please enter a flight number.");
      return;
    }

    setLoading(true);
    const API_KEY = '29e8c864a6e430dca3ebce8393508cef';

    try {
      const response = await axios.get(`http://api.aviationstack.com/v1/flights`, {
        params: {
          access_key: API_KEY,
          flight_iata: flightNumber,
          limit: 5,
        }
      });

      const simplifiedFlights = response.data.data.map(flight => ({
        flight_number: flight.flight?.iata || "N/A",
        flight_name: flight.airline?.name || "N/A",
        terminal: flight.departure?.terminal || "N/A",
        gate: flight.departure?.gate || "N/A",
        departure_city: flight.departure?.airport || "N/A",
        arrival_city: flight.arrival?.airport || "N/A",
        scheduled_time: flight.departure?.scheduled || "N/A",
        baggage_claim: flight.arrival?.baggage || "Not Available",
        status: flight.flight_status || "Unknown" // Include flight status
      }));

      setFlights(simplifiedFlights);
    } catch (error) {
      console.error("Error fetching flights:", error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Flight Details by Flight Number</h2>
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
        placeholder="e.g., AA123"
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={fetchFlights}>Search</button>

      {loading && <p>Loading...</p>}

      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            ✈️ <strong>{flight.flight_name}</strong> — Flight {flight.flight_number}<br />
            🛫 From: {flight.departure_city} → To: {flight.arrival_city}<br />
            🕓 Scheduled: {new Date(flight.scheduled_time).toLocaleString()}<br />
            📍 Terminal: {flight.terminal} | Gate: {flight.gate}<br />
            🧳 Baggage Claim: {flight.baggage_claim}
            📡 Status: {flight.status} {/* Display flight status */}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
