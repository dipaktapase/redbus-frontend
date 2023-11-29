import axios from "axios";

// Get state data from the mongoDB 
export const getStateData = async () => {
  try {
    const response = await axios.get("https://redbus-backend-zmne.onrender.com/api/states");
    return response.data;
  } catch (error) {
    console.error("Failed to get trip data from the database:", error);
    throw new Error("Filed to get city data from database.");
  }
};

// Get Trip data from the mongoDB
export const getTripData = async (
  date,
  from,
  to,
  // startTime,
  // EndTime,
  busOwnerID,
  rating,
  busName
) => {
  try {
    const response = await axios.get(
      `https://redbus-backend-zmne.onrender.com/api/trips?date=${date}&from=${from}&to=${to}&startTime=&EndTime=&busOwnerID=${busOwnerID}&rating=${rating}&busName=${busName}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch trip data.", error);
  }
};

// Create a new trip data 
export const createTrip = async (
  date,
  from,
  to,
  busOwnerID,
  startTime,
  EndTime,
  timeDiff,
  category,
  bus_no,
  busRating,
  busName,
  amenities_list,
  seatBooked,
  busFare
) => {
  try {
    const response = await axios.post("https://redbus-backend-zmne.onrender.com/api/trips", {
      date,
      from,
      to,
      busOwnerID,
      startTime,
      EndTime,
      timeDiff,
      category,
      bus_no,
      busRating,
      busName,
      amenities_list,
      seatBooked,
      busFare,
    });

    return response.data;
  } catch (error) {
    throw new Error("Filed to create trip data.");
  }
};

// Create a new Booking
export const createBooking = async (
  name,
  emailID,
  gender,
  age,
  mobileNo,
  seatBooked,
  ticketID,
  passengerID
) => {
  try {
    const response = await axios.post("https://redbus-backend-zmne.onrender.com/api/bookings", {
      name,
      emailID,
      gender,
      age,
      mobileNo,
      seatBooked,
      ticketID,
      passengerID,
    });
    return response.data;
  } catch (error) {
    throw new Error("Filed to create booking for trip", error);
  }
};

// Fetch user
export const getUserData = async () => {
  try {
    const response = await axios.get("https://redbus-backend-zmne.onrender.com/api/bookings");
    return response.data;
  } catch (error) {
    console.error("Failed to get user data from the database:", error);
    throw new Error("Filed to get user data from database.");
  }
};
