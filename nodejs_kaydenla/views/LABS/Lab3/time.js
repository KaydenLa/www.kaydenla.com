// This file was created by Kayden La.

// List of valid element ID calls.
document.getElementById("display_day").innerHTML = display_day();
document.getElementById("display_time").innerHTML = display_time();

// Callable functions.
function display_day(){
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  response = 'Today is: ' + daylist[day];
    return response;
    }

function display_time(){
  var today = new Date();
  var hour = today.getHours()
  var minute = today.getMinutes();
  var second = today.getSeconds();

  // Check if current time is AM or PM.
  if (hour < 12){
    am_pm = "AM"
    }
  if (hour > 12) {
    am_pm = "PM"
    hour = hour - 12
  }
  if (hour == 12){
    am_pm = "PM"
  }

  // Formatting.
  if (hour == 0){
    hour = 12
  }
  if (hour < 10){
    hour = "0"+hour
  }
  if (minute < 10){
    minute = "0"+minute
  }
  if (second < 10){
    second = "0"+second
  }

  var time = hour + " "+ am_pm + " : "  + minute + " : " + second;
  response = 'Current time is: ' + time;
    return response;
}
