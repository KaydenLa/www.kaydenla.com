// This file was created by Kayden La.

// List of valid element ID calls.
document.getElementById("display_absolute_path").innerHTML = display_absolute_path();

// Callable functions.
function display_absolute_path(){
  var current_path = window.location.href;
  response = 'The Current Absolute Path of This Page: ' + current_path;
    return response;
}
