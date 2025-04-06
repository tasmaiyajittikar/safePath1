// FlightList.js

import axios from 'axios';

export const fetchFlights = async (flightNumber) => {
  if (!flightNumber) {
    alert("Please enter a flight number.");
    return;
  }

  const API_KEY = '29e8c864a6e430dca3ebce8393508cef';

  try {
    const response = await axios.get(`http://api.aviationstack.com/v1/flights`, {
      params: {
        access_key: API_KEY,
        flight_iata: flightNumber,
        limit: 5,
      }
    });

    console.log(response)

    return response.data.data.map(flight => ({
      flight_number: flight.flight?.iata || "N/A",
      flight_name: flight.airline?.name || "N/A",
      terminal: flight.departure?.terminal || "N/A",
      gate: flight.departure?.gate || "N/A",
      departure_city: flight.departure?.airport || "N/A",
      arrival_city: flight.arrival?.airport || "N/A",
      scheduled_time: flight.departure?.scheduled || "N/A",
      baggage_claim: flight.arrival?.baggage || "Not Available",
      status: flight.flight_status || "Unknown"
    }));
  } catch (error) {
    console.error("Error fetching flights:", error.message);
    return [];
  }
};

