# Programming Challenge - Support Engineer

## Challenge
The objective of this challenge is to create an algorithm that traverses an array containing strings of letters and numbers.

## Solution
I have chosen JavaScript as the main programming language for this challenge and followed the coding best practices to create functions that resolve the problem.

```javascript
function getLettersArray(arr) {
  const lettersArray = [];
  for (let element of arr) {
    if (typeof element === "string") {
      lettersArray.push(element);
    }
  }
  return lettersArray;
}

function getNumbersArray(arr) {
  const numbersArray = [];
  for (let element of arr) {
    if (typeof element === "number") {
      numbersArray.push(element);
    }
  }
  return numbersArray;
}

function getLargestNumber(arr) {
  let largestNumber = -Infinity;
  for (let number of arr) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
}
```
#### Function: getLettersArray(arr)
This function receives an array as an argument and iterates through it using a ```for...of``` loop. It checks the type of each element using 'typeof' and appends the string elements to a new array called 'lettersArray'.

#### Function: getNumbersArray(arr)
Similarly, this function receives an array as an argument and iterates through it using a ```for...of``` loop. It checks the type of each element using 'typeof' and appends the number elements to a new array called 'numbersArray'.

#### Function: getLargestNumber(arr)
The third function, getLargestNumber, receives an array of numbers as an argument and iterates through it using a ```for...of``` loop. It finds and returns the largest number using a comparison method and a variable 'largestNumber'.

#### Main Function: main()
The main() function acts as a controller and calls the other three functions to obtain the final result. It initiates an example array and stores the results from the three functions in separate variables. Then, it formats the final result string and returns it.

```javascript
function main() { 
  const array = ["a", 10, "b", "hello", 122, 15];

  const lettersOnlyArray = getLettersArray(array);
  const numbersOnlyArray = getNumbersArray(array);
  const largestNumber = getLargestNumber(numbersOnlyArray);
  
  const finalResult = `Array containing only letters: ${lettersOnlyArray}
Array containing only numbers: ${numbersOnlyArray}
Largest number: ${largestNumber}`;

  return finalResult;
}
```
## Run

Clone the repository from `GitHub git@github.com:JuanVictorDavila/Programing-challenge-Support-Engineer.git`.
Open the terminal and run ```npm install``` to install the dependencies.

## Testing

To run the tests for this project, ensure you are in the "Programing-challenge" directory and execute the command npm run test in the terminal. The tests will check if the functions are passing and will provide coverage to ensure the project is working correctly.

Note: The tests are located in /test/test.js.

## Results
The algorithm should produce the following results:

An array containing only letters: ["a", "b", "hello"]
An array containing only numbers: [10, 122, 15]
The largest number: 122
