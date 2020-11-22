// Assignment Code
var generateBtn = document.querySelector("#generate");
var submit = document.querySelector("#submit");
var upperCaseBox = document.querySelector("#upperCaseBox");
var lowerCaseBox = document.querySelector("#lowerCaseBox");
var symbolBox = document.querySelector("#symbol");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
    


  return chosenCharacters

}


submit.addEventListener("click", writePassword);





// length slider complexity
let complexity = document.getElementById("slider").value;






// document.getElementById("upperCaseBox");



//set default length display 8
document.getElementById("length").innerHTML = "Length: 16";

// slider changes # in length
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;

  }
  else {
    document.getElementById.apply("length").innerHTML = "Length: 8"
  }
}