import { Button } from "@mui/material";
import React from "react";

const CancelButton = ({id,handleCancel}) => {
  
  const handleClick=()=>{
    handleCancel(id);
}


  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "none",
        color: "#E2006A",
        borderColor: "#FE93B3",
        width: "6.5rem",
        height:"2.4rem",
        borderRadius: "1rem",
        fontWeight:'bold'
      }}
      onClick={handleClick}
    >
      Cancel
    </Button>
  );
};




export default CancelButton;
