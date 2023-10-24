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
//these are the prompts the user encounter when they open the browser
var includeLowercase = confirm("Do you want to include lowercase characters?");
var includeUppercase = confirm("Do you want to include uppercase characters?");
var includeNumeric = confirm("Do you want to include numeric characters?");
var includeSpecial = confirm("Do you want to include special characters?");

//this provides the selections of characters users can choose from for lower case, upper case, numeric, and special characters
var charset = "";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//this randomized the password generator process
var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  
//this is the message that is displayed for users' generated password
  alert("Your generated password is: " + password);
