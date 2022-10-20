'use strict'

var generateBtn = document.querySelector("#generate");

//Created a global object hoding all the arrays that will be used in the writePassword function.
const charSets = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  symbols: ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', ']'],
};

function writePassword() {
  // Setup for prompt validation. Returns a number from string input. If it isn't a number, it will ask the user to try again.
  const promptLength = parseInt(prompt('How many characters would you like in your password?(8-128)'));
  if (!promptLength || promptLength < 8 || promptLength > 128) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')
    return
  };
  var setList = [];
  // Using a while loop to iterate over each criteria and concatenate them with each user input. 
  while (setList.length == 0) {
    if (confirm('Would you like lowercase letters in your password?')) {
      setList = setList.concat(charSets.lowerCase)
    };

    if (confirm('Would you like uppercase letters in your password?')) {
      setList = setList.concat(charSets.upperCase)
    };

    if (confirm('would you like numbers in your password?')) {
      setList = setList.concat(charSets.nums)
    };

    if (confirm('would you like special characters ($,%,& etc.) in your password?')) {
      setList = setList.concat(charSets.symbols)
    };

    if (setList.length == 0) {
      alert('You must choose at least one criteria, try again!')
      return
    };
  };

  var password = [];
  //  loop over promptLength and let the Math.floor/random formula to choose variables in array. 👇
  for (var i = 0; i < promptLength; i++) {
    var chooseSetlist = setList[Math.floor(Math.random() * setList.length)];
    password.push(chooseSetlist);
  }
  const finalResult = password.join('');
  printPassword(finalResult);
}

// This function is executed after the password has been generated.
function printPassword(finalResult) {
  const passwordText = document.querySelector("#password");
  passwordText.value = finalResult;
}

// Adds event listener to generate button.
generateBtn.addEventListener("click", writePassword);
