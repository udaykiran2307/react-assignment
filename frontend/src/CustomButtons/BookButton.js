import { Button } from "@mui/material";

const BookButton = ({id,handleBooking}) => {
    
   const handleClick=()=>{
       handleBooking(id);
   }

    return (
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#16A64D",
          borderColor: "#55CB82",
          width: "6.5rem",
          height:"2.4rem",
          borderRadius: "1rem",
          fontWeight:'bold'
        }}
        onClick={handleClick}
      >
        Book
      </Button>
    );
  };
  
  export default BookButton;