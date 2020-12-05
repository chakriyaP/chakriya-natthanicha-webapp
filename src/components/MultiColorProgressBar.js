import React from "react";
import "../assets/css/CustomProgressBar.css";

export const MultiColorProgressBar = (props) => {
  const { readings, scale } = props;

  console.log("read", readings);

  let bars =
    readings &&
    readings.map((item, i) => {
      if (item.value > 0) {
        return (
          <div
            className="bar"
            style={{
              backgroundColor: item.color,
              width: "12%",
              height: item.value * scale,
            }}
            key={i}
          ></div>
        );
      }
    });

  return <div className="bars">{bars == "" ? "" : bars}</div>;
};
