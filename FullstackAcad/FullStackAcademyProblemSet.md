# Bootcamp Prep Problem Set
These problems are part of [this course](http://prep.fullstackacademy.com_) on JavaScript basics from [Fullstack Academy](https://www.fullstackacademy.com).

- [Easy Problem Set](#easy-problem-set)
- [Medium Problem Set](#medium-problem-set)

## Easy Problem Set

### Ask Politely
Create the function `askPolitely` that accepts a sentence as an argument.

If the last character of the sentence is a question mark, the question should end with the word "please?". If a question is already polite (meaning it already ends with "please") OR the sentence is not a question, return string argument without modification.

```
function askPolitely(sentence){
  if(sentence.endsWith("?")) {
     var strArray = sentence.split(" ");
     if(strArray[strArray.length - 1] != "please?"){
        /*Strings allow negative indexing only with slice method*/
       return sentence.slice(0,-1).concat(" please?");
     }
     }
  return sentence;
}
```

### Do You Play The Theremin?
Create the function `doYouPlayTheTheremin`. If your name starts with the letter "S" or "s", you are playing the Theremin!

```
function doYouPlayTheTheremin(name){
  if(name.charAt(0) === 'S' || name.charAt(0) === 's'){
    return name + " plays the Theremin!";
  }
  else{
    return name + " does not play the Theremin!";
  }
}
```

### Max Of Three
Create the function `maxOfThree` that evaluates three numbers and returns the largest number out of the three.

```
function maxOfThree(num1, num2, num3){
  if(num1 >= num2 && num1 >= num3){
    return num1;
  }
  else if(num2 >= num1 && num2 >= num3){
    return num2;
  }
  else{
    return num3;
  }
}
```

### Last Digit
Create the function `lastDigit` that accepts two non-negative integer values and returns `true` if they have the same last digit, such as 27 and 57.

The function accepts two non-negative integer arguments and returns `true` or `false` if they have the same last digit.

```
function lastDigit(num1, num2){
  if(num1 % 10 === num2 % 10){
    return true;
  }
  else {
    return false;
  }
}
```

### Is It Truthy?
Write a function `isTruthy` that accepts a single argument and returns `true` if that argument is "truthy" and `false` if the value is falsey.

```
function isTruthy(value){
  if(value){
    return true;
  }
  return false;
}
```

### Is it Divisible
Write a function `isDivisible` that accepts two numbers and returns `true` if the first number is cleanly divisible by the second, and `false` if not.

```
function isDivisible(number1, number2){
/* if (one === undefined || two === undefined) {
        console.log('argument undefined');
        return null;
  }
*/
  if(number1 % number2 === 0){
    return true;
  }
  return false;
}
```

### Exponentiate
Write a function `exponentiate` that accepts a number and a power to raise that number to. For the present, assume the power argument will always be a positive integer value.

```
function exponentiate(number, power){
  return Math.pow(number, power);
}
```

### Factorial
Create the function `factorial(num)` that returns the factorial of its argument. The argument, num, will be a positive whole number.

```
function factorial(num){
  var answer = 1;
  for(var i = num; i > 1; i--){
    answer *= i;
  }
   return answer;
}
```

### Repeat a String
Create a function `repeat` that repeats a string a certain number of times.
repeat accepts two arguments:
The string to repeat, str
The number of times to repeat that string, num
repeat should return a string that is the concatenation of the str argument n times.

```
function repeat(str, num){
  answer = ''; 
  for(var i = 1; i <=num; i++){
    answer += str;
  }
    return answer;
}
```

### Count the Vowels
Create the function `vowelCount(str)` that takes a str parameter and returns the number of vowels the string contains (ie. "Fullstack Academy" would return 5).

```
function vowelsCount(str){
  var count = 0;
  str1 = str.toLowerCase();
    for(var i = 0; i < str1.length; i++){
        switch(str1.charAt(i)) {
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break; 
        }
    }
    return count;
}
```

### palindrome
Have the function `palindrome(str)` accept a string argument, and return the boolean true if the argument is a palindrome (meaning that the string is the same forward as it is backward). Otherwise, return the boolean false.

```
function palindrome(str){
  for(var i = 0, j = str.length-1; i < str.length/2; i++, j--){
    if(str[i] != str[j]){
      return false;
    }
  }
  return true;
}
```

### The Array Hotel
In this challenge, we'll use an array to manage the occupancy of a hotel called The Array Hotel.

Each room in the hotel will be represented with a "vacant" or "occupied" string in the array. The index of the string in the array is the room number. For example, for a hotel with an occupancy array of ["occupied", "vacant", "occupied", "vacant"], we can determine that Rooms 0 and 2 are occupied and Rooms 1 and 3 are free.

Your job is to write a function called `findVacantRooms` to help the owner of the hotel find which rooms are vacant. This function should return an array of the room numbers that are vacant.

```
function findVacantRooms(occuArray){
  var vacantRooms = [];
    for(var i = 0; i < occuArray.length; i++){
    if(occuArray[i] == "vacant"){
      vacantRooms.push(i);
    }
  }
    return vacantRooms;
      
}
```


## Medium Problem Set

### Sum of Digits
Create the function `sumOfDigits` that adds individual digits of a number, and returns the sum.

```
function sumOfDigits(num){
  var sum = 0;
  while(num > 0){
    sum += num % 10;
    num = (num - (num % 10))/10;
  }
  return sum;
}
```

### Underscore to CamelCase
Write a function to convert a variable name from under_score format to camelCase.

Make sure you support an unlimited number of underscores in the input! You will not have to worry about white space in your input, only alphanumeric characters and underscores.

```
function underToCamel(str){
  var camelStr = "";
  var upperCase = false;
  for(var i = 0; i < str.length; i++){
    if(str[i] === '_'){
      upperCase = true;
      continue;
    }
    else{
      if(upperCase){
        camelStr += str[i].toUpperCase();
        upperCase = false;
      }
      else {
        camelStr += str[i];
      }
    }
  }
  return camelStr;
}
```

### My Join
Write the function `myJoin` that mirrors the behavior of JavaScript's .join() array method.

However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array. Try and mirror the behavior of the native .join() method exactly. If there is no delimiter argument, use a ',' character.

```
function myJoin(arr, delimit=','){
  var result = "";
  for(var i = 0; i < arr.length; i++){
    if(i != 0){
      result += delimit;
    }
    if(Array.isArray(arr[i])){
      result += myJoin(arr[i]);
    }
    else{
      result += arr[i];
    }
  }
  return result;
}
```

### Objectifier
Write a function that accepts a nested array and returns a well-structured object. The array passed into the function will look like the one below and have only four levels of nested-ness.

As you can see in the examples below, the structure of the input is an array. Each element of that array is an array. The first element of the nested array (eg. animals) should become a property key on the return object. The second element of the nested array is also an array, where the elements alternate between property names (eg. dogs) and corresponding property values (eg. ['Corgi, 'Sheltie']).

Example:

```
var data = [
  [ 'animals',
    [
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],
  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
];
INPUT: objectifier(data);
OUTPUT:
{
  animals : {
    dogs : ['Corgi', 'Sheltie'],
    cats : ['Tabby','Black'],
    pigs : ['Teacup']
},
  guitars : {
    Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
    Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
  }
}
```

Solution:

```
function objectifier(arr){
  var resultObj = new Object();
  for(var i = 0; i < arr.length; i++){
    var propObj = new Object();
    var PropName = arr[i][0];
    var propPropArr = arr[i][1];
    for(var j = 0; j < propPropArr.length; j=j+2){
      var prop = propPropArr[j];
      propObj[prop] = propPropArr[j+1];
    }
    resultObj[PropName] = propObj;
  }
  return resultObj;
}
```

### Compare Objects
Write a function that returns `true` if two objects contain the same data, or are equivalent, and `false` if not.

In order for the function to return true, ALL the properties and values that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties and values in object 2 must exist and be equal to those in object 1.

Note: You can assume that each object will only have one level, meaning there will be no nested objects.

```
function compareObjects(obj1, obj2){
  if(Object.keys(obj1).length != Object.keys(obj2).length){
    return false;
  }
  else{
    for(var prop1 in obj1){
      if(obj1[prop1] != obj2[prop1]){
        return false;
      }
    }
    return true;
  }
}
```

