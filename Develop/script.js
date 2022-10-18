'use strict'
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const charSets = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  symbols: ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', ']'],
};
var passwordLength;
var setList;

function writePassword() {
  //console.log(Math.floor(Math.random() * 10));//Random int from 0 to 9
  //console.log(temp[Math.floor(Math.random() * 26)]); //formula for future parts
  // return
  const promptLizard = prompt('How many characters would you like in your password?(8-128)')
  const promptLength = parseInt(promptLizard)
  if (!promptLength) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')
    return
  } else if (promptLength < 8 || promptLength > 128) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')
    return
  } else {
    const promptLower = confirm('Would you like lowercase letters in your password?')
    const promptUpper = confirm('Would you like uppercase letters in your password?')
    const promptNums = confirm('would you like numbers in your password?')
    const promptSymbols = confirm('would you like special characters ($,%,& etc.) in your password?')
  };

  /// Logical conditionals for prompt choices
  // If none are chosen 👇
  if (!promptLower && !promptUpper && !promptNums && !promptSymbols) {
    setList = alert('You must choose at least one option, try again!')
  } // If all criteria are chosen 👇 
  else if (promptLower && promptUpper && promptNums && promptSymbols) {
    choices = charSets.concat();
  } // If three criteria are chosen 👇
  else if (!promptLower && promptUpper && promptNums && promptSymbols) {
    choices = charSets.concat(upperCase, nums, symbols);
  } else if (promptLower && !promptUpper && promptNums && promptSymbols) {
    choices = charSets.concat(lowerCase, nums, symbols);
  } else if (promptLower && promptUpper && !promptNums && promptSymbols) {
    choices = charSets.concat(lowerCase, upperCase, symbols);
  } else if (promptLower && promptUpper && promptNums && !promptSymbols) {
    choices = charSets.concat(lowerCase, upperCase, nums);
    // If two criteria are chosen 👇
  } else if (!promptLower && !promptUpper && promptNums && promptSymbols) {
    choices = charSets.concat(nums, symbols);
  } else if (promptLower && promptUpper && !promptNums && !promptSymbols) {
    choices = charSets.concat(lowerCase, upperCase);
  } else if (!promptLower && promptUpper && promptNums && !promptSymbols) {
    choices = charSets.concat(upperCase, nums);
  } else if (promptLower && !promptUpper && !promptNums && promptSymbols) {
    choices = charSets.concat(lowerCase, symbols);
  } else if (promptLower && !promptUpper && promptNums && !promptSymbols) {
    choices = charSets.concat(lowerCase, nums);
  } else if (!promptLower && promptUpper && !promptNums && promptSymbols) {
    choices = charSets.concat(upperCase, symbols);
  } // If one criteria is chosen 👇
  else if (promptLower && !promptUpper && !promptNums && !promptSymbols) {
    choices = charSets.lowerCase;
  } else if (!promptLower && promptUpper && !promptNums && !promptSymbols) {
    choices = charSets.upperCase;
  } else if (!promptLower && !promptUpper && promptNums && !promptSymbols) {
    choices = charSets.nums;
  } else if (!promptLower && !promptUpper && !promptNums && promptSymbols) {
    choices = charSets.symbols;
  }
  const password = [];
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/// TO-DO

////////////////////////////////////////////////////////////////////////

// In order: write the generator itself with varying calculations based on user choice. Then, write a conditional prompt which will help the computer decide which calculation to use. Finally, code the function which will print the desired outcome on the screen.