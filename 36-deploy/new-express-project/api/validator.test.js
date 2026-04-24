const { isValidEmail, isNumber } = require("./validator");

// test 1
test("it can validate valid email address", function () {
  expect(isValidEmail("email@example.com")).toBe(true);
});

// test 2
test("it can validate invalid email address", function () {
  expect(isValidEmail("email@example")).toBe(false);
});

// test 3
test("it can validate the input is number", function () {
  expect(isNumber(2)).toBe(true);
});
