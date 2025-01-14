// import React from 'react'
// import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

// const TestiCard = (props) => {
//     let review = props.review;
//   return (
//     <div className="flex flex-col md:relative">

//         <div className="absolute top-[-7rem] z-10 mx-auto ">
//             <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-25"></img>
//             <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
//         </div>

//         <div className="text-center mt-7">
//             <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
//         </div>

//         <div className="text-center mt-4">
//             <p className="text-violet-300 text-sm uppercase">{review.job}</p>
//         </div>

//         <div className="text-violet-400 mx-auto mt-5">
//             <FaQuoteLeft />
//         </div>

//         <div className="text-center mt-4 text-slate-500 ">{review.text}</div>

//         <div className="text-violet-400 mx-auto mt-5">
//             <FaQuoteRight />
//         </div>

//     </div>
//   )
// }

// export default TestiCard
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestiCard = (props) => {
  const review = props.review;

  // Fallback in case data is missing
  if (!review) return <div>No team member available</div>;

  return (
    <div className="flex flex-col md:relative">
      {/* Team member photo */}
      <div className="absolute top-[-7rem] z-10 mx-auto">
        <img
          src={review.image || "https://via.placeholder.com/140"} // Fallback image
          alt={review.name}
          className="aspect-square rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] z-25"
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      {/* Team member name */}
      <div className="text-center mt-7">
        <p className="font-bold text-xl sm:text-2xl capitalize leading-3">{review.name}</p>
      </div>

      {/* Team member role */}
      <div className="text-center mt-4">
        <p className="text-violet-300 text-sm uppercase">{review.job}</p>
      </div>

      {/* Quote icons and description */}
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>
      <div className="text-center mt-4 text-slate-500">{review.text}</div>
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default TestiCard;
