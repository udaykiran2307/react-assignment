import React from "react";


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
          <p style={{fontWeight:'bold'}}>Today</p>
        ) : date === getTomorrowDate() ? (
          <p style={{fontWeight:'bold'}}>Tommorow</p>
        ) : (
          <p style={{fontWeight:'bold'}}>{date}</p>
        )}
      </div>
    </div>
  );
};

export default HeadAvailableComponent;
