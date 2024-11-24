import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

import StarRating from "./StartRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This move have {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Masterpiece"]}
    />
    <StarRating maxRating={10} />
    <StarRating className="test" />
    <StarRating size={24} color="#1f7a" defaultRating={3} />

    <Test />
  </React.StrictMode>
);
