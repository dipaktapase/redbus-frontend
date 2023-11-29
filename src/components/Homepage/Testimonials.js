import React from "react";
import star from "../../assets/star.png";
import Ellipse from "../../assets/Ellipse.svg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "testimonial-one-img-1.png",
      review: 5,
      description: "Awesome travel experience with redbus, Excellent staff.",
      client: {
        name: "Shirley Smith",
        role: "Customer",
      },
    },
    {
      id: 2,
      image: "testimonial-one-img-2.png",
      review: 3,
      description: "Awesome travel experience with redbus, Excellent staff.",
      client: {
        name: "Kevin Martin",
        role: "Customer",
      },
    },
    {
      id: 3,
      image: "testimonial-one-img-3.png",
      review: 4,
      description: "Awesome travel experience with redbus, Excellent staff.",
      client: {
        name: "Jessica Brown",
        role: "Customer",
      },
    },
  ];
  return (
    <>
      <h1 className="font-bold  text-center pt-6">
        Here’s what a few of our customers have to say about us
      </h1>
      <div className="md:flex m-4 md:py-4 text-2xl">
        {testimonials.map((item, index) => (
          <div key={index} className="grid max-w-md mx-auto bg-white border-solid border border-red-300 rounded-md p-4 md:p-6 border-l-2 border-b-2 overflow-hidden shadow-lg mb-6">
            <div className="flex items-center gap-3 text-base mb-4">
              <img src={Ellipse} className="w-16 h-16" alt="customer-img" />
              <div className="flex flex-col items-start">
                <b>{item.client.name}</b>
                <div className="text-sm font-medium text-darkslategray">
                  Customer since 2020
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <img src={star} className="w-4 h-4 mt-5 pl-2 z-10" alt="star" />
              <div className="absolute mt-4  rounded-md bg-red-500 px-5 p-2 h-2" />
              <p className="mt-4 z-10 text-white">{item.review}</p>
              <p className="text-gray-100 pl-4 mt-4">Ratings</p>
            </div>
            <div className="mt-2">
              Awesome travel experience with reserve. Excellent staff
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
