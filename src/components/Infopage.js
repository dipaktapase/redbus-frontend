import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import star from "../assets/star.png";

import { fetchTripData, createBookingData } from "../store/interaction";

const Infopage = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const seatBooked = useSelector((state) => state.tripReducer.seatBooked);

  const [name, setName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding state based on the input
    switch (name) {
      case "name":
        setName(value);
        break;
      case "emailID":
        setEmailID(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "age":
        setAge(value);
        break;
      case "mobileNo":
        setMobileNo(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(fetchTripData());
  }, [dispatch]);

  // const tripsData = useSelector((state) => state.tripReducer.tripsData);
  const checkoutTrip = useSelector((state) => state.tripReducer.checkoutTrip);

  // Create random data for ID
  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  const generateRandomPassengerID = () => {
    const prefix = generateRandomString(4);
    const separator = "-";
    const suffix = generateRandomString(4);
    return `${prefix}${separator}${suffix}`;
  };

  const generateRandomTicketID = () => {
    return generateRandomString(7);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name && emailID && gender && age && mobileNo) {
      dispatch({ type: "SET_NAME", payload: name });
      dispatch({ type: "SET_EMAIL_ID", payload: emailID });
      dispatch({ type: "SET_GENDER", payload: gender });
      dispatch({ type: "SET_AGE", payload: age });
      dispatch({ type: "SET_MOBILE_NO", payload: mobileNo });
      dispatch({
        type: "SET_CHECKOUT_TRIP",
        payload: checkoutTrip,
      });
      dispatch({ type: "SET_SEAT", payload: seatBooked });
      dispatch({ type: "SET_TICKET_ID", payload: generateRandomTicketID() });
      dispatch({
        type: "SET_PASSENGER_ID",
        payload: generateRandomPassengerID(),
      });
      dispatch(createBookingData());
    }

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    history.push("/receipt");

    setIsProcessing(false);
  };

  const getDate = (date) => {
    const tripDate = new Date(date * 1000);

    const hours = tripDate.getHours().toString().padStart(2, "0");
    const minutes = tripDate.getMinutes().toString().padStart(2, "0");
    const day = tripDate.getDate().toString().padStart(2, "0");
    const month = tripDate.toLocaleDateString("en-US", { month: "short" });

    return `${hours}:${minutes}, ${day} ${month}`;
  };

  return (
    <form className="mt-28 md:flex px-12 text-lg" onSubmit={submitHandler}>
      {/* User Details and trip confirmation */}
      <div className="md:w-4/5 p-4 w-full">
        <div className="md:flex mb-2 w-full justify-between border-solid border border-red-300 rounded-md mb-4">
          <div className="px-4 md:px-[4rem] w-full">
            <div className="flex gap-1">
              <h3 className="pr-4">{checkoutTrip.busName}</h3>

              <div className="flex gap-1">
                <img src={star} className="w-4 h-4 mt-5 pl-2 z-10" alt="star" />
                <div className="absolute mt-4  rounded-md bg-red-500 px-5 p-2 h-2" />
                <p className="mt-5 z-10 text-white">{checkoutTrip.busRating}</p>
                <p className="text-gray-100 pl-4 mt-5">Ratings</p>
              </div>
            </div>
            <div className="md:flex font-bold text-lg ">
              <div className="md:w-1/3">
                <p>{getDate(checkoutTrip.startTime)}</p>
                <p className="text-2xl">{checkoutTrip.from}</p>
              </div>

              <div className="text-gray-200 md:w-1/3">
                <p>{checkoutTrip.timeDiff} Hours to Reach</p>
              </div>

              <div className="md:w-1/3">
                <p className="">{getDate(checkoutTrip.EndTime)}</p>
                <p className="text-2xl">{checkoutTrip.to}</p>
              </div>
            </div>
          </div>

          <div className="bg-red-500 p-0.5 mr-8 w-full md:w-0 " />
          <div className=" md:mr-8 md:w-[10rem] mx-auto items-center pl-1 md:pl-0">
            <div className="flex md:block mx-auto gap-1">
              <h3>Trip Price</h3>
              <p className="text-gray-200 p-1">Starting from</p>
              <h2 className="md:ml-6">₹ {checkoutTrip.busFare}</h2>
            </div>
          </div>
        </div>

        {/* Passenger Details */}
        <div
          className="mb-2 w-full  shadow-lg mt-4 border-solid border border-red-300 rounded-md md:h-[28rem]"
          onSubmit={submitHandler}
        >
          <h2 className="pl-2 md:pl-4 pt-8">Enter Traveller Details</h2>
          {/* Your div fields with controlled components */}
          <div className="md:flex font-bold pl-2 md:pl-4 p-2">
            <div className="p-2 md:w-2/4 mr-2">
              <p className="">Name</p>
              <input
                type="text"
                className="w-full border-solid border border-red-300 py-2 mr-4"
                name="name"
                required
                value={name}
                onChange={handleChange}
              />
            </div>

            <div className="p-2 md:w-1/4 mr-2">
              <p className="">Gender</p>
              <select
                type="text"
                className="border-solid border border-red-300 py-2 mr-4"
                required
                name="gender"
                value={gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Prefer not to say</option>
              </select>
            </div>

            <div className="p-2 md:w-1/4 mr-2">
              <p className="">Age (In yrs)</p>
              <input
                type="number"
                className="border-solid border border-red-300 py-2 mr-4"
                required
                name="age"
                value={age}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex font-bold pl-2 md:pl-4 pb-4 p-2">
            <div className="p-2 md:w-2/3 mr-5">
              <p className="">Email ID</p>
              <input
                type="text"
                className="w-full border-solid border border-red-300 py-2"
                name="emailID"
                required
                value={emailID}
                onChange={handleChange}
              />
            </div>

            <div className="p-2 md:w-1/3 mr-5">
              <p className="">Mobile No.</p>
              <input
                type="text"
                className="w-full border-solid border border-red-300 py-2 mr-4"
                name="mobileNo"
                required
                value={mobileNo}
                onChange={handleChange}
              />
            </div>
          </div>
          <h2 className="pl-[1.5rem]">Seat Booked: {seatBooked.join(", ")}</h2>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="w-full md:w-1/4 p-4 m-2 border-solid border border-red-300 rounded-md text-lg">
        <h2>Fare Details</h2>
        <div className="mt-12 ">
          <p className="flex text-xl justify-between">
            Bus Fare <span>₹ {checkoutTrip.busFare - 150}</span>
          </p>
          <p className="flex justify-between">
            Tax<span>₹ 100</span>
          </p>
          <p className="flex justify-between">
            Offer Applied<span>₹ 50</span>
          </p>

          <div className="bg-red-500 p-0.5 " />

          <p className="flex justify-between pt-4 font-bold pb-2">
            Total Price<span>₹ {checkoutTrip.busFare}</span>
          </p>
        </div>
        <PaymentElement required />
        <div className="flex justify-center mt-8 ">
          <button
            disabled={isProcessing}
            id="submit"
            type="submit"
            className="text-white px-9 py-3 bg-red-700 hover:bg-red-800 font-bold focus:outline-none text-center md:ml-4 border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700"
          >
            <span id="button-text">
              {isProcessing ? "Processing ..." : "Pay now"}
            </span>
            {/* Proceed To Payment */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Infopage;
