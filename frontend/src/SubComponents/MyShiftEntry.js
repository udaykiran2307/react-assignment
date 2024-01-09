import React from "react";
import CancelButton from "../CustomButtons/CancelButton";

const MyShiftEntry = () => {
  return (
    <div
      style={{
        height: "3rem",
        display: "flex",
        padding: "8px",
        justifyContent: "space-between",
        alignItems:'center'
      }}
    >
      <div style={{paddingTop:'1rem'}}>
        <p>12:00 - 14:00</p>
        <p style={{ color: "#4F6C92" , marginTop:'-1rem'}}>Helsinki</p>
      </div>
      <CancelButton/>
    </div>
  );
};

export default MyShiftEntry;
