import React, { useContext } from "react";
import CancelButton from "../CustomButtons/CancelButton";
import HeadShiftComponent from "./HeadShiftComponent";
import { getTimeAndDate } from "../Utils/getTimeAndDate";
import { ShiftContext } from "../Context/ShiftContext";
import axios from "axios";
const HLine = () => {
  return (
    <div
      style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}
    ></div>
  );
};
const cancelBooking = async (id) => {
  try {
    const res = await axios.post(`http://127.0.0.1:8080/shifts/${id}/cancel`);
    console.log("successful");
  } catch (err) {
    console.log("srafe", err);
  }
};
const getUpdatedDataAfterCancel = (id, shiftData) => {
  const shiftIndex = shiftData.findIndex((shift) => shift.id === id);

  if (shiftIndex !== -1) {
    const updatedShiftData = [...shiftData];
    updatedShiftData[shiftIndex] = {
      ...updatedShiftData[shiftIndex],
      booked: false,
    };

    return updatedShiftData;
  }
  return shiftData;
};
const MyShiftEntry = ({ date, items, hours }) => {
  const { shiftData, setShiftData } = useContext(ShiftContext);
  // console.log("date-items", date, items);
  const handleCancel = (id) => {
    // console.log("clicked");
    cancelBooking(id);
    const updatedData = getUpdatedDataAfterCancel(id, shiftData);
    setShiftData(updatedData);
  };

  return (
    <div>
      <HeadShiftComponent date={date} hours={hours} shifts={items.length} />
      {items.map((e) => {
        return (
          <div>
            <div
              style={{
                height: "3rem",
                width: "100%",
                display: "flex",
                padding: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ paddingTop: "1rem" }}>
                <p>
                  {getTimeAndDate(e.startTime)}-{getTimeAndDate(e.endTime)}
                </p>
                <p style={{ color: "#4F6C92", marginTop: "-1rem" }}>{e.area}</p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <CancelButton handleCancel={handleCancel} id={e.id} />
              </div>
            </div>
            <HLine />
          </div>
        );
      })}
    </div>
  );
};

export default MyShiftEntry;
