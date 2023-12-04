import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripData } from "../../store/interaction";
import { useHistory } from "react-router-dom";
import star from "../../assets/star.png";
import SeatSelectTest from "./SeatSelection";

const Buspage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [seatsOpen, setSeatsOpen] = useState(false);
  const [openTripIndex, setOpenTripIndex] = useState(null);
  const tripsData = useSelector((state) => state.tripReducer.tripsData);
  const seatBooked = useSelector((state) => state.tripReducer.seatBooked);

  if (seatBooked.length > 1) {
  }

  useEffect(() => {
    dispatch(fetchTripData());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedTrips = tripsData?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(tripsData?.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getDate = (date) => {
    const tripDate = new Date(date * 1000);
    const hours = tripDate.getHours().toString().padStart(2, "0");
    const minutes = tripDate.getMinutes().toString().padStart(2, "0");
    const day = tripDate.getDate().toString().padStart(2, "0");
    const month = tripDate.toLocaleDateString("en-US", { month: "short" });
    return `${hours}:${minutes}, ${day} ${month}`;
  };

  const handleViewSeat = (trip) => {
    dispatch({
      type: "SET_CHECKOUT_TRIP",
      payload: trip,
    });

    history.push("/payment");
  };

  if (!tripsData) {
    return <p>Loading...</p>;
  }

  const handleViewSeatClick = (index) => {
    // Toggle the section visibility
    setOpenTripIndex((prevIndex) => (prevIndex === index ? null : index));
    setSeatsOpen(!seatsOpen);
  };

  return (
    <div className="flex md:px-12">
      <div className="hidden sm:block md:w-1/5 p-2 md:p-4 ">
        <Filter />
      </div>

      <div className="md:w-4/5 p-4 ">
        {displayedTrips?.map((trip, index) => (
          <div className="mb-4 rounded-md group relative" key={index}>
            <div className="md:flex w-full justify-between border-solid border border-red-300 rounded-md mb-4">
              <div className="px-4 md:px-[4rem] w-full">
                <div className="flex gap-1">
                  <h3 className="pr-4">{trip.busName}</h3>

                  <div className="flex gap-1">
                    <img
                      src={star}
                      className="w-4 h-4 mt-5 pl-2 z-10"
                      alt="star"
                    />
                    <div className="absolute mt-4  rounded-md bg-red-500 px-5 p-2 h-2" />
                    <p className="mt-5 z-10 text-white">{trip.busRating}</p>
                    <p className="text-gray-100 pl-4 mt-5">Ratings</p>
                  </div>
                </div>
                <div className="md:flex font-bold text-lg ">
                  <div className="md:w-1/3">
                    <p>{getDate(trip.startTime)}</p>
                    <p className="text-2xl">{trip.from}</p>
                  </div>

                  <div className="text-gray-200 md:w-1/3">
                    <p>{trip.timeDiff} Hours to Reach</p>
                  </div>

                  <div className="md:w-1/3">
                    <p className="">{getDate(trip.EndTime)}</p>
                    <p className="text-2xl">{trip.to}</p>
                  </div>
                </div>

                <lable className="md:opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                  Amenities List :-{" "}
                  <span>
                    {/* {tripamenities_list} */}
                    {Array.isArray(trip.amenities_list)
                      ? trip.amenities_list.join(", ")
                      : trip.amenities_list}
                  </span>
                </lable>
              </div>

              <div className="bg-red-500 p-0.5 mr-8 w-full md:w-0" />
              <div className=" md:mr-8 md:w-[10rem] mx-auto items-center pl-4 md:pl-0">
                <div className="flex md:block mx-auto gap-4">
                  <h3>Trip Price</h3>
                  <p className="text-gray-200 p-1">Starting from</p>
                  <h2 className="md:ml-6">₹ {trip.busFare}</h2>
                </div>
                <button
                  onClick={() => handleViewSeatClick(index)}
                  className="mt-4 md:mt-0 text-white px-5 py-2 bg-red-700 hover:bg-red-800 focus:outline-none text-sm text-center border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700 mb-4 cursor-pointer"
                >
                  {seatsOpen ? "Hide Seats" : "View Seats"}
                </button>
              </div>
            </div>
            {/* View Seat / Hide Seat dropdown for selecting seats */}
            {openTripIndex === index && (
              <div className="rounded-md bg-whitesmoke-200 p-4 mt-0">
                <SeatSelectTest />
                <p className="mb-0">
                  👆 Confirm seats before proceed to payment.
                </p>
                <button
                  disabled={seatBooked.length === 0}
                  onClick={() => handleViewSeat(trip)}
                  className="text-white px-5 py-2 mt-4 bg-red-700 hover:bg-red-800 focus:outline-none text-sm text-center border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700 mb-4 cursor-pointer"
                >
                  Proceed to Payment
                </button>
              </div>
            )}
          </div>
        ))}

        {/* For handle Pagination */}
        <div>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            className="text-white px-2 py-1 bg-red-700 hover:bg-red-800 focus:outline-none text-sm text-center border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700 mb-4 mr-2 cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="text-white px-2 py-1 bg-red-700 hover:bg-red-800 focus:outline-none text-sm text-center border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700 mb-4 cursor-pointer"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buspage;
