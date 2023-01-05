
//task1
// let width = +prompt("Enter width");
// let height = +prompt("Enter height");

//  function calcRectangleArea(){
//     let area = height * width;
//     if (isNaN(height)){
//         throw new Error("value for height is not a number");
//         }
//         else if (isNaN(width)){
//         throw new Error("value for width is not a number");
//         }
//         return area;
//     }
//     try { let result = calcRectangleArea();
//             alert("area is " + result);
//     }
//     catch(exception){
//         console.log(exception.message);
//      }

//task2

//  function checkAge(){
//     let age = +prompt("Enter your age");
//     if (isNaN(age)){
//         throw new Error(alert("value is not number"));
//         }
//          else if (age == ''){
//              throw new Error(alert("field is empty"));
//         }
//         else if (age < 14){
//             throw new Error (alert("age less then 14"));
//         }
//         return age;
//     }
//     try { let result = checkAge();
//             alert("Your age is " + result + " film is avalible");
//     }
//     catch(exception){
//         console.log(exception.message);
//         console.log(exception.name);
//      }
//    

//task3

// class MonthExaption{
//     constructor(message){
//     this.message = message;
//     this.name = "MounthExaption"
//     }
// }
// let month = +prompt("Enter a number of mounth")
// function showMonthName(month){
//     //let month = +prompt("Enter the number of month");
//     if (month === 1){
//         month = "January"
//     }
//      else if (month === 2){
//         month = "February"
//     }
//     else if (month === 3){
//         month = "March"
//     }
//     else if (month === 4){
//         month = "April"
//     }
//     else if (month === 5){
//         month = "May"
//     }
//     else if (month === 6){
//         month = "June"
//     }
//     else if (month === 7){
//         month = "Julay"
//     }
//     else if (month === 8){
//         month = "Agust"
//     }
//     else if (month === 9){
//         month = "September"
//     }
//     else if (month === 10){
//         month = "October"
//     }
//     else if (month === 11){
//         month = "November"
//     }
//     else if (month === 12){
//         month = "December"
//     } 
//     else if (month > 12 || month < 0){
//     throw new MonthExaption('month does not exist')
//     }
//     return month
    
// } 
// try {
//     let res = showMonthName(month);
//     console.log(res);
// }
// catch (exeption){
//     console.log(exeption.name);
//     console.log(exeption.message);
// }
//task3 use swetch
// class MonthExaption{
//     constructor(message){
//     this.message = message;
//     this.name = "MounthExaption"
//     }
// }
// let month = +prompt("Enter a number of mounth")
// function showMonthName(month){
//     //let month = +prompt("Enter the number of month");
//     switch(month){
//             case 1:
//                 month = 'January';
//                 break;
//             case 2:
//                 month = 'February';
//                 break;
//             case 3:
//                 month = 'March';
//                 break;
//             case 4:
//                 month = 'April';
//                 break;
//             case 5:
//                 month = 'May';
//                 break;
//             case 6:
//                 month = 'June';
//                 break;
//             case 7:
//                 month = 'July';
//                 break;
//             case 8:
//                 month = 'August';
//                 break;
//             case 9:
//                 month = 'September';
//                 break;
//             case 10:
//                 month = 'October';
//                 break;
//             case 11:
//                 month = 'November';
//                 break;
//             case 12:
//                 month = 'December';
//                 break;
//             default:
//                 throw new MonthExaption('month does not exist'); 
//     }
//     return month
    
//  } 
// try {
//     let res = showMonthName(month);
//     console.log(res);
// }
// catch (exeption){
//     console.log(exeption.name);
//     console.log(exeption.message);
// }

//task 4