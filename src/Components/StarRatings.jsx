import React, { useState } from "react";

const StarRatings = () => {
  const [ratings, setRatings] = useState(0);

  return (
    <>
      <section>
        <div className="grid grid-cols-2">
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span>⭐</span>
            ))}
            <p>4.9 / 5 rating</p>
            <p>databricks</p>
          </div>
          <div className="">
            {[1, 2, 3, 4].map((star) => (
              <span>⭐</span>
            ))}

            <p>4.8 / 5 rating</p>
            <p>Chainalysis</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StarRatings;
