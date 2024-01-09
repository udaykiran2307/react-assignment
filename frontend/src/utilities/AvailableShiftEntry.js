import React from 'react'
import CustomButton from '../Components/CustomButton';


const AvailableShiftEntry = ({status,buttonStatus}) => {
    return (
      <div
        style={{
          width: "100%",
          height: "2rem",
          backgroundColor: "#FFFF",
          color: "#4F6C92",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "8px",
        }}
      >
      
        <div>{status}</div>
        <CustomButton type={buttonStatus}/>
      </div>
    );
  };

export default AvailableShiftEntry