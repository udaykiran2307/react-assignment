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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
        }}
      >
         <div>12:00-14:00</div>
         <div>
        <div>{status}</div>
        <CustomButton type={buttonStatus}/>
        </div> 
      </div>
    );
  };

export default AvailableShiftEntry