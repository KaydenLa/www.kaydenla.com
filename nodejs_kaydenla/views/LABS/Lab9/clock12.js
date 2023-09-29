// This file belongs to Kayden L

// Run clock initization function
var current_time = 0
init();

function init(){
  updateContent()
  setInterval(updateContent, 1000)
}

function clock(){
  // Set current_time to now
  var now = new Date();
  current_time = now.getHours() + "<font color=green>:</font>" + now.getMinutes() + "<font color=green>:</font>" + now.getSeconds()
}

function updateContent (){
  // Print results by ID in clock_text
  clock();
  document.getElementById("clock_text").innerHTML = current_time;
}
