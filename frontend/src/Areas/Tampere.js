import React from "react";
import AvailableShiftEntry from "../SubComponents/AvailableShiftEntry";
import { groupByDay } from "../Utils/getTimeAndDate";

const Tampere = ({data}) => {
  const dateArr = groupByDay(data);

  return (
    <div style={{ width: "100%" }}>
      {dateArr.map((e) => (
        <AvailableShiftEntry date={e.date} items={e.items} />
      ))}
    </div>
  );
};

export default Tampere;
