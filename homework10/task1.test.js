// const product = require('./task1'); // path
// describe("Multiply tests", () => {
//   test('multiply 1 by 2 is 3', () => {
//      expect(product(0.1, 0.2)).toBeCloseTo(0.3);
//     });
// })

const res = require('./task1'); // path
describe("Multiply tests", () => {
  test('multiply 1 by 2 is 3', () => {
     expect(res.product1(1, 2)).toBeCloseTo(2);
    });
})