import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import "../content.css";

function List({ style, list, childVariants }) {
  //Line essentials
  const finalDot = useRef(null);
  const listRef = useRef(null);
  const [lineSubtractor, setSubtractor] = useState(null);
  const [listHeight, setHeight] = useState(null);
  const [lineHeight, setLineHeight] = useState(null);

  useEffect(() => {
    if (finalDot.current) {
      setHeight(window.getComputedStyle(listRef.current).height);
      setSubtractor(window.getComputedStyle(finalDot.current).marginBottom);
      console.log(window.getComputedStyle(finalDot.current).marginBottom);
      setLineHeight(parseFloat(listHeight) - parseFloat(lineSubtractor) - 42);
    }
  }, [finalDot.current]);

  const linevariant = {
    hidden: { height: 0 },
    visible: { height: lineHeight },
  };
  function returnList() {
    switch (style) {
      case "lined":
        return (
          <div ref={listRef} className="list" style={{ position: "relative" }}>
            {array.map((item, index) => (
              <motion.div
                variants={childVariants}
                key={index}
                className="list-item"
              >
                {index === array.length - 1 ? (
                  <div ref={finalDot} className="list-dot"></div>
                ) : (
                  <div className="list-dot"></div>
                )}

                <div className="list-text">
                  <span>{item.title}</span>
                  <span>{item.subtitle}</span>
                </div>
              </motion.div>
            ))}
            {finalDot.current && (
              <motion.div
                variants={linevariant}
                className="list-line"
              ></motion.div>
            )}
          </div>
        );
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
