var currentDay = document.querySelector("#currentDay");
var currentTime = moment();

currentDay.textContent = currentTime.format("MMM DD, YYYY  - hh:mm a");


var workHour = {
    
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
  for(const property in workHour) {
    let textEntry = "#text-entry-" + counter;
    $(textEntry).text(workHour[property]);
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

  $(document).ready(function(){
    if(!localStorage.getItem('workHour')) {
      updateCalendarTasks(workHour);
    } else {
      updateCalendarTasks(JSON.parse(localStorage.getItem('workHour')));
    }
  })

  $("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
  });
  

  function saveSchedule(hourString, val) {
    if(!localStorage.getItem('workHour')) {
      createLocalStorage();
    }
  
    let workHours = JSON.parse(localStorage.getItem('workHour'));
    workHours[hourString] = val
  
    saveToLocalStorage(workHours);
  }

  function createLocalStorage() {
    localStorage.setItem('workHour', JSON.stringify(workHour));
  };
  
  function saveToLocalStorage(dayObj) {
    localStorage.setItem('workHour', JSON.stringify(dayObj));
  }
  

  function loadCorrectDataset() {
    result = localStorage.getItem('workHour')
    return (result ? result : workHour);
  } 

  function updateCalendarTasks(dayObject) {
    $(".row").each(function(index) {
      let res = $(this).children("div");
      $(this).children("textarea").text(dayObject[res.text()]);
    })
  }