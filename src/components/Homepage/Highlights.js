import React from "react";
import booked from "../../assets/bookedEveryday.svg";
import happyCustomers from "../../assets/happyCustomers.svg";
import buses from "../../assets/buses.svg";

const Highlights = () => {
  const highlights = [
    { img: buses, heading: "2000 +", description: "Bus Collection" },
    {
      img: happyCustomers,
      heading: "20 Million",
      description: "Happy Customers Globally",
    },
    { img: booked, heading: "5,0000 +", description: "Tickets Book Everyday" },
  ];

  return (
    <div className="bg-whitesmoke-100 py-4 text-2xl">
      <h2 className="text-center">
        India's No. 1 Online Bus Ticket Booking Site
      </h2>
      <div className="md:flex m-4 md:py-4">
        {highlights.map((item, index) => (
          <div key={index} className="grid max-w-md mx-auto bg-white rounded-md p-4 md:p-2 md:w-1/3 w-full h-full border-solid border border-red-300 border-l-2 border-b-2 overflow-hidden shadow-lg md:shadow-lg mb-4">
            <img src={item.img} alt={index} className="justify-between w-full h-56 object-cover" />

            <h3 className=" text-2xl font-semibold text-center">
              {item.heading}
            </h3>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
