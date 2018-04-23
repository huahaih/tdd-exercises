import { expect } from "chai";
import { add, factorial } from "../src/1.math";

describe("Math testing", () => {
  // Part A) write a bunch of test cases to test a function that adds 2 numbers

  it("should add 2 numbers", () => {
    var result = add(5, 3);

    expect(result).to.equal(8);
  });

  // Part B) write a test case to test a function that returns a factorial of a number sent to it
  it("should return a factorial of a number", () => {
    var result = factorial(5);
    expect(result).to.equal(120);
  });

  // Part C) write a bunch of test cases to test a function that calculates the n-th fibonacci sequence
  // function accepts 1 integer
  // if the # of the integer is 5, return the 5th fibonacci # in the sequence

  // Part D) write a test case to test the same function, that compares 2 numbers to be false
});
