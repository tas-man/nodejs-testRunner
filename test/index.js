/*
 *  Test Runner
 *
 */


// Dependencies
let lib = require('./../app/lib');
let assert = require('assert');


// Container
let _app = {};

_app.tests = {};

// isPalindrome
_app.tests['TEST: isPalindrome should return true if the passed in string is a palindrome'] = function(done){
  assert.equal(lib.isPalindrome('tattarrattat'), true);
  done();
};

_app.tests['TEST: isPalindrome should return false if the passed in string is not a palindrome'] = function(done){
  assert.equal(lib.isPalindrome('onomatopoeic'), false);
  done();
};

_app.tests['TEST: isPalindrome should ignore non-alphanumeric characters and return true if the passed in string is a palindrome'] = function(done){
  assert.equal(lib.isPalindrome('tatt#__arrattat_%%&¤#%'), true);
  done();
};

// getSmallestDiv
_app.tests['TEST: getSmallestDiv should return 3 if passed 6 and 9'] = function(done){
  assert.equal(lib.getSmallestDiv(6, 9), 3);
  done();
};

_app.tests['TEST: getSmallestDiv should return 2 if passed 80 and 8'] = function(done){
  assert.equal(lib.getSmallestDiv(80, 8), 2);
  done();
};

_app.tests['TEST: getSmallestDiv should return false if passed 77 and 5'] = function(done){
  assert.equal(lib.getSmallestDiv(77, 5), false);
  done();
};

// getGreatestDiv
_app.tests['TEST: getGreatestDiv should return 3 if passed 6 and 9'] = function(done){
  assert.equal(lib.getGreatestDiv(6, 9), 3);
  done();
};

_app.tests['TEST: getGreatestDiv should return 2 if passed 400 and 6'] = function(done){
  assert.equal(lib.getGreatestDiv(400, 6), 2);
  done();
};

_app.tests['TEST: getGreatestDiv should return false if passed 63 and 17'] = function(done){
  assert.equal(lib.getGreatestDiv(63, 17), false);
  done();
};

// findFirstMissingNumber
testArr1 = [1, 2, 3, 4, 5, 7, 8, 9, 10];
_app.tests['TEST: findFirstMissingNumber should return 6 if passed testArr1'] = function(done){
  assert.equal(lib.findFirstMissingNumber(testArr1), 6);
  done();
};

testArr2 = [1, 3, 4, 5, 7, 8, 9, 10];
_app.tests['TEST: findFirstMissingNumber should return 2 if passed testArr2'] = function(done){
  assert.equal(lib.findFirstMissingNumber(testArr2), 2);
  done();
};

testArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
_app.tests['TEST: findFirstMissingNumber should return false if passed testArr3'] = function(done){
  assert.equal(lib.findFirstMissingNumber(testArr3), false);
  done();
};

// getSquareRoot
_app.tests['TEST: getSquareRoot should return 3 if passed 9'] = function(done){
  assert.equal(lib.getSquareRoot(9), 3);
  done();
};

_app.tests['TEST: getSquareRoot should return 9 if passed 81'] = function(done){
  assert.equal(lib.getSquareRoot(81), 9);
  done();
};

_app.tests['TEST: getSquareRoot should return false if passed 447'] = function(done){
  assert.equal(lib.getSquareRoot(447), false);
  done();
};

// getRandomStr
_app.tests['TEST: getRandomStr should return random string of length 20 if passed 20'] = function(done){
  let str = lib.getRandomStr(20);
  assert.equal(str.length, 20);
  done();
};

_app.tests['TEST: getRandomStr should return random string of length 10 if passed 10'] = function(done){
  let str = lib.getRandomStr(10);
  assert.equal(str.length, 10);
  done();
};

_app.tests['TEST: getRandomStr should return random string of length 0 if passed 0'] = function(done){
  let str = lib.getRandomStr(0);
  assert.equal(str.length, 0);
  assert(lib.getRandomStr() == false);
  done();
};

// getFirstRepetition
_app.tests['TEST: getFirstRepetition should return first word or charset (separated on both sides by spaces) to be repeated in a string'] = function(done){
  let str = lib.getFirstRepetition("I dont want to repeat repeat myself.");
  assert(str === "repeat");
  done();
}

_app.tests['TEST: getFirstRepetition should return first word or charset (separated on both sides by spaces) to be repeated in a string'] = function(done){
  let str = lib.getFirstRepetition("I do do want to repeat repeat myself.");
  assert(str === "do");
  done();
}

_app.tests['TEST: getFirstRepetition should return false if no word or charset was repeated in string in a sentence'] = function(done){
  let str = lib.getFirstRepetition("I dont want to repeat myself.");
  assert(str === false);
  done();
}

// checkIfAnagrams
_app.tests['TEST: checkIfAnagrams should return true if passed in strings are anagrams, "JAVA" & "AVAJ"'] = function(done){
  assert.equal(lib.checkIfAnagrams("JAVA", "AVAJ"), true);
  done();
}

_app.tests['TEST: checkIfAnagrams should return true if passed in strings are anagrams, "JVAA" & "AVAJ"'] = function(done){
  assert.equal(lib.checkIfAnagrams("JVAA", "AVAJ"), true);
  done();
}

_app.tests['TEST: checkIfAnagrams should return false if passed in strings are not anagrams'] = function(done){
  assert.equal(lib.checkIfAnagrams("JAVO", "AVAJ"), false);
  done();
}


_app.runAllTests = function(){
  for(let key in _app.tests){
    if(_app.tests.hasOwnProperty(key)){
      let testDesc = key;
      let testFunc = _app.tests[key];
      try{
        testFunc(function(){
          console.log('\x1b[32m%s\x1b[0m', testDesc);
        });
      } catch(e){
        console.log('\x1b[31m%s\x1b[0m', testDesc);
      }
    }
  }
};


// Run all test in this file
_app.runAllTests();
