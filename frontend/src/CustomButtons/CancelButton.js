import { Button } from "@mui/material";
import React from "react";

const CancelButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "none",
        color: "#E2006A",
        borderColor: "#FE93B3",
        width: "6.5rem",
        borderRadius: "1rem",
        fontWeight:'bold'
      }}
    >
      Cancel
    </Button>
  );
};








export default CancelButton;
