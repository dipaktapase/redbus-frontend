const DEFAULT_COIN_STATE = {
  from: "",
  to: "",
  date: "",
};

export const homeSearchReducer = (state = DEFAULT_COIN_STATE, action) => {
  switch (action.type) {
    case "SET_FROM":
      return {
        ...state,
        from: action.payload,
      };
    case "SET_TO":
      return {
        ...state,
        to: action.payload,
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export const stateDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_STATE_DATA":
      return {
        ...state,
        stateData: action.payload,
      };

    case "SET_STATE_ERROR_DATA":
      return {
        ...state,
        errorData: action.payload,
      };
    default:
      return state;
  }
};

const DEFAULT_TRIPS_STATE = {
  tripsData: [],
  checkoutTrip: [],
  errorData: null,
  startTime: "",
  endTime: "",
  timeDiff: "",
  category: "A/C Sleeper (2+1)",
  ownerId: "",
  busRating: "",
  busName: "",
  busNo: "",
  seatBooked: [],
  amenities_list: [],
  busFare: "",
};

export const tripReducer = (state = DEFAULT_TRIPS_STATE, action) => {
  switch (action.type) {
    case "SET_TRIPS_DATA":
      return {
        ...state,
        tripsData: action.payload,
      };
    case "SET_CHECKOUT_TRIP":
      return {
        ...state,
        checkoutTrip: action.payload,
      };
    case "SET_TRIPS_ERROR_DATA":
      return {
        ...state,
        errorData: action.payload,
      };
    case "SET_START_TIME":
      return {
        ...state,
        startTime: action.payload,
      };
    case "SET_TIME_DIFF":
      return {
        ...state,
        timeDiff: action.payload,
      };
    case "SET_END_TIME":
      return {
        ...state,
        endTime: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "SET_OWNERID":
      return {
        ...state,
        ownerId: action.payload,
      };
    case "SET_BUS_RATINGS":
      return {
        ...state,
        busRating: action.payload,
      };
    case "SET_BUS_BUSNAME":
      return {
        ...state,
        busName: action.payload,
      };
    case "SET_AMENITIES_LIST":
      return {
        ...state,
        amenities_list: action.payload,
      };
    case "SET_SEAT":
      return {
        ...state,
        seatBooked: action.payload,
      };
    case "SET_BUS_BUSNO":
      return {
        ...state,
        busNo: action.payload,
      };
    case "SET_BUS_BUSFARE":
      return {
        ...state,
        busFare: action.payload,
      };
    default:
      return state;
  }
};

const DEFAULT_USER_STATE = {
  userData: [],
  name: "",
  emailID: "",
  gender: "",
  age: "",
  mobileNo: "",
  seatBooked: [],
  ticketID: "",
  passengerID: "",
};

export const userReducer = (state = DEFAULT_USER_STATE, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_EMAIL_ID":
      return {
        ...state,
        emailID: action.payload,
      };
    case "SET_GENDER":
      return {
        ...state,
        gender: action.payload,
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "SET_MOBILE_NO":
      return {
        ...state,
        mobileNo: action.payload,
      };
    case "SET_SEAT":
      return {
        ...state,
        seatBooked: action.payload,
      };
    case "SET_TICKET_ID":
      return {
        ...state,
        ticketID: action.payload,
      };
    case "SET_PASSENGER_ID":
      return {
        ...state,
        passengerID: action.payload,
      };
    default:
      return state;
  }
};
