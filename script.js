const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
currentDateParagraph.textContent = formattedDate;
const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const month = date.getMonth() + 1;
const minutes = date.getMinutes();
