//task1
// let someText = "regular value";
// let regEx = /^[a-z]/;
// let res = regEx.test(someText)
// console.log(res);

// function check (text){
//      regEx = /^[A-Z]/;
//      if (regEx.test(text)){
//         console.log("text starts with upper case");
//      }
//      else{
//         console.log("text does not start with upper case");
//      }     
// }
// check(prompt("enter text"));
//-----------------------------------end------------------

//task2

// function checkEmail(str) {
//     let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]/;
      
//     if (str.match(regEx)) {
//         alert("Valid email");
//     } else {
//         alert("Invalid email");             
//     }
      
// }
    
//     console.log(checkEmail("test@i.ua.com"));
//     console.log(checkEmail("CheckEmail.com"));
//-----------------------------------end--------------------

//task3

// function repeateLetters (text){
//     regEx = /db+|bd+b|b+| d/gi 
//     console.log(text.match(regEx));
// }
// repeateLetters('cdbBdbsbz');

//-----------------------------------end------------------

//task4
// let text = "Java Script"

// console.log(text.replace("Java", "Script") + " " + text.replace(/Script/g, "Java"));    

// let str = "Java Script"
// newStr = str.replace(/(\w+)\s(\w+)/, '$2 $1');
// console.log(newStr);

//-----------------------------------end------------------

//task5
// function checkcard(str){
//     let regEx = /\d{4}\-\d{4}\-\d{4}\-\d{4}/
//     console.log(regEx.test(str));
//     if (regEx.test(str)){
//      console.log("card  is valid " + str);
//     }else{ 
//      console.log("card is not valid "  + str);
//     }
//     }
//     checkcard("1023-4510-4353-1257");
//     checkcard("102A-4510-4353-1257");
//     checkcard("1023-4510-435322-1257");