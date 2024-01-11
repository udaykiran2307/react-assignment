import React, { useContext, useState } from "react";
import CancelButton from "../CustomButtons/CancelButton";
import "../App.css";
import HeadAvailableComponent from "./HeadAvailableComponent";
import BookButton from "../CustomButtons/BookButton";
import axios from "axios";
import { ShiftContext } from "../Context/ShiftContext";
import { isOverlapping } from "../Utils/getTimeAndDate";
import LoadingButton from "../CustomButtons/LoadingButton";
import LoadingCancelBtn from "../CustomButtons/LoadingCancelBtn";
import BlurBookButton from "../CustomButtons/blurBookButton";
const BookedText = () => {
  return <h4 sx={{ color: "#4F6C92" }}>Booked</h4>;
};
const Overlapping = () => {
  return <h4 sx={{ color: "#E2006A" }}>Overlapping</h4>;
};
const HLine = () => {
  return (
    <div
      style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}
    ></div>
  );
};

const postBooking = async (id) => {
  try {
    const res = await axios.post(`http://127.0.0.1:8080/shifts/${id}/book`);
    // console.log("successful");
  } catch (err) {
    console.log("srafe", err);
  }
};
const cancelBooking = async (id) => {
  try {
    const res = await axios.post(`http://127.0.0.1:8080/shifts/${id}/cancel`);
    // console.log("successful");
  } catch (err) {
    console.log("srafe", err);
  }
};

const getUpdatedDataAfterBook = (id, shiftData) => {
  const shiftIndex = shiftData.findIndex((shift) => shift.id === id);

  if (shiftIndex !== -1) {
    const updatedShiftData = [...shiftData];
    updatedShiftData[shiftIndex] = {
      ...updatedShiftData[shiftIndex],
      booked: true,
    };

    return updatedShiftData;
  }
  return shiftData;
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

const AvailableShiftEntry = ({ date, items }) => {
  const { shiftData, setShiftData } = useContext(ShiftContext);
  // const[myShifts,setMyShifts] = useState([]);
  const [bookloading, setBookLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);

  const handleCancel = (id) => {
    setCancelLoading(true);
    cancelBooking(id);
    const updatedData = getUpdatedDataAfterCancel(id, shiftData);
    setCancelLoading(false);
    setShiftData(updatedData);
  };

  const handleBooking = (id) => {
    setBookLoading(true);
    postBooking(id);
    const updatedData = getUpdatedDataAfterBook(id, shiftData);
    setShiftData(updatedData);
    setBookLoading(false);
  };

  // const TextStatus = (startTime,endTime)=>{

  //      if(isOverlapping(myShifts,startTime,endTime)){
  //       return <Overlapping/>
  //      }
  //      else return <div></div>;
  // }

  return (
    <div>
      <HeadAvailableComponent date={date} />
      {items.map((e) => (
        <div key={e.id} style={{width:'100%'}}>
          <div
            key={e.id}
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
            <div style={{width:'100%'}} className="time">
              {`${new Date(e.startTime).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}-${new Date(e.endTime).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}`}
            </div>

            <div
              style={{
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {e.booked === true ? (
                <BookedText />
              ) : isOverlapping(shiftData, e.startTime, e.endTime) ? (
                <Overlapping />
              ) : (
                ""
              )}
              {e.booked === true ? (
                cancelLoading ? (
                  <LoadingCancelBtn />
                ) : (
                  <CancelButton handleCancel={handleCancel} id={e.id} />
                )
              ) : isOverlapping(shiftData, e.startTime, e.endTime)? <BlurBookButton/> : bookloading ? (
                <LoadingButton />
              ) : (
                <BookButton handleBooking={handleBooking} id={e.id} />
              )}
              {/* Placeholder for CancelButton component */}
            </div>
          </div>
          <HLine />
        </div>
      ))}
    </div>
  );
};

export default AvailableShiftEntry;
