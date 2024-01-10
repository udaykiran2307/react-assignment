import React from "react";
import CustomButton from "../Components/CustomButton";

const getCurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(currentDate);

  return formattedDate;
};

const getTomorrowDate = () => {
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1); // Add one day

  const formattedTomorrowDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(tomorrowDate);

  return formattedTomorrowDate;
};

// const tomorrowDate = getTomorrowDate();
// console.log(tomorrowDate);

const HeadAvailableComponent = ({ date }) => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "2rem",
          backgroundColor: "#F1F4F8",
          color: "#4F6C92",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {date === getCurrentDate() ? (
          <h4>Today</h4>
        ) : date === getTomorrowDate() ? (
          <h4>Tommorow</h4>
        ) : (
          <h4>{date}</h4>
        )}
      </div>
    </div>
  );
};

export default HeadAvailableComponent;
