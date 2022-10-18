'use strict'
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const charSets = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  nums: '1234567890',
  symbols: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  passwordLength: '',
};


function writePassword() {
  console.log(Math.floor(Math.random() * 10));//Random int from 0 to 9
  const temp = 'abcdefghijklmnopqrstuvwxyz';
  console.log(temp[Math.floor(Math.random() * 26)]);
  return
  const promptLizard = prompt('How many characters would you like in your password?(8-128)')
  const promptLength = parseInt(promptLizard, 10)
  if (promptLength == NaN) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')
    return
  }

  if (promptLength < 8 || promptLength > 128) {
    alert('The requested value is not valid. A password must have a character length between 8 and 128.')
    return
  }

  const promptLower = prompt('Would you like lowercase letters in your password?(yes/no)')
  if (promptLower != 'yes' && promptLower != 'no') {
    alert('The requested value is not valid. The only options are yes or no.')
    return
  }

  const promptUpper = prompt('Would you like uppercase letters in your password?(yes/no)')
  if (promptUpper != 'yes' && promptUpper != 'no') {
    alert('The requested value is not valid. The only options are yes or no.')
    return
  }
  const promptNums = prompt('would you like numbers in yor password?(yes/no)')
  if (promptNums != 'yes' && promptNums != 'no') {
    alert('The requested value is not valid. The only options are yes or no.')
    return
  }
  const promptSymbols = prompt('would you like special characters ($,%,& etc.) in your password?(yes/no)')
  if (promptSymbols != 'yes' && promptSymbols != 'no') {
    alert('The requested value is not valid. The only options are yes or no.')
    return
  }
  const password = ''
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/// TO-DO

////////////////////////////////////////////////////////////////////////

// In order: write the generator itself with varying calculations based on user choice. Then, write a conditional prompt which will help the computer decide which calculation to use. Finally, code the function which will print the desired outcome on the screen.