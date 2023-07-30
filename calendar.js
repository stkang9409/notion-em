const getKoreanDate = (date) => {
  const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() + timezoneOffset + 9 * 60 * 60 * 1000);
};

const getLocalDate = (date) => {
  const timezoneOffset = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() + timezoneOffset);
};
// get startDate from query string
const queryStringObj = new URLSearchParams(location.search);
const startDate = queryStringObj.get("startDate")
  ? getLocalDate(new Date(queryStringObj.get("startDate")))
  : new Date(document.getElementById("month").dataset.start);
const today = getKoreanDate(new Date());
console.log("!!!", startDate, today);
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();
const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

function requireReportNum(start_date, today) {
  let days = Math.floor((today - start_date) / 1000 / 60 / 60 / 24) + 1;
  if (29 <= days && days <= 35) {
    days = 28;
  } else if (days > 35) {
    days = days - 7;
  }

  days -= Math.floor(days / 7);

  return days;
}

// document.getElementById('year').innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("date").innerText = date;
document.getElementById("day").innerText = dayNames[day];
document.getElementById("count").innerText = requireReportNum(startDate, today);
