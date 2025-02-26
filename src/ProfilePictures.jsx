import React, { useState } from "react";
import image1 from "./assets/ProfilePic.png";
import image2 from "./assets/New.png";
import "./content.css";
function ProfilePic() {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`dp-container ${flipped ? "flip" : ""}`}
      onClick={handleClick}
    >
      <div className="flipper">
        <div className="front">
          <img src={image1} />
        </div>
        <div className="back">
          <img src={image2} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;
