import React from "react";
import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import "../content.css";

function List({ style, list, childVariants }) {
  function returnList() {
    switch (style) {
      case "lined":
        return array.map((item, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className="list-item"
          >
            <div className="list-dot">
              {index !== 0 && <div className="list-line"></div>}
            </div>
            <div className="list-text">
              <span>{item.title}</span>
              <span>{item.subtitle}</span>
            </div>
          </motion.div>
        ));
      case "star":
        return array.map((item, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className="list-item"
          >
            <WorkspacePremiumIcon></WorkspacePremiumIcon>
            <div className="list-text">
              <span>{item.title}</span>
              <span>{item.subtitle}</span>
            </div>
          </motion.div>
        ));
      case "dot":
        return array.map((item, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className="list-item"
          >
            <div className="list-dot"></div>
            <div className="list-text">
              <span>{item.title}</span>
              <span>{item.subtitle}</span>
            </div>
          </motion.div>
        ));
      case "default":
        return array.map((item, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className="list-item"
          >
            <div className="list-dot"></div>
            <div className="list-text">
              <span>{item.title}</span>
              <span>{item.subtitle}</span>
            </div>
          </motion.div>
        ));
    }
  }

  const array = list;

  return <div>{returnList()}</div>;
}

export default List;
