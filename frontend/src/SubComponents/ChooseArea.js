import { Button } from "@mui/material";
import React, { useState } from "react";

const ChooseArea = () => {
  const [area, setArea] = useState(0);

  const handleClick = (val) => {
    setArea(val);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        color: "#A4B8D3",
        height: "3rem",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <Button
        variant="text"
        onClick={() => {
          handleClick(0);
        }}
        style={{
          color: area === 0 ? "#004FB4" : "#A4B8D3",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Helsinki <span style={{marginLeft:'5px'}}>({5})</span>
      </Button>
      <Button
        onClick={() => {
          handleClick(1);
        }}
        style={{
          color: area === 1 ? "#004FB4" : "#A4B8D3",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Tampere <span style={{marginLeft:'5px'}}>({3})</span>
      </Button>
      <Button
        onClick={() => {
          handleClick(2);
        }}
        style={{
          color: area === 2 ? "#004FB4" : "#A4B8D3",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Turku <span style={{marginLeft:'5px'}}>({8})</span>
      </Button>
    </div>
  );
};

export default ChooseArea;
