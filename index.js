function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');

  return word === reversed;
}

/* 
  Add your pseudocode here
*/
// reverse the string and put it in a variable. Then compare the reversed variable with the original string. Print true if they are equal and false if they are not equal
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: true');
  console.log('=>', isPalindrome('racecar'));

  console.log('');

  console.log('Expecting: false');
  console.log('=>', isPalindrome('robot'));
}

module.exports = isPalindrome;
