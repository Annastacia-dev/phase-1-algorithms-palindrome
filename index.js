function isPalindrome(word) {
  // Write your algorithm here

  const reverseString = word.split('').reverse().join('')
  if (word === reverseString){
    return true;
  } else {
    return false;
  }

}


/* 
  Add your pseudocode here
  1.Convert string to an array using .split() method
  2.Reverse the array using .reverse() method
  3.Convert the reserved array into a string using .join() method
  // const array = word.split('');
  // const reverseArray = array.reverse(); 
  // const reverseString = reverseArray.join('')
  // Refactored into one line of code const reverseString = word.split('').reverse().join('')
  4.Use condition statements to check if word is a palindrome
  5.Return true if word is a palindrome, else return false
*/

/*
  Add written explanation of your solution here
  Give a word 'robot'
  1.The split() method converts the string into individual characters
  ['r', 'o', 'b', 'o', 't']

  2.The reverse() method reverses the position in an array
  ['t', 'o', 'b', 'o', 'r']

  3.The join() method joins all elements of the array into a string
  // 'tobor'

  4. if...else statement is used to check if the string and the reversed string are equal. If they are equal, the string is a palindrome.

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
