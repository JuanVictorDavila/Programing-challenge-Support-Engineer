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

function verifyArray(arr) {
  let verify;

  if(arr.length > 0) {
    verify = true;
  } else {
    verify = false;
  }

  return verify;
}

function main(arr) {
  let finalResult;
  let arrayVerify = verifyArray(arr);

  const lettersOnlyArray = getLettersArray(arr);
  const numbersOnlyArray = getNumbersArray(arr);
  const largestNumber = getLargestNumber(numbersOnlyArray);

  if(arrayVerify) { 
    finalResult = `Array containing only letters: ${lettersOnlyArray}
    Array containing only numbers: ${numbersOnlyArray}
    Largest number: ${largestNumber}`;
  } else {
    finalResult = `Array Vazio!`;
  }
  // To see the result on the Teminal, uncomment the line bellow
  // console.log(finalResult);
  return finalResult;
}

//const arr = ["a", 10, "b", "hello", 122, 15];
//const array = [];
//main(arr);

module.exports = {
  getLettersArray,
  getNumbersArray,
  getLargestNumber,
  verifyArray,
  main
}
