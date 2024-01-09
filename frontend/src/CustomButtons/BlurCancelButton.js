import { Button } from '@mui/material'
import React from 'react'

const BlurCancelButton = () => {
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
        fontWeight:'bold',
        opacity:'50%'
      }}
    >
      Cancel
    </Button>
  )
}

export default BlurCancelButton