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

function groupMyShiftData(data) {
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
module.exports = { getTimeAndDate, groupByDay,groupMyShiftData };
