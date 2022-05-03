import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogTile({ hog }) {
  const [hogDetails, setHogDetails] = useState(false);

  function handleClick() {
    setHogDetails(!hogDetails);
  }

  return (
    <div className="pigTile">
      <h1>{hog.name}</h1>
      <img
        onClick={handleClick}
        height="300"
        width="400"
        src={hog.image}
        alt={hog.name}
      />
      {hogDetails ? <HogDetails hog={hog} /> : ""}
    </div>
  );
}

export default HogTile;
