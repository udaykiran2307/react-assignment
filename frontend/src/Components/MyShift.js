import React, { useContext } from "react";
import HeadShiftComponent from "../SubComponents/HeadShiftComponent";
import MyShiftEntry from "../SubComponents/MyShiftEntry";
import { ShiftContext } from "../Context/ShiftContext";
import { groupByDay, groupOfMyShiftData } from "../Utils/getTimeAndDate";

const HLine = () => {
  return (
    <div
      style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}
    ></div>
  );
};

const getDetailsArray = (shiftData) => {
  // console.log("pre", shiftData);
  const myShiftsArr = shiftData.filter((e) => e.booked === true);
  // console.log("post", myShiftsArr);
  const myShifteArrGroupBydate = groupOfMyShiftData(myShiftsArr);
  return myShifteArrGroupBydate;
};

const MyShifts = () => {
  const { shiftData, setShiftData } = useContext(ShiftContext);
  const myShiftArr = getDetailsArray(shiftData);
  // console.log("myShift", myShiftArr);
  if(!myShiftArr || myShiftArr.length === 0){
    return(<div style={{margin:'auto'}}>
      Add shifts from the available shifts
    </div>)
  }

  return (
    <div style={{ width: "100%" }}>
      {/* <HeadShiftComponent date={"Today"} shifts={""} />
      <MyShiftEntry />
      <HLine />
      <MyShiftEntry />
      <HLine />
      <HeadShiftComponent date={"Tommorow"} shift={""} />
      <MyShiftEntry />
      <HLine /> */}
      <div style={{ width: "100%" }}>
        {myShiftArr.map((e) => (
          <MyShiftEntry date={e.date} items={e.items} hours={e.totalTimeTaken} />
        ))}
      </div>
    </div>
  );
};

export default MyShifts;
