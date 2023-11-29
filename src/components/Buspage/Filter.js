import React from "react";

const Filter = () => {
  return (
    <div className="border-solid border border-red-300 p-4 rounded-md">
      <div className="flex justify-between">
        <h2>Filter</h2>
        <h4 className="pt-1">Clear all</h4>
      </div>

      <div className="">
        <h3>Departure Time</h3>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> Morning Session
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> Afternoon Session
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> Evening Session
        </label>
      </div>

      <div className="">
        <h3>Arrival Time</h3>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> Morning Session
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> Afternoon Session
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> Evening Session
        </label>
      </div>

      <div className="h-40">
        <h3>Pickup Point</h3>
        <input
          type="text"
          placeholder="from"
          className="ml-4 mb-2 pl-2"
        ></input>
        <label className="pl-4 block pb-2">Mumbai</label>
        <label className="pl-4 block pb-2">Pune</label>
        <label className="pl-4 block pb-2">Bangalore</label>
      </div>

      <div className="h-40">
        <h3>Drop Point</h3>
        <input type="text" placeholder="to" className="ml-4 mb-2 pl-2"></input>
        <label className="pl-4 block pb-2">Mumbai</label>
        <label className="pl-4 block pb-2">Pune</label>
        <label className="pl-4 block pb-2">Bangalore</label>
      </div>

      <div className="">
        <h3>Bus Rating</h3>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> 4 Stars or More
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> 3 Stars
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> 2 Stars or Less
        </label>
      </div>

      <div className="">
        <h3>Bus Operator</h3>
        <input type="text" placeholder="bus" className="ml-4 mb-2 pl-2"></input>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> 4 Stars or More
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> 3 Stars
        </label>
        <label className="pl-4 block pb-2">
          <input type="checkbox" /> 2 Stars or Less
        </label>
      </div>
    </div>
  );
};

export default Filter;
