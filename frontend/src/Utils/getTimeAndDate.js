const getTimeAndDate = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();

  let formattedTime = hours + ":" + minutes.substring(0, 2);

  return  formattedTime ;
};

const groupByDay = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    const date = new Date(item.startTime);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
    }).format(date);

    if (groupedData[formattedDate]) {
      groupedData[formattedDate].items.push(item);
    } else {
      groupedData[formattedDate] = { date: formattedDate, items: [item] };
    }
  });

  const resultArray = Object.values(groupedData);

  return resultArray;
};

function groupOfMyShiftData(data) {
  const groupedData = {};

  data.forEach(item => {
    const dateKey = new Date(item.startTime).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric'
    });

    if (!groupedData[dateKey]) {
      groupedData[dateKey] = {
        date: dateKey,
        items: [],
        totalTime: 0
      };
    }

    const durationInHours = (item.endTime - item.startTime) / (1000 * 60 * 60);
    groupedData[dateKey].items.push(item);
    groupedData[dateKey].totalTime += durationInHours;
  });

  return Object.values(groupedData);
}



  const isOverlapping = (shiftData, startTime, endTime) => {
   
    const inputStartTime = typeof startTime === 'number' ? startTime : new Date(startTime).getTime();
    const inputEndTime = typeof endTime === 'number' ? endTime : new Date(endTime).getTime();
   
    const myShiftData = shiftData.map((e)=>e.booked === true);
    
    if(!myShiftData)return false;
    
    for (const shift of myShiftData) {
      const shiftStartTime = shift.startTime;
      const shiftEndTime = shift.endTime;
  
     
      if (
        (inputStartTime >= shiftStartTime && inputStartTime < shiftEndTime) ||
        (inputEndTime > shiftStartTime && inputEndTime <= shiftEndTime) ||
        (inputStartTime <= shiftStartTime && inputEndTime >= shiftEndTime)
      ) {
        
        return true;
      }
    }
  
    
    return false;
  };
  
 




module.exports = { getTimeAndDate, groupByDay,groupOfMyShiftData,isOverlapping };
