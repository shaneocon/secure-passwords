var generateBtn = document.querySelector("#generate");


var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";


function generatePassword() {

    var password = "";
    var passwordChar = "";
    //    creates user prompt to select password length
    var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
    passwordLengthUser = parseInt(passwordLengthUser);

    if (passwordLengthUser < 8) {
        alert("Password must have more than 7 characters!");
        return "";
    }

    if (passwordLengthUser > 128) {
        alert("Password much not have more than 128 characters!");
        return ""
    }

    //  creates confirm boolean for lowercase "yes or no"
    var lowercaseCharactersChoice = confirm("Sprinkle in some lowercase characters?");

    if (lowercaseCharactersChoice) {
        passwordChar += lowercaseChar;
    }
    //  creates confirm boolean for uppercase "yes or no"
    var uppercaseCharactersChoice = confirm("How about a few uppercase letters?");

    if (uppercaseCharactersChoice) {
        passwordChar += uppercaseChar;
    }
    //  creates confirm boolean for lowercase "yes or no"
    var numericalCharactersChoice = confirm("What’s a password without a couple of numbers? Would you like to add them to yours?");

    if (numericalCharactersChoice) {
        passwordChar += numericalChar;
    }
    //  creates confirm boolean for special characters "yes or no"
    var specialCharacterChoice = confirm("Your password is pretty secure already, but how about a dash of special characters?");

    if (specialCharacterChoice) {
        passwordChar += specialChar;
    }

    for (var i = 0; i < passwordLengthUser; i++) {
        password = passwordChar[Math.floor(Math.random() * passwordChar.length)];
        password.push(passwordChar)
    }
    {
    return password.join("");
    }   
    
    function writePassword(password){
        var password = generatePassword();
        var pwTextArea = document.getElementById("#password");
        pwTextArea.value = password;
        return ("") 
    }
    
}

generateBtn.addEventListener("click", generatePassword);

