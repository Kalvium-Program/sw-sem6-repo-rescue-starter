const test = require("node:test");
const assert = require("node:assert");
const { notices } = require("../src/server");

test("has at least one notice", () => {
  assert.ok(notices.length > 0);
});
