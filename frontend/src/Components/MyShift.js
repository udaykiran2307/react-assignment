import React from "react";
import HeadShiftComponent from "../utilities/HeadShiftComponent";
import MyShiftEntry from "../utilities/MyShiftEntry";

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
    


      
    </div>
  );
};

export default MyShifts;
