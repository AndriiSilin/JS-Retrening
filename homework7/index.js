//task1
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [firstName, secondName, , ...rest] = arr;
// function name (x, y, z,){
//      x = firstName;
//      y = secondName;
//      z = rest;
//      console.log(x); 
//      console.log(y); 
//      console.log(z);
// }
// name(firstName, secondName, rest);
//------------------------------------------------------------
//var2
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [firstName, secondName, , ...rest] = arr;
//  x = firstName;
//  y = secondName;
//  z = rest;
//  console.log(x); 
//  console.log(y); 
//  console.log(z);
//--------------------------------end-------------------------------
//task2
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let {names: arrayNames} = data;
//  let [, secondName, , fourthName] = arrayNames;
//  let name2 = secondName;
//  let name4 = fourthName;
//  let {ages: arrayAges} = data;
//  let [, secondAges, , fourthAges] = arrayAges;
//  let age2 = secondAges;
//  let age4 = fourthAges;
//  console.log(name2); // "Tom"
//  console.log(age2); // 24
//  console.log(name4); // "Bob"
//  console.log(age4); // 26
//--------------------------end------------------------------- 
//task3
// function mul(...values) {
//     let res = 1;
//     let isNumber = false;
//     for (let i of values) {
//         if (typeof i === 'number'){
//             res *= i;
//             isNumber = true;         
//         }
//     }
//     return isNumber ? res : 0;
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
// console.log(mul(10, "str", 2, 3, true));

//-------------------------end-------------------------------
//task 4
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback(() => {
//           return this.data + "";
//        });
//     }
//  };
 
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification: function () {
//        return callback =>  {
//           this.result = callback();
//        }
//     }
//  };
//  client.calc(123);
//  console.log(client.result); // "123"
//  console.log(typeof client.result); // "string"
 //------------------------------end-------------------------
 // task 5

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// function mapBuilder(keys, values) {
//     const myCollection = new Map ();
//     for (let i = 0; i < keys.length; i++) {
//         myCollection.set(keys[i], values[i]);
//     } 
//     return myCollection;
// }
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"
// console.log(map.get(1)); 
// for (let collect of map) {
//     console.log(collect);
// } 