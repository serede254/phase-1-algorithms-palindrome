function isPalindrome(word) {
  // Write your algorithm here
  var re = /[^a-zA-Z]/g;
  var lowStr = word.toLowerCase().replace(re, '');
  var reverseStr = lowStr.split('').reverse().join(''); 
  return reverseStr === lowStr;
}

/* 
  - remove spaces and special symbols from word
  -convert to lowerCase
  -reverse our string
  -compare the two strings
*/

/*
 - we first make our string easier to handle by removing spaces and any special symbols
 -we then create a new string made up of our new string
 -we then split the new string into sub-strings and then reverse the index positions before rejoining them 
 -we then compare the new and old strings to determine if it is a palindrome 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
