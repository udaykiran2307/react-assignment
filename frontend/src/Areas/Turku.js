import React from 'react'
import { groupByDay } from '../Utils/getTimeAndDate';
import AvailableShiftEntry from '../SubComponents/AvailableShiftEntry';

const Turku = ({data}) => {
    const dateArr = groupByDay(data);
    console.log("Helsinki comp", data);
    return (
      <div style={{ width: "100%" }}>
        {dateArr.map((e) => (
          <AvailableShiftEntry date={e.date} items={e.items} />
        ))}
      </div>
    );
}

export default Turku;