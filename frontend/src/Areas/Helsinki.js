import React, { useContext, useEffect, useState } from 'react'
import { ShiftContext } from '../Context/ShiftContext';
import HeadAvailableComponent from '../SubComponents/HeadAvailableComponent';
import AvailableShiftEntry from '../SubComponents/AvailableShiftEntry';
import { groupByDay } from '../Utils/getTimeAndDate';


const Helsinki = ({data}) => {
    // const [today, setToday] = useState(0);
    // const [Tommorow, setTommorow] = useState(0);
    // const { shiftData, setShiftData } = useContext(ShiftContext);
    // const available = shiftData.filter((e) => e.booked === false);
    // const helsinki = available.filter((e) => e.area === "Helsinki");
    const dateArr = groupByDay(data);
    console.log("Helsinki comp",data);
  return (
    <div style={{width:'100%'}}>
    {
       dateArr.map((e)=>(
    
        <AvailableShiftEntry date={e.date} items={e.items}/>
       ))
        
    }
    </div>
  )
}

export default Helsinki