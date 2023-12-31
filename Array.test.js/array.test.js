import numbers from "../index.js";
import CodersArray from "../Array.js/Array.js";

describe("Given the class CodersArray's constructor", () => {
  describe("When it's called with 2 and 4 ", () => {
    test("Then it should retourn and object with two propiertiespointing to 2 and 4", () => {
      const valueA = 2;
      const valueB = 4;

      const values = new CodersArray(valueA, valueB);

      expect(values[0]).toBe(valueA);
      expect(values[1]).toBe(valueB);
    });
    test("Then it should have the lemgth of 2", () => {});
    const expectedLenght = 2;

    const values = new CodersArray(2, 4);

    expect(values.length).toBe(expectedLEnght);
  });
});

describe("Given the array numbers [3, 8, 10, 2]  ", () => {
  describe("When used property length", () => {
    test("Then it should return 4", () => {
      const expectedResult = 4;

      const numberLength = numbers.length;

      expect(numberLength).toBe(expectedResult);
    });
  });

  describe("When used push method and receives 6", () => {
    test("Then it should return [3, 8, 10, 2, 6]", () => {
      const expectedResult = [3, 8, 10, 2, 6];

      const numbersPush = numbers.push(6);

      expect(numbersPush).toStrictEqual(expectedResult);
    });
  });

  describe("When used map method and receives (number) => number + 1)", () => {
    test("Then it should return [ 4, 9, 11, 3 ]", () => {
      const expectedResult = [4, 9, 11, 3];

      const mappedNumbers = numbers.map((number) => number + 1);

      expect(mappedNumbers).toStrictEqual(expectedResult);
    });
  });

  describe("When used filter method and receive (number) => number < 10)", () => {
    test("Then it should return [3, 8, 2]", () => {
      const expectedResult = [3, 8, 2];

      const filteredNumbers = numbers.filter((number) => number < 10);

      expect(filteredNumbers).toStrictEqual(expectedResult);
    });
  });

  describe("When used find method and receive (number) => number < 10)", () => {
    test("Then it should return 3", () => {
      const expectedResult = 3;

      const foundNumber = numbers.find((number) => number < 10);

      expect(foundNumber).toBe(expectedResult);
    });
  });

  describe("When used some method and receive (number) => number > 10)", () => {
    test("Then it should return false", () => {
      const expectedResult = false;

      const hasSomeNumber = numbers.some((number) => number > 10);

      expect(hasSomeNumber).toBe(expectedResult);
    });
  });
});
