import React, { useState, useEffect } from "react";
import image1 from "./assets/ProfilePic.png";
import image2 from "./assets/New.png";
import confetti from "./assets/confetti.gif";
import popper from "./assets/partypopper.gif";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import "./content.css";
import ContactPageSharpIcon from "@mui/icons-material/ContactPageSharp";
function Profile({ detailsDisplay, alignment }) {
  const [flipped, setFlipped] = useState(false);
  const [isBDay, celebrate] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    console.log(
      "Day:",
      currentDate.getDate(),
      "Month:",
      currentDate.getMonth()
    );
    if (currentDate.getMonth() === 2 && currentDate.getDate() === 2) {
      console.log("It's your Birthday! Click your profile to Celebrate!");
      celebrate(true);
    }
  }, []);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleDownload = () => {
    // Determine the filename and path of your PDF
    const pdfFileName = "CV_Marasigan_VA.pdf"; // Replace with your PDF's filename
    const pdfFilePath = "/" + pdfFileName;

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = pdfFileName; // Specify the download filename

    // Simulate a click on the anchor element
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element
    document.body.removeChild(link);
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

          {isBDay && (
            <div className="celebrate">
              <img className="confetti" src={confetti} alt="" />
              <img className="popper-left" src={popper} alt="" />
              <img className="popper-right" src={popper} alt="" />
            </div>
          )}
        </div>
      </div>

      <h3 style={{ alignSelf: alignment || "flex-start" }}>
        VEM AIENSI A. MARASIGAN
      </h3>
      <h3 style={{ alignSelf: alignment || "flex-start" }}>
        UI/UX | Full Stack Web Developer
      </h3>
      <br />
      {detailsDisplay && (
        <>
          <div className="profile-details">
            <SchoolIcon /> <span>New Era University</span>
          </div>

          <div className="profile-details">
            <LocationOnIcon /> <span>Quezon City Manila</span>
          </div>
        </>
      )}
      <div
        className="quicklinks"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: alignment || "flex-start",
        }}
      >
        <a onClick={handleDownload} className="profile-details">
          <ContactPageSharpIcon /> <span>Curriculum Vitae</span>
        </a>
      </div>
    </motion.div>
  );
}

export default Profile;
