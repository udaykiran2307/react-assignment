import React from "react";
import CustomButton from "../Components/CustomButton";

const MyShiftEntry = () => {
  return (
    <div
      style={{
        height: "3rem",
        display: "flex",
        padding: "8px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div>12:00 - 14:00</div>
        <p>Helsinki</p>
      </div>
      <CustomButton type={"Cancel"} />
    </div>
  );
};

export default MyShiftEntry;
