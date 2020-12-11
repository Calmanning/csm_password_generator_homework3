// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}
function generatePassword() {

   // var declaration and arrays of lowerletters, CAP LETTERS, numbers, symbols -- all elements possible to be inluded in password creation
  var num = "0123456789"
  console.log(`num: ${num}`);
  var letLower = "abcdefghijklmnopqrstuvwxyz"
  console.log(`letLower: ${letLower}`);
  var letUpper = letLower.toUpperCase();
  console.log(`letupper: ${letUpper}`);
  var sym = "!@#$%&*(){}[]-_?";
  console.log(`sym: ${sym}`);
  // The following array is to be called on in the password creation function. indexs
  var finalArray = "";

//================================================================================

  // Ask user (with confirm) if they want capitol letters and set a variable for caps letters
  upperCon = confirm("Do you want CAPITOL letters in your new password?");
  console.log(`upperCon: ${upperCon}`);
  //  Ask user (with confirm) if they want lowerCase letter and set a var for lowerCase letter
  letCon = confirm("Do you want lowercase letters in your new, awesome password?");
  console.log(`letCon: ${letCon}`);
  // Ask user (with confirm) if they want numbers & set var
  numCon = confirm("Do you want numbers in your new, awesome, safe password?");
  console.log(`numCon: ${numCon}`);
  // Ask user (with confirm) if they want symbols & set var
  symCon = confirm("Do you want symbols \(!@#$%^&*\(\){}[]?\) in your new, awesome, safe, tough password?");
  console.log(`symCon: ${symCon}`);
  // Ask user (with prompt) how long they want the password (8-128)
  charCon = prompt("How long do you want your new, awesome, safe, tough, hard-to-remember password to be? \n(must be between 8-128 characters)");
  console.log(`carCon: ${charCon}`);

  
  // Create multiple if statements to establish what components will be included (pushed) to the final array
  if (upperCon) {
    finalArray += letUpper;
    console.log(`finalArray: ${finalArray}`);
  }
  if (letCon) {
    finalArray += letLower;
    console.log(`finalArray: ${finalArray}`);
  }
  if (numCon) {
    finalArray += num;
    console.log(`finalArray: ${finalArray}`);
  }
  if (symCon) {
    finalArray += sym;
    console.log(`finalArray: ${finalArray}`);
  } 
  // Edge case contingency to verify that at least 1 type set was confirmed for password creation
  if (!symCon && !numCon && !letCon && !upperCon) {
    while ((!symCon && !numCon && !letCon && !upperCon)) {
      alert("Well this is unexpected. But not a big deal. \nYou have to answer 'OK' to at least 1 prompt. Let's try that again.");
      upperCon = confirm("Do you want CAPITOL letters in your new password?");
      console.log(`upperCon: ${upperCon}`);
      if (upperCon) {
        finalArray += letUpper;
        console.log(`finalArray: ${finalArray}`);
      }
      //  Ask user (with confirm) if they want lowerCase letter and set a var for lowerCase letter
      letCon = confirm("Do you want lowercase letters in your new, awesome password?");
      if (letCon) {
        finalArray += letLower;
        console.log(`finalArray: ${finalArray}`);
      }
      console.log(`letCon: ${letCon}`);
      // Ask user (with confirm) if they want numbers & set var
      numCon = confirm("Do you want numbers in your new, awesome, safe password?");
      console.log(`numCon: ${numCon}`);
      if (numCon) {
        finalArray += num;
        console.log(`finalArray: ${finalArray}`);
      }
      // Ask user (with confirm) if they want symbols & set var
      symCon = confirm("Do you want symbols in your new, awesome, safe, tough password?");
      if (symCon) {
        finalArray += sym;
        console.log(`finalArray: ${finalArray}`);
      } 
    } 
  }    
  // Edge case establishing that character length for the password is between 8-128 characters. And that an imput has been provided.
  if (charCon < 8 || charCon > 128) {
  while (charCon < 8 || charCon > 128) {
    charCon = prompt('No, seriously, we need to know how long you want this password \n pick a number from 8-128');}
  }
  // Declaring an emptry variable string that will hold the new password created in the For loop.
    var passwordHolder = "";
  // The for loop that will generate the random characters to a length determined by the charCon input.
  for (var i = 0; i < parseInt(charCon); i++) {
  var random = finalArray[Math.floor(Math.random() * finalArray.length)]
  console.log(`random ${random}`);
  passwordHolder += random;
  }

  
  return passwordHolder;
}

generateBtn.addEventListener("click", writePassword);

//   } Math.floor(Math.random()*charCon); //establishing the length of the finalArray
//   console.log(randomNum);
// }




//TODO: Create if/else statements to push the approved arrays into the function
// if(splCharQ) {
//   push.splChar 
// }
// TODO create var listing the final results

//create variable to hold final result of the "finalArray"


//TODO: create "for" loop to loop over the finalArray that will run the number of times picked by the user (the resulting var from "charCon")


// for (var i = 0; i < charCon; i++) {
//   finalPass += finalArray[random]

// }
// TODO: Return the result 


// Add event listener to generate button

