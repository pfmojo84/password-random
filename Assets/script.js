// Assignment Code
var generateBtn = document.querySelector("#generate");

//create a function to get the randomized password and define variables as strings for possible password character options
  function getPassword() {
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialChar = "!@#$%^&*()-=+<>?/|':[]{}";
    var randSelect = "";
    var randKey = "";

  }


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); 
  