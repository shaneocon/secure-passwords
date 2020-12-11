var generateBtn = document.querySelector("#generate");


var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[\^_`{|}~";
var password1 = [];


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
        password1.push(password)

        // {
        //     return password.join("");
        // }
    }

    var condensedPassword1 = password1.join("");
    console.log(condensedPassword1)
    return condensedPassword1;
}

function getRandom() {
    var password = generatePassword();
    console.log(password)
    var pwTextArea = document.querySelector("#password");
    pwTextArea.value = password;
  
}



generateBtn.addEventListener("click", getRandom);


// These were suggestions from the BCSLearningAssistant but I'm unsure of where to implement them to get the code working.  

//
//
//

//  Function for getting a random element from an array
// function getRandom(arr) {
//     var randIndex = Math.floor(Math.random() * arr.length);
//     var randElement = arr[randIndex];

//     return randElement;
//   }

// Conditional statement that adds array of special characters into array of possible characters based on user input
// Push new random special character to guaranteedCharacters
//   if (options.hasSpecialCharacters) {
//     possibleCharacters = possibleCharacters.concat(specialCharacters);
//     guaranteedCharacters.push(getRandom(specialCharacters));

// For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
// for (var i = 0; i < options.length; i++) {
//     var possibleCharacter = getRandom(possibleCharacters);

//     result.push(possibleCharacter);
//   }