//task1
// let array = [2, 3, 4, 5];
// let total = 1;
// for (let i = 0; i < array.length; i++) {
//     total *= array[i];
// }
// alert(total);

// let array = [2, 3, 4, 5];
// let total = 1;
// let i = 0;
// while (i < array.length) {
//    total *= array[i];
//    i++;
// }
// alert(total);

//task2
// let array = [];
// array = Array.from({ length: 15 }, (v, i) =>  i ++); 
// console.log(array); 

// for (let i = 0; i <= 15; i++) {
//    if (i % 2 === 0) {
//      alert([i] + " is odd");
//    }
//    else {
//     alert([i] + " is even");
//    }
// };

//task3

// let length = 5;
// let min = 1;
// let max = 500;

// let array = [];
// for (let i=0; i < length; i++ ){
//  array.push(randomArray(min, max));
// }
// console.log(array);

// function randomArray(min, max){
//  random = Math.random() * (max - min) + min;
//  return random.toFixed(0);
// }

//task4
// function riseToDegree(a, b) {
// a = Number(prompt('enter the number a'));
// b = Number(prompt('enter the number b'));
// if (Number.isInteger(a) && Number.isInteger(b)){
//   let result = a ** b;
//   return result;
// }
// else {alert('Try again');
// }    
// }
// let res = riseToDegree();
// console.log(res); 

//task8 але це лише для першої букви
// let text = "i love java script";

// function firstUpperCharacter(text){
//     return text[0].toUpperCase() + text.substring(1);
// }

// console.log(firstUpperCharacter(text));

// //task6
// let lenght = 5;
// let array = [];
// for (i = 0; i < lenght; i++){
//     array[i] = prompt('Enter number ' +i);
// }
// console.log(array);

// function testUniqueSort(array)
// {
// let n = array.length;
// for (let i = 0; i < n-1; i++)
// { for (let j = i+1; j < n; j++)
// { if (array[ i ] === array[j]) 
//   return false; }
// }
// return true;
// }
// console.log(testUniqueSort(array));

