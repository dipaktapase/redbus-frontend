import React, { useEffect } from "react";
import Testimonials from "./Testimonials";
import Highlights from "./Highlights";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  fetchStateData,
  createTripData,
  // fetchTripData,
} from "../../store/interaction";
import { useHistory } from "react-router-dom";
import bgImg from "../../assets/bus-main.jpg"

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const from = useSelector((state) => state.homeSearchReducer.from);
  const to = useSelector((state) => state.homeSearchReducer.to);
  const date = useSelector((state) => state.homeSearchReducer.date);

  const statesData = useSelector((state) => state.stateDataReducer.stateData);

  const [searchFrom, setSearchFrom] = useState("");
  const [searchTextFrom, setSearchTextFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [searchTextTo, setSearchTextTo] = useState("");
  const [searchTextDate, setSearchTextDate] = useState("");

  useEffect(() => {
    dispatch(fetchStateData());
  }, [dispatch]);

  // Set from in redux state
  const handleFromChange = (e) => {
    const fromWord = e.target.value;
    setSearchTextFrom(fromWord);

    const filteredDistricts = statesData
      ?.map((state) =>
        state?.districts?.filter((district) =>
          fromWord
            .toLowerCase()
            .split("")
            .every(
              (letter, index) =>
                district?.toLowerCase().indexOf(letter, index) === index
            )
        )
      )
      .flat()
      .filter(Boolean);

    setSearchFrom(fromWord === "" ? [] : filteredDistricts);
    dispatch({ type: "SET_FROM", payload: fromWord });
  };

  const handleToChange = (e) => {
    const toWord = e.target.value;
    setSearchTextTo(toWord);

    const filteredDistricts = statesData
      ?.map((state) =>
        state?.districts?.filter((district) =>
          toWord
            .toLowerCase()
            .split("")
            .every(
              (letter, index) =>
                district?.toLowerCase().indexOf(letter, index) === index
            )
        )
      )
      .flat()
      .filter(Boolean);

    // console.log(filteredDistricts);
    setSearchTo(toWord === "" ? [] : filteredDistricts);
    dispatch({ type: "SET_TO", payload: toWord });
  };

  const getDateInEpoch = (date) => {
    const dd = new Date(date).toLocaleDateString()  
    return new Date(dd).getTime() / 1000
  }

  // Set date in redux state
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSearchTextDate(date);

    dispatch({
      type: "SET_DATE",
      payload: getDateInEpoch(date),
    });
  };



  const submitHandler = (e) => {
    e.preventDefault();

    if (from && to && date ) {

      dispatch({
        type: "SET_DATE",
        payload: date,
      });

      const startTime = Math.floor(Date.now() / 1000) + 4 * 3600;
      const randomDuration = Math.floor(Math.random() * (24 - 4 + 1)) + 4;
      const endTime = startTime + randomDuration * 3600;

      dispatch({
        type: "SET_START_TIME",
        payload: startTime,
      });

      dispatch({
        type: "SET_END_TIME",
        payload: endTime,
      });

      const getDiff = (time) => {
        return time / 3600;
      };

      dispatch({
        type: "SET_TIME_DIFF",
        payload: getDiff(endTime - startTime),
      });

      dispatch({
        type: "SET_BUS_BUSFARE",
        payload: [499, 699, 999, 1299, 1499][Math.floor(Math.random() * 5)],
      });

      const travelCompanies = [
        "Neeta Travels",
        "VRL Travels",
        "SRS Travels",
        "InCity Smart Bus",
        "Orange Tours and Travels",
      ];

      dispatch({
        type: "SET_BUS_BUSNAME",
        payload: travelCompanies[Math.floor(Math.random() * 5)],
      });

      dispatch({
        type: "SET_BUS_BUSNO",
        payload: [1012, 6264, 8182, 1112, 1212][Math.floor(Math.random() * 5)],
      });

      dispatch({
        type: "SET_OWNERID",
        payload: [122, 123, 124, 125, 126][Math.floor(Math.random() * 5)],
      });

      dispatch({
        type: "SET_BUS_RATINGS",
        payload: [4, 5][Math.floor(Math.random() * 2)],
      });

      history.push("/trip-list");

      dispatch(createTripData());
    }
    history.push("/trip-list");

  };

  return (
    <>
      <div className="mt-24 pt-[26rem] text-center bg-cover bg-center border" style={{ backgroundImage: `url(${bgImg})` }}>
        <form className="my-4 p-2" onSubmit={submitHandler}>
          <input
            type="text"
            className="h-20 text-2xl mb-2 w-[14rem] md:w-1/5 rounded-md border px-2"
            placeholder="From"
            value={searchTextFrom}
            onChange={handleFromChange}
          />

          {searchFrom !== "" && (
            <ul className="absolute  z-20 list-none max-h-80 w-[16rem] p-2 md:mt-0 overflow-auto md:left-[21rem] bg-white  rounded-md">
              {Array.isArray(searchFrom) &&
                searchFrom.map((district, index) => (
                  <li
                    key={index}
                    className="cursor-pointer border-solid  border border-gray-300 py-2"
                    onClick={() => {
                      dispatch({ type: "SET_FROM", payload: district });
                      setSearchTextFrom(district);
                      setSearchFrom("");
                    }}
                  >
                    {district}
                  </li>
                ))}
            </ul>
          )}

          <input
            type="text"
            className="h-20 text-2xl mb-2 w-[14rem] md:w-1/5 md:ml-2 rounded-md border px-2"
            placeholder="To"
            value={searchTextTo}
            onChange={handleToChange}
          />

          {searchTo !== "" && (
            <ul className="absolute z-20 list-none max-h-80 w-[16rem] p-2 md:mt-0 overflow-auto md:left-[44rem] bg-white border rounded-md">
              {Array.isArray(searchTo) &&
                searchTo.map((district, index) => (
                  <li
                    key={index}
                    className="cursor-pointer border-solid border border-gray-300 py-2"
                    onClick={() => {
                      dispatch({ type: "SET_TO", payload: district });
                      setSearchTextTo(district);
                      setSearchTo("");
                    }}
                  >
                    {district}
                  </li>
                ))}
            </ul>
          )}

          <input
            type="date"
            className="h-20 text-2xl mb-2 w-[14rem] md:w-1/5 md:ml-2 rounded-md border px-2"
            value={searchTextDate}
            onChange={handleDateChange}
          />
          <div className="pt-6">
            <button
              type="submit"
              className="text-white px-9 py-3 bg-red-700 hover:bg-red-800 cursor-pointer focus:outline-none text-sm  text-center md:ml-4 border-none rounded-md dark:bg-red-600 dark:hover:bg-red-700 mb-4"
              // onChange={}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <Highlights />
      <Testimonials />
    </>
  );
};

export default Home;
