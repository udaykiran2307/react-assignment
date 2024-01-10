import React from "react";
import CancelButton from "../CustomButtons/CancelButton";
import HeadShiftComponent from "./HeadShiftComponent";

const MyShiftEntry = ({ date, items, hours }) => {

  return (
    <div>
      {/* <HeadShiftComponent/> */}
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
          <p>12:45-15:30</p>
          <p style={{ color: "#4F6C92", marginTop: "-1rem" }}>Helsinki</p>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <CancelButton />
        </div>
      </div>
    </div>
  );
};

export default MyShiftEntry;
