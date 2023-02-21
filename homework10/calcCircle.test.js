// const getCircleLength = require('./calcCircle');

// describe('Test Circle', () => {
// test('Testing the length of circle', () => {
//     expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
//     expect(getCircleLength()).toBeNaN()});
// });

// const getCircleArea = require('./calcCircle')

// describe('Test Circle', () => {
// test('Test area of the circle', () => {
//     expect(getCircleArea(9)).toBeCloseTo(254.47);
//     expect(getCircleArea()).toBeNaN()});
// });

const circle = require('./calcCircle');
test('Test area of the circle', () => {
    expect(circle.getCircleArea(9)).toBeCloseTo(254.47);
    expect(circle.getCircleArea()).toBeNaN();
});

test('Testing the length of circle', () => {
    expect(circle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    expect(circle.getCircleLength()).toBeNaN();
});