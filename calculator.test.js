import { add, divide } from "./calculator";

test("it adds 1 and 1 and returns 2", () => {
  // arrange
  const param1 = 1;
  const param2 = 1;
  const expected = 2;

  // act and assert
  expect(add(param1, param2)).toEqual(expected);
});

test("it should throw an error when divided by zero", () => {
  // arrange
  const param1 = 1;
  const param2 = 0;

  // act and assert
  expect(() => divide(param1, param2)).toThrow("Can't divide by zero");
});
