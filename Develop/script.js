var currentDay = document.querySelector("#currentDay");
var currentTime = moment();

currentDay.textContent = currentTime.format("MMM DD, YYYY  - hh:mm a");


