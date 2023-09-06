function toChangeDate(unFormat) {
  const months = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const dateObj = new Date(unFormat);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  const monthName = months[month];

  const fixDate = `${day.toString().padStart(2, "0")}-${monthName}-${year}`;
  //   console.log(fixDate);
  return fixDate;
}

function toChangTime(unFormat) {
  const dateObj = new Date(unFormat);
  const hour = dateObj.getHours().toString().padStart(2, "0");
  const minute = dateObj.getMinutes().toString().padStart(2, "0");

  return `${hour}:${minute}`;
}
export { toChangeDate, toChangTime };
