import React from "react";
import CancelButton from "../CustomButtons/CancelButton";
import "../App.css"

const BookedText = ()=>{
  return (<h4 sx={{color:'#4F6C92'}}>Booked</h4>)
}
const Overlapping = ()=>{
  return (<h2 sx={{color:'#E2006A'}}>Overlapping</h2>)
}

const AvailableShiftEntry = ({ status, buttonStatus }) => {
  return (
    <div
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
      <div style={{}} className="time">12:00-14:00</div>
      <div style={{padding:'2rem', display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem'}}>
         <BookedText/>
        <CancelButton />
      </div>
    </div>
  );
};

export default AvailableShiftEntry;
