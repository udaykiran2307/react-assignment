import React, { useContext } from "react";
import HeadShiftComponent from "../SubComponents/HeadShiftComponent";
import MyShiftEntry from "../SubComponents/MyShiftEntry";
import { ShiftContext } from "../Context/ShiftContext";
import { groupByDay } from "../Utils/getTimeAndDate";

const HLine = () => {
  return (
    <div
      style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}
    ></div>
  );
};

const getDetailsArray = (shiftData) => {
  console.log("pre", shiftData);
  const myShiftsArr = shiftData.filter((e) => e.booked === true);
  console.log("post", myShiftsArr);
  const myShifteArrGroupBydate = groupByDay(myShiftsArr);
  return myShifteArrGroupBydate;
};

const MyShifts = () => {
  const { shiftData, setShiftData } = useContext(ShiftContext);
  const myShiftArr = getDetailsArray(shiftData);
  console.log("myShift", myShiftArr);

  return (
    <div style={{ width: "100%" }}>
      <HeadShiftComponent date={"Today"} shifts={""} />
      <MyShiftEntry />
      <HLine />
      <MyShiftEntry />
      <HLine />
      <HeadShiftComponent date={"Tommorow"} shift={""} />
      <MyShiftEntry />
      <HLine />
      <div style={{ width: "100%" }}>
        {myShiftArr.map((e) => (
          <MyShiftEntry date={e.date} items={e.items} />
        ))}
      </div>
    </div>
  );
};

export default MyShifts;
