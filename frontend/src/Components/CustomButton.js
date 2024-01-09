import { Button } from '@mui/material';
import React from 'react'

const CustomButton = ({type}) => {
  return (
    <Button variant="outlined" style={{borderRadius:'1rem' ,color:'#E2006A', borderColor:'#E2006A'}}><h5>{type}</h5></Button>
  )
}

export default CustomButton;