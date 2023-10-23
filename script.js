// Assignment code here


// Get references to the #generate element; this will get a reference to the4 html element with the
//id 'generate and stores it in the varable 'generateBtn'
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//this function will write the password to the html element with the id 'password'
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//when user clicks 'write password' the function is executed
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = parseInt(
    prompt("Please enter the length of the password between 8 and 128 characters):")
  )
  return length;
  // error check.length
}
var includeLowercase = confirm("Do you want to include lowercase characters?");
var includeUppercase = confirm("Do you want to include uppercase characters?");
var includeNumeric = confirm("Do you want to include numeric characters?");
var includeSpecial = confirm("Do you want to include special characters?");

var charset = "";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";