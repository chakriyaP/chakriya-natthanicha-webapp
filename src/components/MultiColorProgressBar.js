// import React, { useState } from "react";
// import "../assets/css/CustomProgressBar.css";

// export const MultiColorProgressBar = (props) => {
//   const {
//     readings,
//     scale,
//     nameLable,
//     valueDefault,
//     maxValue,
//     minValue,
//     max,
//     min,
//     onSliderChange,
//     step
//   } = props;
//   const [value, setValue] = useState(valueDefault);

//   let sliderHeight = 0;

//   let bars =
//     readings &&
//     readings.map((item, i) => {
//       sliderHeight += item.value * scale;
//       if (item.value > 0) {
//         return (
//           <div
//             className="bar"
//             style={{
//               backgroundColor: item.color,
//               width: "30%",
//               height: item.value * scale,
//             }}
//             key={i}
//           ></div>
//         );
//       }
//     });

//   const onValueChang = (e) => {
//     let selected = e.target.value;
//     setValue(selected);
//     onSliderChange(selected);
//   };

//   return (
//     <div className="row">
//       <div className="col-12">
//         <p className="font-weight-bold">
//           {nameLable}  = {(+value).toFixed(1)}
//         </p>
//       </div>
//       <div className="row col-12">
//         <div className="col-12 ml-5 font-weight-light">
//           <p>{maxValue}</p>
//         </div>
//         <div className="col-12  mt-0">
//           <div className="bars">{bars == "" ? "" : bars}</div>
//         </div>
//         <div className="col-12 ml-5 font-weight-light">
//           <p>{minValue}</p>
//         </div>
//       </div>

//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         orient="vertical"
//         className="slider shadow-lg"
//         style={{
//           position: "absolute",
//           top: 230,
//           left: -169,
//           width: sliderHeight,
//         }}
//         onChange={onValueChang}
//       />
//     </div>
//   );
// };

// export const MultiColorProgressBarSmall = (props) => {
//   const {
//     readings,
//     scale,
//     nameLable,
//     valueDefault,
//     maxValue,
//     mdValue,
//     minValue,
//     onSliderChange,
//     max,
//     min,
//     step,
//   } = props;

//   const [value, setValue] = useState(valueDefault);

//   let sliderHeight = 0;

//   let bars =
//     readings &&
//     readings.map((item, i) => {
//       sliderHeight += item.value * scale;
//       if (item.value > 0) {
//         return (
//           <div
//             className="bar1"
//             style={{
//               backgroundColor: item.color,
//               height: "100%",

//               width: "500px",
//             }}
//             key={i}
//           ></div>
//         );
//       }
//     });

//   const onValueChang = (e) => {
//     let selected = e.target.value;
//     setValue(selected);
//     onSliderChange(selected);
//   };

//   return (
//     <div className="row">
//       {/* <div className="col-12">
//         <p className="font-weight-bold fs-6">
//           {nameLable} = {(+value).toFixed(1)}
//         </p>
//       </div> */}
//       <div className="row col-12  ">
//         {/* <div className="col-8 ">
//           <div className="col-12 font-weight-light mt-2">
//             <p>{maxValue}</p>
//           </div>
//           <div className="col-12 font-weight-light mt-5">
//             <p>{mdValue}</p>
//           </div>
//           <div className="col-12 font-weight-light mt-5">
//             <p>{minValue}</p>
//           </div>
//         </div> */}

//         <div className="col-4  mt-0 ">
//           <div className="bars1">{bars == "" ? "" : bars}</div>
//         </div>
//       </div>

//       <input  
//         type="range"
//         min={min}
//         max={max}
//         value={value}
//         step={step}
//         // orient="vertical"
//         className="slider1"
//         style={{
//           position: "absolute",
//           top: 88 ,
//           left: 11,
//           width: sliderHeight,
//           // backgroundColor: "black"
//         }}
//         onChange={onValueChang}
//       />
//     </div>
//   );
// };
