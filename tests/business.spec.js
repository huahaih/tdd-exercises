import { expect } from "chai";
import { something } from "../src/business";

// DO NOT CHANGE THESE TEST CASES
describe("Test this function", () => {
  it("#1 it should pass", () => {
    var result = something(1, 10);
    expect(result).to.equal(10);
  });

  it("#2 it should pass", () => {
    var result = something(2, 9);
    expect(result).to.equal(18);
  });

  it("#3 it should pass", () => {
    var result = something(3, 8);
    expect(result).to.equal(24);
  });

  it("#4 it should pass", () => {
    var result = something(4, 7);
    expect(result).to.equal(14);
  });

  it("#5 it should pass", () => {
    var result = something(5, 6);
    expect(result).to.equal(60);
  });

  it("#6 it should pass", () => {
    var result = something(6, 5);
    expect(result).to.equal(15);
  });

  it("#7 it should pass", () => {
    var result = something(7, 4);
    expect(result).to.equal(28);
  });

  it("#8 it should pass", () => {
    var result = something(8, 3);
    expect(result).to.equal(24);
  });

  it("#9 it should pass", () => {
    var result = something(9, 2);
    expect(result).to.equal(18);
  });

  it("#10 it should pass", () => {
    var result = something(10, 1);
    expect(result).to.equal(5);
  });
});
