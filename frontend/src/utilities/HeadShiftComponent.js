import React from "react";

const HeadShiftComponent = ({ date, shifts }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "2rem",
        backgroundColor: "#F1F4F8",
        color: "#4F6C92",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "8px",
      }}
    >
      <h4>
        {date}{" "}
        <span
          style={{ fontWeight: "50px", fontSize: "11px", marginLeft: "1rem" }}
        >
          {0} shifts, {4}h{" "}
        </span>
      </h4>
    </div>
  );
};

export default HeadShiftComponent;
