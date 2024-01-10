import React from 'react'
import { groupByDay } from '../Utils/getTimeAndDate';
import AvailableShiftEntry from '../SubComponents/AvailableShiftEntry';

const Turku = ({data}) => {
    const dateArr = groupByDay(data);
   
    return (
      <div style={{ width: "100%" }}>
        {dateArr.map((e,i) => (
          <AvailableShiftEntry key={i} date={e.date} items={e.items} />
        ))}
      </div>
    );
}

export default Turku;