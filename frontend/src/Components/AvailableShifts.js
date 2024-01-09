import React from "react";
import HeadAvailableComponent from "../SubComponents/HeadAvailableComponent";
import AvailableShiftEntry from "../SubComponents/AvailableShiftEntry";

const AvailableShifts = () => {
  return (
    <div style={{ color: "black" }}>
      <></>  
      <HeadAvailableComponent date='Today'/>
      <AvailableShiftEntry/>
      <AvailableShiftEntry/>
      <AvailableShiftEntry/>
      <AvailableShiftEntry/>
      <HeadAvailableComponent date='Tommorow'/>

    </div>
  );
};

export default AvailableShifts;
