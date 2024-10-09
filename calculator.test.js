import { add } from "./calculator";

test("it adds 1 and 1 and returns 2", () => {
  // arrange
  const param1 = 1;
  const param2 = 1;
  const expected = 2;

  // act and assert
  expect(add(param1, param2)).toEqual(expected);
});
