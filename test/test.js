const chai = require("chai");
const expect = chai.expect;

const {
  getLettersArray,
  getNumbersArray,
  getLargestNumber,
  main
} = require("../Algorithm");

describe("Function getLettersArray", () => {
  it("should return an array containing only letters", () => {
    const inputArray = ["a", 10, "b", "hello", 122, 15];
    const result = getLettersArray(inputArray);
    expect(result).to.deep.equal(["a", "b", "hello"]);
  });
});

describe("Function getNumbersArray", () => {
  it("should return an array containing only numbers", () => {
    const inputArray = ["a", 10, "b", "hello", 122, 15];
    const result = getNumbersArray(inputArray);
    expect(result).to.deep.equal([10, 122, 15]);
  });
});

describe("Function getLargestNumber", () => {
  it("should return the largest number from the array", () => {
    const inputArray = [10, 5, 15, 8];
    const result = getLargestNumber(inputArray);
    expect(result).to.equal(15);
  });
});

describe("Function main", () => {
  it("should return all the tree informations", () => {
    const inputArray = ["a", 10, "b", "hello", 122, 15];
    const result = main(inputArray);

    expect(result).to.deep.equal(`Array containing only letters: a,b,hello
Array containing only numbers: 10,122,15
Largest number: 122`);
  });
});
