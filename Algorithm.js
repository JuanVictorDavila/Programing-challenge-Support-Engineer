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
  const lettersArray = array.filter(element => isNaN(element));

  return lettersArray;
}

function getNumbersArray(array) {
  const numbersArray = array.filter(element => !isNaN(element));

  return numbersArray;
}

function getLargestNumber(numbersOnlyArray) {
  const largestNumber = Math.max(...numbersOnlyArray);

  return largestNumber;
}

function main(array) {
  let finalResult;
  
  const arrayVerify = verifyArray(array);
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
  // To see the result on the Teminal, uncomment the line bellow
  console.log(finalResult);
  return finalResult;
}
// To see the code runing on console, uncomment the line bellow
const array = ["a", 10, "b", "hello", 122, 15];

// To see the code runing with array empty, uncomment the line bellow and comment the line above
//const array = [];

// To call the main function to run the code, uncomment the line bellow
main(array);

module.exports = {
  getLettersArray,
  getNumbersArray,
  getLargestNumber,
  verifyArray,
  main
}
