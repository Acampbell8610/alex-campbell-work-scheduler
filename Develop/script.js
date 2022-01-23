var currentDay = document.querySelector("#currentDay");
var currentTime = moment();

currentDay.textContent = currentTime.format("MMM DD, YYYY  - hh:mm a");


var workDay = {
    
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };
  //converting string to numbers
  function hourNumberFromHourString(hourString) {
    switch(hourString) {
     
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 PM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
    }
  }
  
  
  
  var counter = 1;
  for(const property in workDay) {
    let textEntry = "#text-entry-" + counter;
    $(textEntry).text(workDay[property]);
    let timeId = "#time" + counter;
    let presentHour = moment().hour();
    let timeString = $(timeId).text();
    let timeNumber = hourNumberFromHourString(timeString);  
    ///check what color the text area should be
    if(timeNumber < presentHour) {
      $(textEntry).addClass("past");
    } else if (timeNumber > presentHour) {
      $(textEntry).addClass("future");
    } else {
      $(textEntry).addClass("present");
    }
    counter ++;
  }
  
  $("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
  });
  
  
  