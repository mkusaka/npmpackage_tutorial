import { describe, it } from "mocha";
import { IsNullOrEmpty, IsNullOrEmptyString, IsNullOrEmptyArray, isArray } from "../src/index";
import { expect } from "chai";

describe("IsNullOrEmpty", () => {
  it("apply \"\" returns true", () => {
    expect(IsNullOrEmpty("")).to.equal(true);
  });

  it("apply `some string` returns false", () => {
    expect(IsNullOrEmpty("some string")).to.equal(false);
  });

  it("apply null returns false", () => {
    expect(IsNullOrEmpty(null)).to.equal(true);
  });

  it("apply [] returns false", () => {
    expect(IsNullOrEmpty([])).to.equal(true);
  });

  it("apply undefinded returns false", () => {
    expect(IsNullOrEmpty(undefined)).to.equal(true);
  });

  it("apply legth > 0 array returns false", () => {
    expect(IsNullOrEmpty(["some"])).to.equal(false);
  });

  it("apply legth > 0 array returns false", () => {
    expect(IsNullOrEmpty([null])).to.equal(false);
  });
});

describe("IsNullOrEmptyString", () => {
  it("apply undefinded returns true", () => {
    expect(IsNullOrEmptyString(undefined)).to.equal(true);
  });

  it("apply \"\" returns true", () => {
    expect(IsNullOrEmptyString("")).to.equal(true);
  });

  it("apply `some string` returns false", () => {
    expect(IsNullOrEmptyString("some string")).to.equal(false);
  });
});

describe("IsNullOrEmptyArray", () => {
  it("apply [] returns false", () => {
    expect(IsNullOrEmptyArray([])).to.equal(true);
  });

  it("apply undefinded returns false", () => {
    expect(IsNullOrEmptyArray(undefined)).to.equal(true);
  });

  it("apply legth > 0 array returns false", () => {
    expect(IsNullOrEmptyArray(["some"])).to.equal(false);
  });

  it("apply legth > 0 array returns false", () => {
    expect(IsNullOrEmptyArray([null])).to.equal(false);
  });
});

describe("isArray", () => {
  it("undefinded is not Array", () => {
    expect(isArray(undefined)).to.equal(false);
  });

  it("boolean is not Array", () => {
    expect(isArray(false)).to.equal(false);
    expect(isArray(true)).to.equal(false);
  });

  it("string is not Array", () => {
    expect(isArray("I am string")).to.equal(false);
  });

  it("function is not Array", () => {
    expect(isArray("I am string")).to.equal(false);
  });

  it("object literal is not Array", () => {
    expect(isArray({})).to.equal(false);
  });

  it("empty array literal `is` Array", () => {
    expect(isArray([])).to.equal(true);
  });

  it("some elements array literal `is` Array", () => {
    expect(isArray([1, "string"])).to.equal(true);
  });

  it("array from Array constructor `is` Array", () => {
    expect(isArray(new Array(3))).to.equal(true);
    expect(isArray(new Array(3, 3))).to.equal(true);
    expect(isArray(new Array("string"))).to.equal(true);
    expect(isArray(new Array("string", "is"))).to.equal(true);
  });
});
