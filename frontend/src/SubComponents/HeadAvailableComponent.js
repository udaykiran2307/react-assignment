import React from "react";
import CustomButton from "../Components/CustomButton";

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
        <h4>{date}</h4>
      </div>
    </div>
  );
};



export default HeadAvailableComponent;
