//task1
//1_1
//let x = 1;
//let y = 2;
//x = "1";
//let res1 = x + y;
//console.log(res1, 'and type of res1 -' + typeof res1);
//console.log(typeof res1)
//1_2
//x = true;
//y = "2";
//let res2 = x + y;
//console.log(res2, 'and type of res2 -' + typeof res2);
//console.log(typeof res2);
//1_3
//x = true;
//y = x;
//let res3 = y;
//console.log(res3, 'and type of res3 -' + typeof res3);
//console.log(typeof res3);
//1_4
//x = "hi";
//y = 2;
//let res4 = x * y;
//console.log(res4, 'and type of res4 -' + typeof res4);
//console.log(typeof res4);

//task 2

//let data = prompt("Enter nuber");
//if (data > 0 & data % 2 == 0){
//    console.log(data + "number is positive and even");
//}
//else if (data < 0 & data % 2 == 0){
//    console.log(data + " number is negative and even");
//}
//else if (data % 7 == 0){
//    console.log(data + " number is multiple of 7");
//}
//else
//console.log(data + " number is't multiple of 7 and odd"); 

//task3
//const arrayOfData = [];
//arrayOfData [0] = 25;
//arrayOfData [1] = "Chernivtsi";
//arrayOfData [2] = "electricity on" == false;
//arrayOfData [3] = null;
//console.log(arrayOfData[0] + '\n' + arrayOfData[1] + '\n' + arrayOfData[2] + '\n' + arrayOfData[3]);
//console.log(arrayOfData.length);
//let answer = prompt("Chernivtsi foundation year is:");
//arrayOfData[4] = answer;
//console.log(arrayOfData[4]);
//arrayOfData.shift();
//console.log(arrayOfData.length);

//task4
//let cities = ["Rome", "Lviv", "Warsaw"]; 
//console.log(cities[0] + '*' + cities[1] + '*' +cities[2]);

//task5
//let age = prompt("how old are you?:");
//if (age < 18){
//    alert("You are so young!!!")
//}
//else
//alert("You are adult!")



//task6
let a = +prompt("length a =");
if (a > 0){
    alert("correct")
}
else
alert("incorret data"); 
let b = +prompt("length b =");
if (b > 0){
    alert("correct")
}
else
alert("incorret data");
let c = +prompt("length c =");
if (c > 0){
    alert("correct")
}
else
alert("incorret data");
let p = (a + b + c) / 2;
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
alert("area =" + s.toFixed(3));

//task7
//var time = new Date();
//var now = time.getHours();
//if (now >= 23 & now < 5){
//    alert("Доброї ночі");
//}
//else if (now >= 5 & now < 11){
//    alert("Доброго ранку");
//}
//else if (now >= 11 & now < 17){
//    alert("Доброго дня");
//}
//else if (now >= 17 & now < 23){
//    alert("Доброго вечора");
//}    
//console.log(now);

//var time = new Date();
//var now = time.toLocaleTimeString();
//console.log(now);