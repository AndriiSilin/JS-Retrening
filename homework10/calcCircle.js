


// function getCircleArea(radius) {
//      return Math.PI * radius ** 2;
// }
// module.exports = getCircleArea;

// function getCircleLength(radius) {
//     return Math.PI * radius * 2;
// }
// module.exports = getCircleLength;



exports.getCircleLength = function (radius) {
    return 2 * Math.PI * radius;
}

exports.getCircleArea = function (radius) {
    return Math.PI * radius ** 2;
}


