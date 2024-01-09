import { Button } from '@mui/material';
import React from 'react'

const BlurBookButton = () => {
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
          fontWeight:'bold',
          opacity:'40%'
        }}
      >
        Book
      </Button>
  )
}

export default BlurBookButton;