// Assignment code here
var password = []
var characterSelections = []
var chosenPassLength = ""

var allCharVars = {
  uppers : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowers : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  specials : ["'","~","!","@","#","$","%","^","&","*","_","-","+","=","`","|","(",")","{","}","[","]",":",";","<",">",",",".","?"],
  numbers : ["1","2","3","4","5","6","7","8","9","0"]
}


var promptInputs = function() {
  //empties character selections and pass length variables
  
}

//function to determine prompt conditions. iterate through list x times to append to characterSelections
var characterSelectors = function() {
    
    characterSelections = []
    chosenPassLength = ""

    // takes inputs for each prompt
    var passUppers = window.prompt("would you like to include upper case letters?")
    var passSpecials = window.prompt("would you like to include special characters")
    var passLowers = window.prompt("would you like to include lowercase letters?")
    var passNumbers = window.prompt("would you like to include numbers")
    var passLength = window.prompt("how many characters would you like? please pick between 8 and 128")     

    if ((passUppers === "" || passUppers === null || passUppers.toLowerCase().includes('n')) && (passLowers === "" || passLowers === null || passLowers.toLowerCase().includes("n")) && (passSpecials === "" || passSpecials === null || passSpecials.toLowerCase().includes("n")) && (passNumbers === "" || passSpecials === null || passNumbers.toLowerCase().includes("n"))) {
      window.alert("you need to select at least one character type");
      characterSelectors();
    }
   
    else if (passLength === "" || passLength === null || parseInt(passLength) < 8 || parseInt(passLength) > 128) {
      window.alert("you need to pick a valid number between 8 and 128")
      characterSelectors();
    }
    //makes sure each prompt var is not null and includes y then adds to array of character types
    else {
      if (passUppers !== null && passUppers.toLowerCase().includes('y')) {
        console.log('uppers');
        characterSelections.push("uppers");
      } 
      if (passLowers !== null && passLowers.toLowerCase().includes('y')) {
        console.log('lowers');
        characterSelections.push("lowers");
      }
      if (passSpecials !== null && passSpecials.toLowerCase().includes('y')) {
        console.log('specials');
        characterSelections.push('specials');
      }
      if (passNumbers !== null && passNumbers.toLowerCase().includes('y')) {
        console.log('numbers');
        characterSelections.push('numbers')
      }
      chosenPassLength = passLength
    }
    console.log(characterSelections)
    
  }

  // var generatePassword = function() {
  //   for 
  // }

  characterSelectors();

    // console.log(characterSelections)
    // if (promptUppers.toLowerCase().includes('n') && passLowers.includes('n') && passSpecials.includes('n') && passNumbers.includes('n')) {
    // console.log("noChar")
    // }
    // else if (promptUppers.toLowerCase().includes('y') && passLowers.toLowerCase().includes('y') && passSpecials.toLowerCase().includes('y') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allChar")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('y') && passSpecials.toLowerCase().includes('y') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allCharNoUppers")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('n') && passSpecials.toLowerCase().includes('y') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allCharNoUppersNoLowers")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('n') && passSpecials.toLowerCase().includes('n') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allCharNoUppersNoLowersNoSpecials")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('n') && passSpecials.toLowerCase().includes('y') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allChar")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('y') && passSpecials.toLowerCase().includes('y') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allCharNoUppers")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('n') && passSpecials.toLowerCase().includes('y') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allCharNoUppersNoLowers")
    // }
    // else if (promptUppers.toLowerCase().includes('n') && passLowers.toLowerCase().includes('n') && passSpecials.toLowerCase().includes('n') && passNumbers.toLowerCase().includes('y')) {
    //   console.log("allCharNoUppersNoLowersNoSpecials")
    // }
  // }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("password button click")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
