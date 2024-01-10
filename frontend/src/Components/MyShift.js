import React, { useContext } from "react";
import HeadShiftComponent from "../SubComponents/HeadShiftComponent";
import MyShiftEntry from "../SubComponents/MyShiftEntry";
import CancelButton from "../CustomButtons/CancelButton";
import BookButton from "../CustomButtons/BookButton";
import LoadingButton from "../CustomButtons/LoadingButton";
import BlurBookButton from "../CustomButtons/blurBookButton";
import BlurCancelButton from "../CustomButtons/BlurCancelButton";
import { ShiftContext } from "../Context/ShiftContext";

const HLine = () => {
  return <div style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}></div>;
};


const MyShifts = () => {

  const {shiftData,setShiftData} = useContext(ShiftContext);
  return (
    <div style={{ width: "100%" }}>
      <HeadShiftComponent date={"Today"} shifts={""} />
      <MyShiftEntry />
       <HLine/>
      <MyShiftEntry />
      <HLine/>
      <HeadShiftComponent date={"Tommorow"} shift={""} />
      <MyShiftEntry />
      <HLine/>
    </div>
  );
};

export default MyShifts;
