import React, { useState } from "react";

const RatingReview = () => {
    const [rating, setRating] = useState(0);
  return (
    <div className="mt-40 flex items-center justify-center">
      {[1, 2, 3, 4, 5].map((star, index) => {
        return (
          <span
            key={index}
            className=" cursor-pointer text-8xl"
            style={{ color: rating >= star ? "gold" : "gray" }}
            onClick={() => {setRating(star)}}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
};

export default RatingReview;
