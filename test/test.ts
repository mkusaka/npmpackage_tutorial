import { describe, it } from "mocha";
import { IsNullOrEmpty } from "../src/index";
import { assert } from "chai";

describe("test", () => {
  it("valid", () => {
    assert.equal(IsNullOrEmpty(""), true);
  });
});
