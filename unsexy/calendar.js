// get startDate from query string
const queryStringObj = new URLSearchParams(location.search);
const startDate = new Date(queryStringObj.get("startDate"));
const today = new Date("2023-08-18");
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();
const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

function requireReportNum(start_date, today) {
  let days = Math.floor((today - start_date) / 1000 / 60 / 60 / 24) + 1;
  const originDays = days;
  days -= Math.floor(days / 7) * 2;
  // 토요일 일요일 제외
  if (originDays > 5 && originDays % 7 === 6) {
    days -= 1;
  }
  return days;
}

// document.getElementById('year').innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("date").innerText = date;
document.getElementById("day").innerText = dayNames[day];
console.log("!!!", startDate, today);
document.getElementById("count").innerText = requireReportNum(startDate, today);
