import React from "react";
import check from "../assets/check.png";
import { useSelector } from "react-redux";
import star from "../assets/star.png";

const Receiptpage = () => {
  const checkoutTrip = useSelector((state) => state.tripReducer.checkoutTrip);
  const name = useSelector((state) => state.userReducer.name);
  const gender = useSelector((state) => state.userReducer.gender);
  const age = useSelector((state) => state.userReducer.age);
  const mobileNo = useSelector((state) => state.userReducer.mobileNo);
  const ticketID = useSelector((state) => state.userReducer.ticketID);
  const passengerID = useSelector((state) => state.userReducer.passengerID);
  const seatBooked = useSelector((state) => state.userReducer.seatBooked);

  const getDate = (date) => {
    const tripDate = new Date(date * 1000);

    const hours = tripDate.getHours().toString().padStart(2, "0");
    const minutes = tripDate.getMinutes().toString().padStart(2, "0");
    const day = tripDate.getDate().toString().padStart(2, "0");
    const month = tripDate.toLocaleDateString("en-US", { month: "short" });

    return `${hours}:${minutes}, ${day} ${month}`;
  };

  // console.log(lastUserData);
  return (
    <div className="mt-4 text-center border-solid border border-red-300 container mx-auto p-4 rounded-md md:w-[62rem] mb-4">
      <img src={check} alt="confirm" className="h-16 w-16" />
      <h2 className="">Booking has been Confirmed</h2>
      <p className="text-2xl">
        Ticket ID: <span>{ticketID}</span>
      </p>
      <p className="text-2xl">
        Passenger Id: <span>{passengerID}</span>
      </p>
      <p className="text-2xl">
        Passenger Details:{" "}
        <span>
          {name}, {gender}, {age} yrs
        </span>
      </p>
      <p className="text-2xl">
        Contact Details: <span>{mobileNo}</span>
      </p>

      <div className="p-4">
        <div className="md:flex w-full justify-between border-solid border border-red-300 rounded-md mb-4">
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

            <div className="md:flex font-bold text-lg text-left ">
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

          <div className="bg-red-500 p-0.5 mr-8 w-full md:w-0" />
          <div className=" md:mr-8 md:w-[10rem] mx-auto items-center pl-4 md:pl-0">
            <div className="flex md:block mx-auto gap-4">
              <h3>Trip Price</h3>
              <p className="text-gray-200 p-1">Starting from</p>
              <h2 className="md:ml-6">₹ {checkoutTrip.busFare}</h2>
            </div>
          </div>
        </div>
      </div>
      <h2 className="">Seat Booked: {seatBooked.join(", ")}</h2>
      <h2>
        <a href="/" className="text-red-500">
          Book New Seat
        </a>
      </h2>
    </div>
  );
};

export default Receiptpage;
