// setting variables
var passwordCharacters = []
var characterSelections = []
var searchList = []
var passLength;


//object variable that holds lists of different character types
var allCharsVar = {
  uppers : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowers : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  specials : ["'","~","!","@","#","$","%","^","&","*","_","-","+","=","`","|","(",")","{","}","[","]",":",";","<",">",",",".","?"],
  numbers : ["1","2","3","4","5","6","7","8","9","0"]
}
//function to generate password
var generatePassword = function() {
// adds desired character types to array for reference in next loop
  for (element of characterSelections) {
    searchList = searchList.concat(allCharsVar[element])
  }
// loops through array with math random and selects character user input number of times
  for (i=0; i<passLength; i++) {
    passwordCharacters.push(searchList[(Math.floor(Math.random() * searchList.length))])
  }
  return passwordCharacters.join("")
}

//function to determine prompt conditions. iterate through list x times to append to characterSelections
var characterSelectors = function() {
    // setting my characterSelections list to blank after each iteration
    characterSelections = []
    // creating a constant with available "yes" answers 
    const yesAnswers = ['yes', 'yeah', 'yup', 'hell yeah', 'y']
    // takes inputs for each prompt and assigns a boolean value to each if the answer is in the yes const
    const upperInput = window.prompt("would you like to include upper case letters?").toLowerCase()
    var passUppers = yesAnswers.includes(upperInput)
    
    const specialInput = window.prompt("would you like to include special characters").toLowerCase() === 'yes'
    var passSpecials = yesAnswers.includes(specialInput)
    const lowerInput = window.prompt("would you like to include lowercase letters?").toLowerCase() === 'yes'
    var passLowers = yesAnswers.includes(lowerInput)
    const numbersInput = window.prompt("would you like to include numbers").toLowerCase() === 'yes'
    var passNumbers = yesAnswers.includes(numbersInput)
    passLength = window.prompt("how many characters would you like? please pick between 8 and 128")     
    // if all inputs don't return true, window starts you over (we have to have at least one character type to generate the password)
    if (!passUppers && !passLowers && !passSpecials && !passNumbers) {
      window.alert("you need to select at least one character type");
      characterSelectors();
    }
    //if the parsed integer does not satisfy the below requirements
   else if( !(parseInt(passLength) <= 128) || !(parseInt(passLength) >=8)){
    // else if (passLength === "" || passLength === null || parseInt(passLength) < 8 || parseInt(passLength) > 128) {
      window.alert("you need to pick a valid number between 8 and 128")
      characterSelectors();
    }
    //adds character type to characterSelections if true
    else {
      if (passUppers) {
        characterSelections.push("uppers");
      } 
      if (passLowers) {
        characterSelections.push("lowers");
      }
      if (passSpecials) {
        characterSelections.push('specials');
      }
      if (passNumbers) {
        characterSelections.push('numbers')
      }
    }
    
  }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  characterSelectors();
  var password = generatePassword(characterSelections);
  var passwordText = document.querySelector("#password");
  console.log("password button click")
  passwordText.value = password

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
