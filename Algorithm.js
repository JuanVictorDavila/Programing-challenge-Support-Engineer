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

function main() { 
  const array = ["a", 10, "b", "hello", 122, 15];

  const lettersOnlyArray = getLettersArray(array);
  const numbersOnlyArray = getNumbersArray(array);
  const largestNumber = getLargestNumber(numbersOnlyArray);
  
  const finalResult = `Array containing only letters: ${lettersOnlyArray}
Array containing only numbers: ${numbersOnlyArray}
Largest number: ${largestNumber}`;

  // To see the result on the Teminal, uncomment the line bellow
  // console.log(finalResult);

  return finalResult;
}

main();

module.exports = {
  getLettersArray,
  getNumbersArray,
  getLargestNumber,
  main
}
