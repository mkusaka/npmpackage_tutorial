import { describe, it } from "mocha";
import { IsNullOrEmpty, IsNullOrEmptyString, IsNullOrEmptyArray } from "../src/index";
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
