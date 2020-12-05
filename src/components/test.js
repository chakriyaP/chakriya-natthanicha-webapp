// import React from "react";
// import "../assets/css/CustomProgressBar.css";

// export const MultiColorProgressBar = (props) => {
//   const readings = props;
//   console.log("read", readings);

//   let values =
//     readings &&
//     readings.readings.length &&
//     readings.readings.map((item, i) => {
//     console.log("item");
//       return (
//         <div
//           className="value"
//           style={{ color: item.color, width: item.value + "%" }}
//           key={i}
//         >
//           <span>{item.value}%</span>
//         </div>
//       );
//     });

//   console.log("values", values);

//   let calibrations =
//     readings &&
//     readings.readings.length &&
//     readings.readings.map((item, i) => {
//       if (item.value > 0) {
//         return (
//           <div
//             className="graduation"
//             style={{ color: item.color, width: item.value + "%" }}
//             key={i}
//           >
//             <span>|</span>
//           </div>
//         );
//       }
//     });

//   let bars =
//     readings &&
//     readings.readings.length &&
//     readings.readings.map((item, i) => {
//       if (item.value > 0) {
//         return (
//           <div
//             className="bar"
//             style={{ backgroundColor: item.color, width: item.value + "%" }}
//             key={i}
//           ></div>
//         );
//       }
//     });

//   let legends =
//     readings &&
//     readings.readings.length &&
//     readings.readings.map((item, i) => {
//       if (item.value > 0) {
//         return (
//           <div className="legend" key={i}>
//             <span className="dot" style={{ color: item.color }}>
//               ●
//             </span>
//             <span className="label">{item.name}</span>
//           </div>
//         );
//       }
//     });

//   return (
//     <div className="multicolor-bar">
//       <div className="values">{values == "" ? "" : values}</div>
//       <div className="scale">{calibrations == "" ? "" : calibrations}</div>
//       <div className="bars">{bars == "" ? "" : bars}</div>
//       <div className="legends">{legends == "" ? "" : legends}</div>
//     </div>
//   );
// };
