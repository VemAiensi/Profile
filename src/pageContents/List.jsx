import React from "react";
import { motion } from "framer-motion";
import "../content.css";

function List({ list, childVariants }) {
  const array = list;

  return (
    <div>
      {array.map((item, index) => (
        <motion.div variants={childVariants} key={index} className="list-item">
          <div className="list-dot">
            {index !== 0 && <div className="list-line"></div>}
          </div>
          <div className="list-text">
            <span>{item.school}</span>
            <span>{item.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default List;
