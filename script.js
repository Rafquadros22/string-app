
//declared variables//

var generateBtn = document.querySelector("#generate");


var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var specialCharacters = ["!", "@", "#", "%", "^", "&", "*", "(", ")"];


var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");


var userChoice = [];


var passwordUser = "";


    //function//
    function writePassword() {
    passwordUser = "";


    var length = prompt("Choose a number between 8 -128!");
   
    if (length < 8 || length > 128) {
        alert("Password must be between 8 and 128!");
        return
    }
   
    
    
    var upperChar = confirm("Do you want to include upper case letters?");
   
    var lowerChar = confirm("Do you want to include lower case letters ?");
   
    var number = confirm("Do you want to include numbers?");
   
    var specialChar = confirm("Do you want to to include symbols?");
        
        // if statements//
    if (!(specialChar || lowerChar || number || upperChar)) {
        alert("You must choose  at least one character!");
        return
    };

    if (upperChar) userChoice = userChoice.concat(upperCase);
    
    if (lowerChar) userChoice = userChoice.concat(lowerCase);
    
    if (number) userChoice = userChoice.concat(numChar);
    
    if (specialChar) userChoice = userChoice.concat(specialCharacters);
 
    // while loop//
    while (passwordUser.length < length) {
       
        var x = Math.floor(Math.random() * userChoice.length)
        
        var newVar = userChoice[x]
        
        passwordUser = passwordUser + newVar;

    
     }

    
    var passwordText = document.querySelector("#password");

    passwordText.value = passwordUser;

    }

    generateBtn.addEventListener("click", writePassword);

        