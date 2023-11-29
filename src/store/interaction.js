import {
  getStateData,
  getTripData,
  createTrip,
  createBooking,
  getUserData,
} from "../api/api";

export const fetchStateData = () => {
  return async (dispatch) => {
    try {
      const stateData = await getStateData();
      dispatch({ type: "SET_STATE_DATA", payload: stateData });
    } catch (error) {
      dispatch({ type: "SET_STATE_ERROR_DATA", payload: error });
      console.error("Error fetching state data:", error);
    }
  };
};

export const fetchTripData = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const date = state.homeSearchReducer.date;
      const from = state.homeSearchReducer.from;
      const to = state.homeSearchReducer.to;
      const startTime = state.tripReducer.startTime;
      const EndTime = state.tripReducer.endTime;
      const busOwnerID = state.tripReducer.ownerId;
      const rating = state.tripReducer.busRating;
      const busName = state.tripReducer.busName;

      // console.log(from, to, startTime, EndTime, busOwnerID, rating);
      const tripsData = await getTripData(
        date,
        from,
        to,
        startTime,
        EndTime,
        busOwnerID,
        rating,
        busName
      );
      dispatch({ type: "SET_TRIPS_DATA", payload: tripsData });
    } catch (error) {
      dispatch({ type: "SET_TRIPS_ERROR_DATA", payload: error });
      console.error("Error fetching trip data:", error);
    }
  };
};

export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      const userData = await getUserData();
      dispatch({ type: "SET_USER_DATA", payload: userData });
    } catch (error) {
      // dispatch({ type: "SET_STATE_ERROR_DATA", payload: error });
      console.error("Error fetching user data:", error);
    }
  };
};

export const createTripData = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const date = state.homeSearchReducer.date;
      const from = state.homeSearchReducer.from;
      const to = state.homeSearchReducer.to;
      const startTime = state.tripReducer.startTime;
      const EndTime = state.tripReducer.endTime;
      const timeDiff = state.tripReducer.timeDiff;
      const category = state.tripReducer.category;
      const busOwnerID = state.tripReducer.ownerId;
      const bus_no = state.tripReducer.busNo;
      const busRating = state.tripReducer.busRating;
      const busName = state.tripReducer.busName;
      const amenities_list = state.tripReducer.amenities_list;
      const seatBooked = state.tripReducer.seatBooked;
      const busFare = state.tripReducer.busFare;

      const isDataEntered = date && from && to;

      await createTrip(
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
      );

      // console.log(createTripData);
      if (isDataEntered) {
        dispatch({
          type: "SET_TRIPS_DATA",
          payload: [
            {
              date: date,
              from: from,
              to: to,
              busOwnerID: busOwnerID,
              startTime: startTime,
              EndTime: EndTime,
              timeDiff: timeDiff,
              category: category,
              bus_no: bus_no,
              busRating: busRating,
              animeties_list: amenities_list,
              seatBooked: seatBooked,
              busFare: busFare,
              busName: busName,
            },
          ],
        });
      }
    } catch (error) {
      console.error("Error creating trip data:", error);
    }
  };
};

export const createBookingData = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const name = state.userReducer.name;
      const emailID = state.userReducer.emailID;
      const gender = state.userReducer.gender;
      const age = state.userReducer.age;
      const mobileNo = state.userReducer.mobileNo;
      const seatBooked = state.userReducer.seatBooked;
      const ticketID = state.userReducer.ticketID;
      const passengerID = state.userReducer.passengerID;

      await createBooking(
        name,
        emailID,
        gender,
        age,
        mobileNo,
        seatBooked,
        ticketID,
        passengerID
      );

      // dispatch()
    } catch (error) {
      console.error("Error creating booking data:", error);
    }
  };
};
