import "./Card.css";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="bg-blue-200 w-screen h-screen justify-center flex flex-col flex-wrap items-center gap-3 ">
      <div className="text-2xl font-bold -top-10 relative uppercase z-22 -mt-28 ">
        <h1>me & my friend</h1>
      </div>
      <div className="w-28  h-1 -top-12 left-50 -z-1 relative bg-violet-400 shadow-xl  z-23"></div>

      <div>
        <img
          src={review.image}
          alt=""
          className="rounded-full w-52 relative border-4 z-20 hover:shadow-md  ease-out duration-300 hover:shadow-violet-700	hover:scale-105"
        />
      </div>

      <div className="w-20 h-20 top-28 left-24 z-2 absolute rounded-full bg-red-300 shadow-xl "></div>

      <div className="text-xl font-extrabold uppercase">
        <p>{review.name}</p>
      </div>
      <div className=" font-bold ">
        <p>{review.job}</p>
      </div>

      <div className="text-[#5272F2]">
        <FaQuoteLeft />
      </div>
      <div className="w-[90vw] anuj font-bold text-green-900 hover:text-[#000000]  ease-in duration-200 text-[1.7vh] ">
        <p>{review.text}</p>
      </div>
      <div className="text-[#5272F2]">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
