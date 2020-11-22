// Assignment Code
var generateBtn = document.querySelector("#generate");
var submit = document.querySelector("#submit");
var upperCaseBox = document.querySelector("#upperCaseBox");
var lowerCaseBox = document.querySelector("#lowerCaseBox");
var symbolBox = document.querySelector("#symbol");
var slider = document.getElementById("slider");




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  $('#modal').modal('hide')
  console.log(password)
}




// When a password is generated, it must adhere to chosen parameters
// Parameters include, number of characters, upper case, lower case and symbols.

function generatePassword() {
  var chosenCharacters = "";
  // upper case if statement
  if (upperCaseBox.checked === true) {
    var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chosenCharacters = upperCaseCharacters;
    console.log(chosenCharacters)
  }
  // lower case if statement
  if (lowerCaseBox.checked === true) {
    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    chosenCharacters = lowerCaseCharacters.concat(chosenCharacters);
    console.log(chosenCharacters)
  }
  // Symbols if statement
  if (symbolBox.checked === true) {
    var symbolCharacters = "~!@#$%^&*()_+=-`{}:<>?[]';/./,";
    chosenCharacters = symbolCharacters.concat(chosenCharacters);
    console.log(chosenCharacters)
  }
  // Generating the p
  var password = "";
  for (var i = 0; i < slider.value; i++) {
    password = chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length)).concat(password);
  }
  
  console.log(password)
  return password
  
}


submit.addEventListener("click", writePassword);





// slider changes # in length
slider.oninput = function () {
  if (slider.value > 0) {
    document.getElementById("length").innerHTML = "Length: " + slider.value;


  }
  else {
    document.getElementById.apply("length").innerHTML = "Length: 8"
  }
}