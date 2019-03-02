import { describe, it } from "mocha";
import { IsNullOrEmpty } from "../src/index";
import { expect } from "chai";

describe("IsNullOrEmpty", () => {
  it("apply \"\" returns true", () => {
    expect(IsNullOrEmpty("")).to.equal(true);
  });

  it("apply `some string` returns false", () => {
    expect(IsNullOrEmpty("some string")).to.equal(false);
  });
});
