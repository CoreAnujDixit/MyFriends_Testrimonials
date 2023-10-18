import React from "react";
import Card from "./Card";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";

const Testimonal = (props) => {
  let reviews = props.reviews;
  const [index, setindex] = useState(0);

  function SurpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setindex(randomIndex);
  }

  function RightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }
  function LeftShiftHandler() {
    if (index - 1 < 0) {
      setindex(reviews.length - 1);
    } else {
      setindex(index - 1);
    }
  }
  return (
    <div className="bg-blue-200 ">
      <Card review={reviews[index]} />

      <div className=" space-x-16 text-xl relative bottom-20 -mt-20">
        <button className=" hover:text-[#5272F2]" onClick={LeftShiftHandler}>
          <FaLessThan />
        </button>
        <button className=" hover:text-[#5272F2]" onClick={RightShiftHandler}>
          <FaGreaterThan />
        </button>
      </div>

      <div className="flex justify-center items-center bottom-10 relative">
        <button class="btn" onClick={SurpriseHandler}>
          <svg
            height="24"
            width="24"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            class="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>

          <span class="text">Surprise me</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonal;
