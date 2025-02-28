import React, { useState } from "react";
import image1 from "./assets/ProfilePic.png";
import image2 from "./assets/New.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import "./content.css";
function Profile() {
  const images = [image1, image2];
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="profile"
    >
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

      <h3>VEM AIENSI A. MARASIGAN</h3>
      <h3>UI/ UX | Full Stack Web Developer</h3>
      <br />

      <div className="profile-details">
        <SchoolIcon /> <span>New Era University</span>
      </div>

      <div className="profile-details">
        <LocationOnIcon /> <span>Quezon City Manila</span>
      </div>
    </motion.div>
  );
}

export default Profile;
