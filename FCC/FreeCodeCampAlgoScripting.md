# Javascript Algorithms And Data Structures Certification

### Reverse a String

```
function reverseString(str) {
  var array = str.split('');
  array.reverse();
  str = array.join('');
  return str;
}
```

### Find the Longest Word in a String

```
function findLongestWord(str) {
  var array = str.split(' ');
  array.sort(function(a,b){
    return b.length - a.length;
  });
  return array[0].length;
}
```

### Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

```
function titleCase(str) {
  str = str.toLowerCase();
  var array = str.split(' ');
  var a = array.map(function(val){
    return val[0].toUpperCase() + val.slice(1);
  });
  var s = a.join(' ');
  return s;
}

titleCase("sHoRt AnD sToUt");
```

### Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

```
function largestOfFour(arr) {
  var array = [];
  for(var i = 0; i < 4; i++){
    var max = arr[i][0];
    for(var j = 1; j < arr[i].length; j++){
      if(arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    array.push(max);
  }
  return array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```

### Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

```
function confirmEnding(str, target) {
  if(str.length >= target.length) {
    var sub = str.substring(str.length - target.length);
    for(var i = 0; i < target.length; i++){
      if(sub[i] != target[i]){
        return false;
      }
    }
    return true;
  }
  else {
  return false;
  }
}
```

### Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
```
function truncateString(str, num) {
  if(str.length > num ){
  if(num > 3){
    num -= 3;
  }
  str = str.slice(0,num);
  str = str + '...';
  }
  return str;
}
```

### Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

```
function chunkArrayInGroups(arr, size) {
  var result = [];
  var rem = false;
  if(arr.length % size != 0){
    rem = true;
  }
  var completeRows = Math.floor(arr.length/size);
  for(var i = 1; i <= completeRows; i++){
    var begin = (i - 1) * size;  //included
    var end = begin + size;      //excluded
    result.push(arr.slice(begin, end));
  }
  if(rem){
//  no end index means go to the end of array
    result.push(arr.slice(completeRows * size));
  }
  return result;
}
```

### Slasher Flick
Return the remaining elements of an array after chopping off n elements from the head.

```
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}
```

### Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

```
function bouncer(arr) {
  arr = arr.filter(function(val){
    //console.log(val + ": " + Boolean(val));
    return Boolean(val) != false;
  });
  return arr;
}
```

### Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
`indexOf()` method is case-sensitive hence convert case before comparison.

```
function mutation(arr) {
  var str = arr[0].toLowerCase();
  var searchMe = arr[1].toLowerCase();
  for(var i = 0; i < searchMe.length; i++){
    if(str.indexOf(searchMe[i]) === -1){
      return false;
    }
  }
  return true;
}
```

### Where do I belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

```
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){
    return a-b;
  });
  var index = arr.indexOf(num);
  return index;
}
```

## Intermediate Algorithm Scripting Challenges

### Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

```
function sumAll(arr) {
  var min = Math.min(arr[0],arr[1]);
  
  var max = Math.max(arr[0],arr[1]);
  var sum = 0;
  for(var i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}
```

### Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```
function diffArray(arr1, arr2) {
  var newArr = [];
  var narr1 = arr1.filter(function(item){
    return (arr2.indexOf(item) === -1);
  });
  var narr2 = arr2.filter(function(item){
    return (arr1.indexOf(item) === -1);
  });
  newArr = narr1.concat(narr2);
  return newArr;
}
```

### Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

```
====implementation 1=====
function destroyer(arr) {
  var callback = function(val){
      return val != element;
    };
  var element;
  for(var i = 1; i < arguments.length; i++){
    element = arguments[i];
    arr = arr.filter(callback);
  }
  return arr;
}
====implementation 2====
function destroyer(arr) {
//convert arguments object to array
  var args = Array.prototype.slice.call(arguments);
//remove first element which is the array to operate on
  args = args.slice(1);
  var callback = function(val){
      return args.indexOf(val) === -1;
    };
  arr = arr.filter(callback);
  return arr;
}

```

### Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

```
function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  str = str.replace(before,after);
  return str;
}

```

### Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

```
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  for(var i = 0; i < collection.length; i++){
    var match = true;
    for(var j = 0; j < keys.length; j++){
      if(!collection[i].hasOwnProperty(keys[j])){
        match = false;
      }
       else if(collection[i][keys[j]] != source[keys[j]]){ //use [] because key is expression, can not use dot opeartor
         match = false;
       }

    }
    if(match){
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

### Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

```

function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consonantCluster = ['ch', 'sh', 'sm', 'st', 'th', 'st', 'gl'];
  if(vowels.indexOf(str[0]) != -1){
    str = str + "way";
  }
  else if(consonantCluster.indexOf(str.substr(0,2)) != -1){
    str = str.slice(2) + str.substr(0,2) + "ay";
  }
  else {
    str = str.slice(1) + str[0] + "ay";
  }
  return str;
}

translatePigLatin("glove");
```

### DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
```
function pairElement(str) {
  var arr =[];
  var strands = str.split("");
  var pair = {
    A : "T",
    T : "A",
    C : "G",
    G : "C"
  };
  for(var i = 0; i < strands.length; i++){
    var temp = [];
    temp.push(strands[i]);
    temp.push(pair[strands[i]]);
    arr.push(temp);
  }
  
  return arr;
}

pairElement("GCG");
```

### Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

```
function fearNotLetter(str) {
  var missing;
  for(var i = 1; i < str.length; i++){
    if(str.charCodeAt(i) != (str.charCodeAt(i-1) + 1)){
      missing = String.fromCharCode(str.charCodeAt(i) -1);
    }
  }
  return missing;
}

fearNotLetter("abce");
```

### Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

```
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof(bool) === "boolean"){
    return true;
  }
  else {
    return false;
  }
}

booWho(null);
```

### Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

```
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var array = args.reduce(function(accumulatorArray, curArray){
    var temp = curArray.filter(function(element){
      return !(accumulatorArray.includes(element));
    });
    return accumulatorArray.concat(temp);
  },[]); //[] is initial value
 
  return array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

### Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding (HTML entities)[https://dev.w3.org/html5/html-author/charref].

```
function convertHTML(str) {
  var htmlEntities = {
    "&" : "&amp;",  //use quotes because keys are not valid javascript identifiers
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;",
  };
  function convertHtml(match){
    return htmlEntities[match];
  }
  str = str.replace(/&|<|>|"|'/g ,convertHtml);
  return str;
}

convertHTML("Dolce & Gabbana");
```

### Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

```
function spinalCase(str) {

  function convertSpinal(match, index, string){
    
    if(match === " " || match === "_"){
      return "-";
    }
    else if(index > 0 && string[index - 1] != " " && string[index-1] != "_")
      {
        return "-" + match.toLowerCase();
      }
    else{
      return match.toLowerCase();
    }
  }
  str = str.replace(/ |[A-Z]|_/g,convertSpinal);
  return str;
}

spinalCase('The_Andy_Griffith_Show');
```

### Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

```
function sumFibs(num) {
  var loop = true;
  var secondLast = 1;
  var last = 1;
  var fib;
  var sum = 2;
  while(loop){
    fib = secondLast + last;
    if(fib <= num) {
      if(fib % 2 != 0){
        sum += fib;
      }
      secondLast = last;
      last = fib;
    }
    else {
      loop = false;
    }
    
  }
  return sum;
}

sumFibs(4);
```

### Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

```
function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = max - min;
  var loop = true;
  var multiple = 2;
  var scm;
  while(loop){
    var temp = max * multiple;
    var count = 0;
    for(var i = min; i < max; i++){
      if(temp % i === 0){
        count++;
      }
      else {
        break;
      }
    }
    if(count === range){
      loop = false;
      scm = temp;
    }
    multiple++;
  }
  return scm;
}


smallestCommons([1,5]);
```

### Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

```
function findElement(arr, func) {
  var num = arr.find(func);
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
```

### Drop it
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

```
function dropElements(arr, func) {
  var result = [];
  var foundIndex = arr.findIndex(func);
  if(foundIndex != -1){
    result = arr.slice(foundIndex);
  }
  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

### Steamroller-very important and tricky
Flatten a nested array. You must account for varying levels of nesting.

```
function steamrollArray(arr) {
  
  function flat(result, current){
    if(Array.isArray(current)){
      return result.concat(current.reduce(flat,[]));
    }
    else {
      return result.concat(current);
    }
  }
  var temp = arr.reduce(flat,[]);
  return temp;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

### Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

```
function binaryAgent(str) {
  var arr = str.split(" ");
  str = arr.map(function(binCode){
    return String.fromCharCode(parseInt(binCode, 2));
  }).join("");
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

### Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

```
function truthCheck(collection, pre) {
  var result = collection.every(function(obj){
    return obj[pre];
  });
  return result;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
```

### Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

```
function addTogether() {
  var result;
  
  if(arguments.length === 2){
    if(typeof arguments[0] == "number" && typeof arguments[1] == "number"){
      result = arguments[0] + arguments[1];
    }
  }
  else {
    if(typeof arguments[0] == "number"){
      var temp = arguments[0]; 
      //each function has its own arguments array hence save it here in temp
      result = function(arg){
        if(typeof arg == "number"){
          return  temp + arg;
        }
        // else return undefined(no rerurn value)
      };
    }
  }
  return result;
}

addTogether(2)(3);
```



## Javascript Algorithms And Data Structures Certification Projects

## Check for Palindromes
Return `true` if the given string is a palindrome. Otherwise, return `false`.

A _palindrome_ is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

```
function palindrome(str) {
  str = str.replace(/\W|_/g, '');
  var l = str.toLowerCase();
  for(var i = 0; i <= l.length/2; i++){
    if(l[i] != l[l.length - i -1]){
      return false;
    }
  }
  return true;
}
```

## Roman Numeral Converter
Convert the given number into a roman numeral. [Roman Numerals](http://www.mathsisfun.com/roman-numerals.html)

```

function convertToRoman(num) {
  
  var romanNumerals = [
    {
      min : "I",
      med : "V",
      max : "X"
    },
    {
      min : "X",
      med : "L",
      max : "C"
    },
    {
      min : "C",
      med : "D",
      max : "M"
    },
    {
      min : "M",
      med : "V-",
      max : "X-"
    }
    
  ];
  num = num.toString();
  var numArray = num.split(""); //separate each character
  for(var i = numArray.length - 1, k = 0; i >= 0; i--, k++){
    var tempDec = Number(numArray[i]);
    var tempRoman = "";
    if(tempDec <= 3){
      for(var j = 1; j <= tempDec; j++){
        tempRoman += romanNumerals[k].min;
      }      
    }
    else if(tempDec >= 4 && tempDec <= 8){
      var m;
      for(m = 1; m <= 5 - tempDec; m++){
        tempRoman += romanNumerals[k].min;
      }
      tempRoman += romanNumerals[k].med;
      for(m = 1; m <= tempDec - 5; m++){
        tempRoman += romanNumerals[k].min;
      }
    }
    else{
      if(tempDec === 9){
        tempRoman += romanNumerals[k].min;
      }
      tempRoman += romanNumerals[k].max;
    }
    numArray[i] = tempRoman;
  }
  num = numArray.join('');
 return num;
}

convertToRoman(36);
```

## Caesars Cipher
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

```
function rot13(str) { // LBH QVQ VG!
  var result = "";
  for(var i = 0; i < str.length; i++){
    var temp = str.charCodeAt(i);
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
      temp = str.charCodeAt(i) - 13;
      if(temp < 65){
        temp = 91 - (65 - temp);
      }
    }
    result = result + String.fromCharCode(temp);
  }
  
  return result;
}
```

## Cash Register
Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.

`cid` is a 2D array listing available currency.

The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.
```
function checkCashRegister(price, cash, cid) {
  const denominations = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var changeObj = {};
  var changeRequired = cash - price;
  var cArray = [];
  // if cid is equal to actual change required
  const reducer = (accumulator, currentValue) => accumulator + currentValue[1];
  if(changeRequired !== 0){
    let cidSum = cid.reduce(reducer,0);
    if(cidSum == changeRequired){
      changeObj.status = "CLOSED";
      changeObj.change = cid;
    }
    else {
      let heighestD = 0;
      for(var i = 8; i >= 0; i--){
        if(changeRequired >= denominations[i]){
          heighestD = i;
          break;
        }
      }
      for(var j = heighestD; j >= 0; j--){
        if(cid[j][1] !== 0){
          let denominationsNeeded = Math.floor(changeRequired/denominations[j]);
          let denominationsAvailable = Math.floor(cid[j][1]/denominations[j]);
          let denominationsUsable = Math.min(denominationsNeeded, denominationsAvailable);
          let changeCleared = denominationsUsable * denominations[j];
          changeRequired = changeRequired - changeCleared;
          changeRequired = Number.parseFloat(changeRequired).toFixed(2);
          changeCleared && cArray.push([cid[j][0], changeCleared]);
          if( changeRequired == 0){
            break;
          }
        }
      }
      if(changeRequired == 0){
        changeObj.status = "OPEN";
        changeObj.change = cArray;
      }
      else {
        changeObj.status = "INSUFFICIENT_FUNDS";
        changeObj.change = [];
      }
    }
  }  
  // Here is your change, ma'am.
  return changeObj;
}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
```
