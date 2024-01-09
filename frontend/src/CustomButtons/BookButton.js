import { Button } from "@mui/material";

const BookButton = () => {
    return (
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#16A64D",
          borderColor: "#55CB82",
          width: "6.5rem",
          borderRadius: "1rem",
          fontWeight:'bold'
        }}
      >
        Book
      </Button>
    );
  };
  
  export default BookButton;