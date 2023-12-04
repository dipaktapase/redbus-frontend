import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import steering from "../../assets/steering.png";

const SeatBooking = () => {
  const dispatch = useDispatch();

  const post = [];

  const initialSeats = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
  ];
  const [seatAvailable, setSeatAvailable] = useState([...initialSeats]);
  const [seatReserved, setSeatReserved] = useState([]);
  const [seatSelected, setSeatSelected] = useState(post);

  const onClickData = (seat) => {
    if (seatReserved.includes(seat)) {
      setSeatAvailable((prevAvailable) => [...prevAvailable, seat]);
      setSeatReserved((prevReserved) =>
        prevReserved.filter((res) => res !== seat)
      );
    } else {
      setSeatReserved((prevReserved) => [...prevReserved, seat]);
      setSeatAvailable((prevAvailable) =>
        prevAvailable.filter((res) => res !== seat)
      );
    }
  };

  const checktrue = (row) => {
    return !seatSelected.includes(row);
  };

  const handleSubmited = (e) => {
    e.preventDefault();
    setSeatSelected((prevSelected) => [...prevSelected, ...seatReserved]);
    setSeatReserved([]);
  };

  useEffect(() => {
    dispatch({ type: "SET_SEAT", payload: seatSelected });
  }, [dispatch, seatSelected]);

  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">Book Seats</h1> */}
      <DrawGrid
        seat={initialSeats}
        available={seatAvailable}
        reserved={seatReserved}
        selected={seatSelected}
        onClickData={onClickData}
        checktrue={checktrue}
        handleSubmited={handleSubmited}
      />
    </div>
  );
};

const DrawGrid = ({
  seat,
  available,
  reserved,
  selected,
  onClickData,
  checktrue,
  handleSubmited,
}) => {
  return (
    <form className="flex">
      <img src={steering} alt="steering" className="h-8 w-8 p-2" />
      <div className="p-0.5 bg-gray-500 h-[7.5rem]" />
      <div>
        <div className="flex grid grid-cols-7 gap-2 p-2">
          {seat.map((row) => (
            <div
              key={row}
              className={`p-0.5 w-8 rounded text-center cursor-pointer ${
                selected.includes(row)
                  ? "bg-red-500 text-white"
                  : reserved.includes(row)
                  ? "bg-gray-400"
                  : "bg-green-500 text-white"
              }`}
              onClick={() => checktrue(row) && onClickData(row)}
            >
              {row}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-red-500 rounded-md w-[6rem] text-white cursor-pointer mt-2"
          onClick={handleSubmited}
        >
          Confirm Seats
        </button>
      </div>
    </form>
  );
};

export default SeatBooking;
