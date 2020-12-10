
var generateBtn = document.querySelector("#generate");
var pwTextArea = document.querySelector("#password")

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

    var newPassword = "";
    var passwordCharSet = "";
  
    var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
  
    if ((passwordLengthUser < 8) , (passwordLengthUser > 128) , isNaN(passwordLengthUser)) {
        alert("Please enter a number between 8 and 128!");
        return;
    }
    
    var lowercaseCharactersChoice = confirm("Sprinkle in some lowercase characters?");
    
    if (lowercaseCharactersChoice) {
       passwordCharSet += lowercaseCharacters;
    }
  



}