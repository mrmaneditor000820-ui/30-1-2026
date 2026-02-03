// console.log("js zinda he")

// var arr =[{name:"ali"},{name:"bilal"}]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])
// }

// var arrMap = arr.map(function(data){
//     return data
// })
// console.log("arrMap",arrMap)

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);

// console.log(uname)
// // tdz
// let uname = "ali"

// if (true) {
//     let fname = "ali"
// }
// console.log("fname=>",fname)

// function test() {
//     var fname = "ali2"
// }
// test()
// console.log("fname=>",fname)
// token = "fregerfger"
// function outer() {
//     let fname = 12
//     function inner() {
//         let lname = "khan"
//         fname++
//         console.log(fname, lname)
//     }
//     inner()
//     inner()
//     inner()
// }
// outer()

// function test2(){
//     let a = 2
//     return a
// }
// test2()



// console.log(a)

// function add(a,b){
//    return  result = a + b
// }
// console.log(result())



// function add(){
//     let counter = 20
//     counter++
//     return counter
// }
// add()
// add()
// console.log(counter)

// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
// console.log(counter)
// }
//   plus();   
// }
// add()
// add()



// function myCounter2() {
//   let counter = 0;
//   return function() {
//     counter++; // 1  ,2,3
//     console.log(counter)
//     return counter;
//   };
// }
// const add = myCounter2();
// add();
// add();




// class studentData {
//     constructor(fname, lname) {
//         this.fname = fname
//         this.lname = lname
//     }
//     getData(){
//         return console.log(this.fname + this.lname)
//     }
   
// }

// class StudentAge extends  studentData{
//     // constructor
// }



// var student1 = new studentData("ali","khan")

// student1.getData()


// synchronous  //line by line
// asynchronous //

// console.log("first line")

// async function test() {
//  setTimeout(()=>{
//     console.log("set time out")
// },2000)
// }
// setTimeout(test)

// console.log("second line")

// console.log("js zinda he")

// var arr =[{name:"ali"},{name:"bilal"}]

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])
// }

// var arrMap = arr.map(function(data){
//     return data
// })
// console.log("arrMap",arrMap)

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);

// console.log(uname)
// // tdz
// let uname = "ali"

// if (true) {
//     let fname = "ali"
// }
// console.log("fname=>",fname)

// function test() {
//     var fname = "ali2"
// }
// test()
// console.log("fname=>",fname)
// token = "fregerfger"
// function outer() {
//     let fname = 12
//     function inner() {
//         let lname = "khan"
//         fname++
//         console.log(fname, lname)
//     }
//     inner()
//     inner()
//     inner()
// }
// outer()

// function test2(){
//     let a = 2
//     return a
// }
// test2()



// console.log(a)

// function add(a,b){
//    return  result = a + b
// }
// console.log(result())



// function add(){
//     let counter = 20
//     counter++
//     return counter
// }
// add()
// add()
// console.log(counter)

// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
// console.log(counter)
// }
//   plus();   
// }
// add()
// add()



// function myCounter2() {
//   let counter = 0;
//   return function() {
//     counter++; // 1  ,2,3
//     console.log(counter)
//     return counter;
//   };
// }
// const add = myCounter2();
// add();
// add();




// class studentData {
//     constructor(fname, lname) {
//         this.fname = fname
//         this.lname = lname
//     }
//     getData(){
//         return console.log(this.fname + this.lname)
//     }

// }

// class StudentAge extends  studentData{
//     // constructor
// }



// var student1 = new stud` ("ali","khan")

// student1.getData()


// synchronous  //line by line
// asynchronous //

// console.log("first line")

// async function test() {
//  setTimeout(()=>{
//     console.log("set time out")
// },2000)
// }
// setTimeout(test)

// console.log("second line")
// "use strict"
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function()  {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName())
// "use strict"
// let mname = this;
// console.log(mname)

//  --- call()

// function student(fname) {
//     return console.log(`hello  ${fname}  ${this.roll}  ` )
// }
// const student1 = {
//     firstName: "bilal",
//     lastName: "awan",
//     age: 20,
//     roll:102
// }
// const student2 = {
//     firstName: "kashif",
//     lastName: "khan",
//     age: 30
// }

// student.call(student1,"khan")

const studentData = {
    fullName: function (test,test2) {
        return console.log(`hello  ${test} ${test2}  ${this.fname}  ${this.age}  `)
    }
}
const student1 ={
    fname:"ali",
    lname:"khan",
    age:20
}
studentData.fullName.call(student1,"test","test2")

function test(){
    return console.log(this.name.mname)
}
const std = {
    name:{
        mname:"ali khan"
    }
}
// test("ali")
test.call(std)