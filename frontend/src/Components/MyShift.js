import React from "react";
import HeadShiftComponent from "../SubComponents/HeadShiftComponent";
import MyShiftEntry from "../SubComponents/MyShiftEntry";
import CancelButton from "../CustomButtons/CancelButton";
import BookButton from "../CustomButtons/BookButton";
import LoadingButton from "../CustomButtons/LoadingButton";
import BlurBookButton from "../CustomButtons/blurBookButton";
import BlurCancelButton from "../CustomButtons/BlurCancelButton";

const MyShifts = () => {
  return (
    <div style={{ width: "100%",  }}>
      <HeadShiftComponent date={"Today"} shifts={""} />
      <MyShiftEntry/>
      <hr></hr>
      <MyShiftEntry/>
      <hr></hr>
      <HeadShiftComponent date={"Tommorow"} shift={""}/>
      <MyShiftEntry/>
      <br></br>
      <CancelButton/>
       <BookButton/>
       <LoadingButton/>
       <BlurBookButton/>
       <BlurCancelButton/>
    </div>
  );
};

export default MyShifts;
