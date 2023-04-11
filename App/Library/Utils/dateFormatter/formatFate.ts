export const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const meridiem = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

//   return `${days[date.getUTCDay()]}, ${
//     months[date.getUTCMonth()]
//   } ${date.getUTCDate()}, ${formattedHours}:${formattedMinutes}${meridiem}`;
  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${formattedHours}:${formattedMinutes}${meridiem}`;

};
