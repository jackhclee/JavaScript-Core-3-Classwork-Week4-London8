const greetPerson = require("./greet-person");

/* Complete the tests */

test("return person's name prefixed with Hello", () => {
  expect(greetPerson("Jack")).toEqual("Hello Jack");
});
