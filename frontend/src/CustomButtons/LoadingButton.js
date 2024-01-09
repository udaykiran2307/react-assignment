import { Button } from "@mui/material";
// import { ReactComponent as LoadingIcon } from "spinner_green.svg";

const LoadingButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        textTransform: "none",
        color: "#16A64D",
        borderColor: "#55CB82",
        width: "6.5rem",
        height:'2.4rem',
        borderRadius: "1rem",
        fontWeight: "bold",
      }}
    >
      <img
        src="spinner_green.svg" 
        alt="Loading Icon"
        style={{ width: "100%", height: "100%" }}
      />
    </Button>
  );
};

export default LoadingButton;
