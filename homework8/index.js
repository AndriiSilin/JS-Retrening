// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// let b = numbers.reduce((b, c) =>
//      b + c);
//     console.log(b);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// let b = numbers.reduce(function(b, c) {
//     return b + c
// });
// console.log(b);

//-----------------------task1-----------------------------
// function getPromises(message, delay) {
//     return new Promise(function (resolve) {
//         setTimeout(function() {
//             resolve(message);
//         },delay);
//     })
// }

// getPromises("test promise", 2000).then(function(message) {
//     console.log(message);
// })

// function getPromises(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         },delay);
//     })
// }

// getPromises("test promise", 4000).then((message) => {
//     console.log(message);
// })
//---------------------end------------------------------------

//-------------------task2------------------------------------
// function calcArrProduct(arr) {
//     return new Promise ((resolve, reject) => {
//         let b = arr.reduce((b, c) => {
//             if (typeof b === "number") {
//             return b + c;
//             }
//             else reject ("Error! Incorrect array!");
//         })    
//     resolve(b);
//     })
// }
// calcArrProduct([1, 2, 3, 4, 5, 6, 7]).then(result => console.log(result));
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
//-------------------end-------------------------------------
//

//-----------------------task3-------------------------------
