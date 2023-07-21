# Programming Challenge - Support Engineer

## Challenge
The objective of this challenge is to create an algorithm that traverses an array containing strings of letters and numbers.

## Solution
I have chosen JavaScript as the main programming language for this challenge and followed the coding best practices to create functions that resolve the problem.

```javascript
function verifyArray(array) {
  let verify;

  if(array.length > 0) {
    verify = true;
  } else {
    verify = false;
  }
  return verify;
}

function getLettersArray(array) {
  const lettersArray = [];
  for (let element of array) {
    if (typeof element === "string") {
      lettersArray.push(element);
    }
  }
  return lettersArray;
}

function getNumbersArray(array) {
  const numbersArray = [];
  for (let element of array) {
    if (typeof element === "number") {
      numbersArray.push(element);
    }
  }
  return numbersArray;
}

function getLargestNumber(array) {
  let largestNumber = -Infinity;
  for (let number of array) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
}
```
#### Function: verifyArray(array)
The verifyArray function takes an array as an argument.
It declares a variable called verify without assigning a value to it.
Next, the function checks if the length of the array is greater than zero using an if statement. If the array has elements (length greater than zero), the variable verify is assigned the value true.
Otherwise, if the array is empty (length equal to zero), the variable verify is assigned the value false.
Finally, the function returns the value of the verify variable, which will be true if the array has elements or false if it is empty.

#### Function: getLettersArray(array)
This function receives an array as an argument and iterates through it using a ```for...of``` loop. It checks the type of each element using 'typeof' and appends the string elements to a new array called 'lettersArray'.

#### Function: getNumbersArray(array)
Similarly, this function receives an array as an argument and iterates through it using a ```for...of``` loop. It checks the type of each element using 'typeof' and appends the number elements to a new array called 'numbersArray'.

#### Function: getLargestNumber(array)
The third function, getLargestNumber, receives an array of numbers as an argument and iterates through it using a ```for...of``` loop. It finds and returns the largest number using a comparison method and a variable 'largestNumber'.

#### Main Function: main(array)
The main function takes an array as an argument.
It declares two variables, finalResult and arrayVerify, without assigning any initial values.
It calls the `verifyArray` function with the input array to check if the array has elements. The result is stored in the `arrayVerify` variable.
The function calls two other functions, `getLettersArray` and `getNumbersArray`, with the input array to obtain separate arrays containing only letters and numbers, respectively.
It then calls the `getLargestNumber` function with the `numbersOnlyArray` to find the largest number in that array.
Next, the function checks the value of the `arrayVerify` variable using an if statement.
If `arrayVerify` is true, indicating that the input array has elements, it creates the `finalResult` string using template literals. The finalResult will contain information about the array containing only letters, the array containing only numbers, and the largest number.
If `arrayVerify` is false, indicating that the input array is empty, it sets finalResult to "Array Vazio!", which means "Empty Array!" in English.
Finally, the function returns the finalResult string, which will either contain the extracted data if the array is not empty or the "Array Vazio!" message if the array is empty.

```javascript
function main(array) {
  let finalResult;
  let arrayVerify = verifyArray(array);

  const lettersOnlyArray = getLettersArray(array);
  const numbersOnlyArray = getNumbersArray(array);
  const largestNumber = getLargestNumber(numbersOnlyArray);

  if(arrayVerify) { 
    finalResult = `Array containing only letters: ${lettersOnlyArray}
    Array containing only numbers: ${numbersOnlyArray}
    Largest number: ${largestNumber}`;
  } else {
    finalResult = `Array Vazio!`;
  }
  return finalResult;
}
```
## Run

Clone the repository from `GitHub git@github.com:JuanVictorDavila/Programing-challenge-Support-Engineer.git`.
Open the terminal and run ```npm install``` to install the dependencies.

Uncomment the indicated lines according to the comments in the code
open the terminal and run ```npm start``` to run the code

## Testing

To run the tests for this project, ensure you are in the "Programing-challenge" directory and execute the command npm run test in the terminal. The tests will check if the functions are passing and will provide coverage to ensure the project is working correctly.

Note: The tests are located in /test/test.js.

## Results

Initial data for test: ["a", 10, "b", "hello", 122, 15]

The algorithm should produce the following results:

An array containing only letters: ["a", "b", "hello"]

An array containing only numbers: [10, 122, 15]

The largest number: 122
