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

  return { date: month + " " + day, time: formattedTime };
};

const groupByDay = (data) => {
    const groupedData = {};

    
    data.forEach((item) => {
      // Convert the timestamp to a date
      const date = new Date(item.startTime);
  
      // Format the date as "month day" (e.g., "September 21")
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
      }).format(date);
  
      // Check if the formatted date is already a key in the groupedData object
      if (groupedData[formattedDate]) {
        // If the key exists, push the current item to the array
        groupedData[formattedDate].items.push(item);
      } else {
        // If the key doesn't exist, create a new array with the current item
        groupedData[formattedDate] = { date: formattedDate, items: [item] };
      }
    });
  
    // Convert the object values to an array
    const resultArray = Object.values(groupedData);
  
    return resultArray;
};

module.exports={getTimeAndDate,groupByDay}
