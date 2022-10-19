'use strict'

var generateBtn = document.querySelector("#generate");

const charSets = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  symbols: ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', ']'],
};

var promptLower;
var promptUpper;
var promptNums;
var promptSymbols;
var setList;

function writePassword() {
  // Setup for prompt validation. Returns a number from string input. If it isn't a number, it will ask the user to try again.
  const promptLizard = prompt('How many characters would you like in your password?(8-128)')
  const promptLength = parseInt(promptLizard)
  if (!promptLength) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')

  } else if (promptLength < 8 || promptLength > 128) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')

  } else {
    promptLower = confirm('Would you like lowercase letters in your password?')
    promptUpper = confirm('Would you like uppercase letters in your password?')
    promptNums = confirm('would you like numbers in your password?')
    promptSymbols = confirm('would you like special characters ($,%,& etc.) in your password?')
  };

  /// Logical conditionals for prompt/confirm choices. Total of 16 possible concatenations.
  // If none are chosen 👇
  if (!promptLower && !promptUpper && !promptNums && !promptSymbols) {
    setList = alert('You must choose at least one option, try again!')

  } // If all criteria are chosen 👇 
  else if (promptLower && promptUpper && promptNums && promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.upperCase, charSets.nums, charSets.symbols);
  }
  // If three criteria are chosen 👇
  else if (!promptLower && promptUpper && promptNums && promptSymbols) {
    setList = charSets.upperCase.concat(charSets.nums, charSets.symbols);
  } else if (promptLower && !promptUpper && promptNums && promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.nums, charSets.symbols);
  } else if (promptLower && promptUpper && !promptNums && promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.upperCase, charSets.symbols);
  } else if (promptLower && promptUpper && promptNums && !promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.upperCase, charSets.nums);

  } // If two criteria are chosen 👇
  else if (!promptLower && !promptUpper && promptNums && promptSymbols) {
    setList = charSets.nums.concat(charSets.symbols);
  } else if (promptLower && promptUpper && !promptNums && !promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.upperCase);
  } else if (!promptLower && promptUpper && promptNums && !promptSymbols) {
    setList = charSets.upperCase.concat(charSets.nums);
  } else if (promptLower && !promptUpper && !promptNums && promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.symbols);
  } else if (promptLower && !promptUpper && promptNums && !promptSymbols) {
    setList = charSets.lowerCase.concat(charSets.nums);
  } else if (!promptLower && promptUpper && !promptNums && promptSymbols) {
    setList = charSets.upperCase.concat(charSets.symbols);
  }
  // If one criteria is chosen 👇
  else if (promptLower && !promptUpper && !promptNums && !promptSymbols) {
    setList = charSets.lowerCase;
  } else if (!promptLower && promptUpper && !promptNums && !promptSymbols) {
    setList = charSets.upperCase;
  } else if (!promptLower && !promptUpper && promptNums && !promptSymbols) {
    setList = charSets.nums;
  } else if (!promptLower && !promptUpper && !promptNums && promptSymbols) {
    setList = charSets.symbols;
  }


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
