/*
 *  Collection of multipurpose functions, targets for assertion testing
 *
 */


// Container
let lib = {};


// Check if string is a palindrome
lib.isPalindrome = function(str){
  // Ingore non-aplhanumeric characters
  let regExp =  /[\W_]/g;
  str = str.replace(regExp, "");
  // Reverse string
  let revStr = str.split("").reverse().join("");
  if(revStr == str){
    return true;
  } else {
    return false;
  }
};

// Return the smallest common number two given values may be divided by
lib.getSmallestDiv = function(numA, numB){
  if(typeof numA !== 'number' || typeof numB !== 'number'){
    return false;
  } else {
    let smaller = Math.min(numA, numB);
    let greater = Math.max(numA, numB);

    for(let i = 2; i < greater; i++){
      if((smaller % i === 0) && (greater % i === 0)){
        return i;
      }
    }
    return false;
  }
};

// Return the greatest common number two given values may be divided by
lib.getGreatestDiv = function(numA, numB){
  let smaller = Math.min(numA, numB);
  let greater = Math.max(numA, numB);

  for(let i = smaller; i > 1; i--){
    if((smaller % i === 0) && (greater % i === 0)){
      return i;
    }
  }
  return false;
};

// Find first missing number in a sequence of integers
lib.findFirstMissingNumber = function(arr){
  for(let i=0; i < arr.length; i++){
    if(arr[i] !== i+1){
      return i+1;
    }
  };
  return false;
};

// Return square root of a given value
lib.getSquareRoot = function(num){
  return Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : false;
};

// Return random string of given length
lib.getRandomStr = function(len){
  let charset = "abcdefghijklmnopqrstuvxyz123456789";
  let str = "";
  for(let i=0; i < len; i++){
    str += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return str;
};

// Return first repeated word in a sentence string
lib.getFirstRepetition = function(str){
  let wordArray = str.split(" ");
  let prev = "";

  for(let i=1; i < wordArray.length; i++){
    prev = wordArray[i-1];
    if(prev === wordArray[i]){
      return prev;
    }
  }
  return false;
};

// Check if two given strings are anagrams
lib.checkIfAnagrams = function(str1, str2){
  let strArr1 = str1.split("").sort().join("");
  let strArr2 = str2.split("").sort().join("");
  if(strArr1 === strArr2){
    return true;
  } else {
    return false;
  }
};


// Export
module.exports = lib;
