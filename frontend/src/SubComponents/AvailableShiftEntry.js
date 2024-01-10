import React from "react";
import CancelButton from "../CustomButtons/CancelButton";
import "../App.css"
import HeadAvailableComponent from "./HeadAvailableComponent";

const BookedText = ()=>{
  return (<h4 sx={{color:'#4F6C92'}}>Booked</h4>)
}
const Overlapping = ()=>{
  return (<h2 sx={{color:'#E2006A'}}>Overlapping</h2>)
}
const HLine = () => {
  return (
    <div
      style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}
    ></div>
  );
};
const AvailableShiftEntry = ({ date,items }) => {
  return (
    <div>
    <HeadAvailableComponent date={date} />
    {items.map((e) => (
      <div>
      <div
        key={e.id} // Make sure to provide a unique key for each entry
        style={{
          width: "100%",
          height: "2rem",
          backgroundColor: "#FFFF",
          color: "#4F6C92",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
        className="available-shift-entry"
      >
        <div style={{}} className="time">
          {`${new Date(e.startTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}-${new Date(e.endTime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`}
        </div>
        <div
          style={{
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <BookedText /> {/* Placeholder for BookedText component */}
          <CancelButton /> {/* Placeholder for CancelButton component */}
        </div>
      </div>
      <HLine/></div>
    ))}
  </div>
  );
};

export default AvailableShiftEntry;
