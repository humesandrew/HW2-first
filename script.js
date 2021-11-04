// Assignment Code
const generateBtn = document.querySelector("#generate"); 

const generate = document.getElementById("generate");






generate.onclick = function(passwordparams) 

{
  let passlength = prompt("How many characters?");
  document.createElement("passlength");

let passnum = confirm("Numbers? You can always cancel.");
let passspec = confirm("Special characters? You can always cancel.");
if (passlength <= 7) {prompt("Not enough characters.")};


}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
