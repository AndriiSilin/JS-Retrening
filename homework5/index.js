//task1
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// }

// function propsCount(object){
//     return Object.keys(object).length
// }
// console.log(propsCount(mentor))

// Task2

// let person = {
//     firstName: "Andrii",
//     secondName: "Silin",
//     age: 38,
//     course: "JS fundamental",
//     direction: "web-development"
// }

// function showProps(object) {

//     let array = [];
//     for (let items in object) {
//         array.push(items + ": " + object[items]);
// }
// return array;
// }

// console.log(showProps(person))

// //task3

// class Person {
//     constructor(name, surename){
//         this.name = name;
//         this.surname = surename;        
//         }
//         showFullName(){
//             return this.name + " " + this.surname;
//         }   

//     }
//---------------------------check person class-----------------
//  //let person = new Person("andrii", "silin")
//  //person.showFullName();
//--------------------------end--------------------------

//  class Student extends Person {
//     constructor(name, surename, year){
//         super(name, surename);
//         this.year = year;
//     }
//     showFullName(middleName){
//         alert(super.showFullName() + " " + middleName);
//     }
//     showCourse(){
//         let currentYear = 2023;
//         if(this.year < 2019 || this.year > 2025){
//             return alert ("You are not a student")
//         }
//         return currentYear - this.year;       
//     }
    
// }
// let student1 = new Student ("Petro", "Petrenko", 2020);
// console.log(student1.showFullName("Petrovych"));
// console.log("Current course: " + student1.showCourse());

// ------------------------------------forom homework6------------
// let someText = "regular value";
// let regEx = /^[a-z]/;
// let res = regEx.test(someText)
// console.log(res);

// function check (text){
//      regEx = /^[A-Z]/;
//      res = regEx.test(text);
// }
// check(prompt("enter text"));
// console.log(res);
//-----------------------------------end------------------

//task 4
//------------------------ 1 variant -------------------------------------------
// let employees = [];

// class Worker {
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         employees.push(this); 
//     }
//     showSalary() {
//         return console.log(this.dayRate * this.workingDays);
//     }
//     showSalaryWithExperience() {
//         return console.log(this.dayRate * this.workingDays * this.#experience); 
//     }
//     showSalaryWorker() {
//         return `${this.dayRate * this.workingDays * this.#experience}`;
//     }    
//     get showExp() {
//         return this.#experience;
//     }
//     set setExp(experience) {
//              if (experience < 1) {
//              alert("experience not enough");
//          }
//         this.#experience = experience;
//     }
//     sortSalaries(workersBySalary) {
//         let sortedSalary = workersBySalary.sort(function(a,b){
//             return a.showSalaryWorker() - b.showSalaryWorker; 
//         })
//         for (let i = 0; i <sortedSalary.length; i++) {
//             console.log(sortedSalary[i].fullName + " " + sortedSalary[i].showSalaryWorker());
//         }

//     }
// }
// //---------------------------check Worker class----------------
// // let worker1 = new Worker("Petro", 2, 20)
// // console.log(worker1.showExp, worker1.swowSalary(), + worker1.showSalaryWithExperience());
// //alert(worker1.showExp)
// //-------------------------end--------------------------------

// const worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 2;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// console.log("-------------")

// const worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);                 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 3;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("-------------")

// const worker3 = new Worker("Ivan  Petrov", 10, 17);
// console.log(worker3.fullName);                 
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.1;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// console.log("-------------")


// worker1.sortSalaries(employees);
//---------------------------------var 1------------------------------------


//---------------------------------var 2------------------------------------
// class Worker {
//     #experience = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//             this.fullName = fullName;
//             this.dayRate = dayRate;
//             this.workingDays = workingDays;
//         }
//         showSalary() {
//             return this.fullName + ": " + this.dayRate * this.workingDays;
//         }        

//         showSalaryWithExperiences() {
//             return Number((this.dayRate * this.workingDays * this.#experience).toFixed(2));
//         }

//         set setExp (newExperience) {
//             if (newExperience < 0) throw new Error ("Experience not enough");
//             this.#experience = newExperience;
//         }
//         get getExp () {
//             return this.#experience;
//         }
// }
// // dynamic sorting by salary

// function sortSalary (workers) {
        
//     return workers
//        .sort((a,b) => a.showSalaryWithExperiences() - b.showSalaryWithExperiences())
//        .map(worker => {
//            return {name: worker.fullName, salary: worker.showSalaryWithExperiences()}});
//    }


//     let worker1 = new Worker ("Andrii Silin", 45, 20);
//     let worker2 = new Worker ("Elena Petrova", 22, 15);
//     let worker3 = new Worker ("Oleg Hamza", 20, 105);
//     let worker4 = new Worker ("Dima Scherb", 30, 34);
//     let worker5 = new Worker ("Pavel Ivanov", 63, 22);

//     console.log(worker1.fullName)
//     console.log(worker1.showSalary());
//     console.log("experience value: " + worker1.getExp);
//     console.log("Salary with experience value: " + worker1.showSalaryWithExperiences());
//     worker1.setExp = 1.5;
//     console.log("experience value: " + worker1.getExp);
//     console.log("Salary with experience value: " + worker1.showSalaryWithExperiences());

//     console.log(worker2.fullName)
//     worker2.setExp = 3.5;
//     console.log("experience value: " + worker2.getExp);
//     console.log("Salary with experience value: " + worker2.showSalaryWithExperiences());

//     console.log(worker3.fullName)
//     worker3.setExp = 2.5;
//     console.log("experience value: " + worker3.getExp);
//     console.log("Salary with experience value: " + worker3.showSalaryWithExperiences());

//     console.log(worker4.fullName)
//     worker4.setExp = 1.9;
//     console.log("experience value: " + worker4.getExp);
//     console.log("Salary with experience value: " + worker4.showSalaryWithExperiences());

//     console.log(worker5.fullName)
//     worker4.setExp = 1.1;
//     console.log("experience value: " + worker5.getExp);
//     console.log("Salary with experience value: " + worker5.showSalaryWithExperiences());

//     // sorting

//     console.log (sortSalary([worker1, worker2, worker3, worker4, worker5]));
// //---------------------------------var 2------------------------------------

//task5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {

    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        let p = (this.sideA + this.sideB + this.sideB) / 2;
        return (p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) ** 0.5;
    }            
}


class Square extends GeometricFigure {

        constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures (figures){
    return figures.reduce(function(sum, figure) {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
            return sum + figure.getArea()
        }
        throw Error("Invalid figure");
    }, 0);
}

let figure = [new Triangle(4, 4, 4), new Square(9), new Circle(4)];
console.log(handleFigures(figure));
