import React from "react";
import HeadAvailableComponent from "../SubComponents/HeadAvailableComponent";
import AvailableShiftEntry from "../SubComponents/AvailableShiftEntry";
import ChooseArea from "../SubComponents/ChooseArea";


const HLine = () => {
  return <div style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}></div>;
};

const AvailableShifts = () => {
  return (
    <div style={{ color: "black" }}>
      <ChooseArea/> 
      <HeadAvailableComponent date='Today'/>
      <AvailableShiftEntry/>
      <HLine/>
      <AvailableShiftEntry/>
      <HLine/>
      <HeadAvailableComponent date='Tommorow'/>
       <AvailableShiftEntry/>
       <HLine/>
       <HeadAvailableComponent date='September 21'/>
       <AvailableShiftEntry/>
       <HLine/>
    </div>
  );
};

export default AvailableShifts;
