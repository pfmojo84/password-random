// Assignment Code
var generateBtn = document.querySelector("#generate");

//create a function to get the randomized password and define variables as strings for possible password character options
  function getPassword() {
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialChar = "!@#$%^&*()-=+<>?/|':[]{}";
    var randomChoice = "";
    var randKey = "";

//Users require a series of prompts to define length of password and acknowledge character criteria for randomized password
    var passLength = prompt(
        "Passwords must be between 8 and 128 characters long. Please enter the length of your password."
    );

//Based on tutor feedback - added console.log to test steps/variables once function is complete
//console.log("password length", passLength) 

     if (passLength < 8 || passLength > 128 || isNaN(passLength)){
        alert("Passwords must be between 8 and 128 characters long. Please enter another number within this range.")
        return; 

       
//Generate follow up prompts to confirm criteria of randomized password for user. Create additional variab
    } else {
      var upperLetter = confirm("Your password will contain a variety of uppercase letters. Click Ok to Continue.");
      var lowerLetter = confirm("Your password will contain a variety of lowercase letters. Click Ok to Continue.");
      var numbOptions = confirm("Your password will contain random numbers. Click Ok to Continue.");
      var symbolOps = confirm("Your password will contain a variety of symbols. Click Ok to Continue.")
      }

//console.log("choices", upperLetter, lowerLetter, numbOptions, symbolOps)

    if (upperLetter) {randomChoice += upperCaseLetters;}
    if (lowerLetter) {randomChoice += lowerCaseLetters;}
    if (numbOptions) {randomChoice += numbers;}
    if (symbolOps) {randomChoice += specialChar;}

//console.log ("possible password choices", randomChoice)

//Create 'for' loop to repeat for each character of passLength.
    for (i = 0; i < passLength; i++) {

//Use methods to create random password for the length defined by the user
    randKey += randomChoice[Math.floor(Math.random() * randomChoice.length)]

//console.log ("incrementing addition of characters", randKey[i])   

    }
    return(randKey)

  }


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword); 
  