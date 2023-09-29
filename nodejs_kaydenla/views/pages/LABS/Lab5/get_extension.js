// This file was created by Kayden La.

// List of valid element ID calls.
document.getElementById("get_extension").innerHTML = get_extension();

// Callable functions

function get_extension(e){
  // Get user_input from id of text box.
  // e == 1 if var comes from text box. e == 2 if var comes from file select.
  if (e == 1){
    var filename = document.getElementsByName('user_input')[0].value;
  }
  if (e == 2){
    var filename = document.getElementById('myfile').files[0].name;
  }

  var response = ""

  // Slice with error catching
  if (filename.lastIndexOf(".") > 0){
    if ( filename.length > filename.lastIndexOf(".")+1){
      response = filename.slice(filename.lastIndexOf(".") + 1)
    }else{
      response = "Error: file extension cannot be zero characters long."
    }
  } else{
    response = "Error: File extension not found. Please input full filename with extension."
  }
    return response;
}

function get_extension_event(event){
  // if inputbox detects enter key, print formated text + call get_extension()
  if (event.keyCode == 13){
    document.getElementById('extension').innerHTML = '<b>Output: </b>' + get_extension(1)
  }
}
