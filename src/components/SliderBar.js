import React, { useState, useEffect } from "react";
import "../assets/css/MultiProgressBar.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import {NumberFormat} from "../utils/Function"

export const SliderBar = (props) => {
  const {
    nameLable,
    valueDefault,
    max,
    min,
    readings,
    lables,
    style,
    onSliderChange,
    col
  } = props;

  const [value, setValue] = useState(valueDefault);

  const onValueChang = (e) => {
    let selected = e.target.value;
    setValue(selected);
    onSliderChange(selected);
  };

  return (
    <div className={col}>
      <div className="pb-2">
        {nameLable} = {(+value).toFixed(1)}
      </div>
      <ProgressBar className="shadow" style={{ height: "24%" }}>
        <ProgressBar
          style={{ backgroundColor: "#BFB7A5" }}
          now={readings[0]}
          key={1}
        />
        <ProgressBar
          style={{ backgroundColor: "#847D6D" }}
          now={readings[1]}
          key={2}
        />
        <ProgressBar
          style={{ backgroundColor: "#413D35" }}
          now={readings[2]}
          key={3}
        />
      </ProgressBar>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-26px" }}
      >
        <input
          type="range"
          width="100%"
          min={min}
          max={max}
          value={value}
          className="slider"
          id="myRange"
          step={0.1}
          onChange={onValueChang}
          style={style}
        />
      </div>

      <div className="col-12 row text-center mt-1">
        <div className="col-4">{lables[0]}</div>
        <div className="col-4">{lables[1]}</div>
        <div className="col-4">{lables[2]}</div>
      </div>
    </div>
  );
};

export const SliderBarLarge = (props) => {
  const {
    nameLable,
    valueDefault,
    max,
    min,
    readings,
    lables,
    style,
    step,
    onSliderChange,
  } = props;

  const [value, setValue] = useState(valueDefault);

  const onValueChang = (e) => {
    let selected = e.target.value;
    setValue(selected);
    onSliderChange(selected);
  };

  return (
    <div className="col-12">
      <div className="pb-2">
        {nameLable} = {NumberFormat(+value)}
      </div>
      <ProgressBar className="shadow" style={{ height: "24%" }}>
        <ProgressBar
          style={{ backgroundColor: "#FF5200" }}
          now={readings[2]}

          key={1}
        />
        <ProgressBar
          style={{ backgroundColor: "#FFD571" }}
          now={readings[1]}
          key={2}
        />
        <ProgressBar
          style={{ backgroundColor: "#4AEC7B" }}
          now={readings[0]}

          key={3}
        />
      </ProgressBar>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-26px" }}
      >
        <input
          type="range"
          width="100%"
          min={min}
          max={max}
          value={value}
          className="slider"
          id="myRange"
          step={step}
          style={style}
          onChange={onValueChang}
        />
      </div>

      <div className="col-12 row mt-1 d-flex justify-content-between">
        <div>{lables[0]}</div>
        <div>{lables[1]}</div>
      </div>
    </div>
  );
};
