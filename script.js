// function show(){
//     var num=20;
//     var num2=10;
//     console.log(num+num2);
//     console.log("This is show function");
// }
// show();


// var num=10;
// var num2=20;
// console.log(num/=num2);


// var num=10;
// var num2=20;
// console.log(num===num2);


// var  num=7;
// var num=8;
// console.log(~-7);


// for(var num=1;num<5;num++){
// console.log("I have "+num+" Apples");
// }



// var n=5;
// do{
//     console.log("This is do while"+n);
//     n--;
// }
//     while(n==0)




// -----------------------------


// var x=2;
// if(x<20){
//     console.log("hello");



// function ajay(){
//         console.log("hello");

// }
// ajay();



// var factor="kernal";
// function factor(){
//         console.log("this is a actor");

// }



// var fplayer="dhoni";

// var fmovie="garuda";

// factor();


//*(nan=not a number)

// var a=10;
// var b=20;

// function add(a,b){
//         console.log(a+b);

// }
// add();


//------------------------

// function add(a,b){
//         return(a+b)
// }

// var total=add(10,20);
// console.log(total);


//----------------------------

// for (count=1;count<=5;count+1){
//         console.log("ajay");

// }



// let arr=[2,3,4,5,6,7,8]

// console.log(arr);

// arr.pop();
// console.log(arr.push());



// let str="BACKSPACE";
// let s="";
// for(let i=0;i<str.length;i++){
//     s=str.charAt(i)+s;
// }

// if(str==s){
//     console.log("this is palindrome");
// }
// else{
//     console.log("not a palindrome");
// }

// console.log(s);



// ==============================================

// class CustomDate{
//     #systemDate;
//     systemTime;

//     constructor(date){
//         this.#systemDate="10";
//         this.systemTime=7;
//             this.systemDate=date;
//     }
//     getTime(){
//         console.log(this.systemTime);
//     }
//     getDate(){
//         console.log(this.systemDate);

//         console.log(this.#systemDate);
//     }
// }

// let date = new CustomDate("12/3/2000");
// // date.systemDate="9"
// date.getDate();
// date.getTime();





// class Date{
//     systemDate;
//     SystemTime;

//     constructor(date){
//         this.systemDate="30/8/2024";
//         this.systemDate=date;

//     }


// getTime(){

//     console.log(this.SystemTime);


// }
// getDate(){
//     console.log(this.systemDate);

//     console.log(this.systemDate);  
// }
// }

// class Student{
//   Base class, Parent clas, Super class
//     name;
//     age;
//     #regNo;
//     constructor(name, age, regNo){
//         this.name=name;
//         this.age=age;
//         this.regNo=regNo
//     }

//     getName(){
//         console.log("Ram");
//     }
// }


// class Staff extends Student{
// Derived Class, Child class, sub class
//     onlystf(){
//         console.log("staff");
//     }
// }

// let std = new Student();

// let stf = new Staff();
// stf.getName();



// class Student {
//     name;
//     age;
//     constructor(studentName, studentAge) {
//         this.name = studentName;
//         this.age = studentAge;
//         console.log("Student");
//     }
//     getName() {
//         this.name = "john"
//         this.age = 23
//         console.log("My name is " + this.name + " and my age is " + age);
//     }
// }

// class Staff extends Student{
//     staffID;

//     constructor(staffIdNumber, staffName, staffAge){
//         super(staffName, staffAge)
//         super.name=staffName;
//         super.age=staffAge;
//         this.staffID=staffIdNumber;
//         console.log("staff");

//     }
// }

// let stf = new Staff(12, "Ram", 5,);

// console.log(stf.staffID);
// console.log(stf.name);
// console.log(stf.age);



// class Demo{
//     #name;
//     #age;
//     regNo;
//     constructor(name, age, regNo){
//         this.#name=name;
//         this.#age=age;
//         this.regNo=regNo;
//     }
//     get getName(){
//         return this.#name;
//     }
//     set setName(name){
//         this.#name=name;
//     }

// }

// let demo = new Demo("Adam", 24, 1804);
// console.log(demo.regNo);

// let name = demo.getName;
// console.log(name)

// demo.setName ="Alan";
//  console.log(demo.getName);                                                                                                                                                                                                          Zzz



// Collection
// What is Collection?
//      A collection in programming is a way to store and manage multiple items or values. These items can be anything: numbers, strings, or objects. Collections make it easier to work with groups of data by allowing you to add, remove, and access these items.

// Types of Collections
// 1.Array
// 2.Set
// 3.Map
// 4.WeakSet
// 5.WeakMap

// 1.What is an Array?
//        An array is a way to store a list of items in one place. You can think of it like a row of boxes, where each box holds one item.
// Key Points:
// 1.Order: Items in an array are stored in a specific order.
// 2.Index: Each item has a position number (starting from 0 to n).
// 3.Flexible Size: You can add or remove items from an array.

//Create an Array:
//   let fruits = ['apple', 'banana', 'cherry'];
// Object Creation:
// let arr = new Array();
// arr.copyWithin()







// class Array1{
//     constructor(){

//     }
//     concat(){
//         console.log("hi");

//     }

// }

// let a = new Array1();
// a.concat();



// 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

// if satatement

// var rain = false;

// if (rain) {
//     console.log("take an umberla");


// }

// else {
//     console.log("enjoy the sunshine");

// }


// 12Am(0)to 1postMessage(13) >good morning
// else if 1pm(13 to) 5postMessage(17)>good afternoon
// else hour 5pm(17) to 12Animation(0)>good evening


// let hour = 1;

// if (hour > 0 && hour <= 13)

//     console.log("Good morning");

// else if (hour >= 13 && hour <= 17)
//     console.log("Good afternoon");

// else 
//     console.log("Good evening");


// switch(age){
//     case:20;
//     console.log(age);

//     break;
//     case:20;


// loop ststement  



// for(let apple=1;apple<50;apple++){
// console.log("apple #" ,apple);
// }


// let i = 15;

// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log("Odd Number #" + i);
//         break;


//     }

//     i--;
// }




// =====================================================

// function checkAge  (age){
//     if (age<18){
//         return "too young";
//     }
//     else{
//         return "Welcome";
//     }
// }

// console.log(checkAge(12));

// console.log(checkAge(21));


// class Date{

// systemdate;
// systemtime;

// constructor(){
//     this.systemdate="4/9/2024";
//     this.systemtime=12;
// }

// gettime(){

// console.log(this.systemtime);
// }


// getdate(){

// console.log(this.systemdate);
// }



// }


// let date = new Date();

// date.getdate();
// date.gettime();

// ===========================================================

// class Std {
//     studentName;
//     studentAge;
//     studentRegno;



//     constructor() {
//         this.studentName = "Ajay";
//         this.studentAge = 22;
//         this.studentRegno = 9603;
//     }

//     get Name(){
//         console.log("My name is " + this.studentName + "  and my regno is " + this.studentRegno); 

//     }


// }



// let std = new Std();
// std.Name;

// std.getName();
// std.getAge();
// std.getRegno();



// =============================================================================

// this key word


// class Staff {

//     Name;
//     Age;
//     Id;

//     constructor(){
//         this.staffName="Kelly"
//         this.staffAge=25;
//         this.StaffId=78;
//     }

//     getName(){
//         console.log("my name is " +this.staffName+ "and my age is " + this.staffAge + "and my id is" + this.StaffId);
//     }
// }

// let stf=new Staff();
//     stf.getName();

// class student extends Staff{
//     regno;
//     constructor(studentname,studentage,studentregno){
//         super(studentname,studentage)
//         super.name=studentname;
//         super.age=studentage;
//         this.regno=studentregno;
//     }
// }
//  let std =new student("ajay",21,4321 );
//  console.log(std.name);
//  console.log(std.age);
//  console.log(std.regno);



// ===================================================
// private property

// class Demo{
//     #name;
//     #age;
//     #regno;

//     constructor(){
//         this.#name="Adam";
//         this.#age=23;
//         this.#regno=regno;
//     }

//     get getName(){
//         return this.#name;

//     }

//     set set(name){
//         this.#name=name;

//     }

    
// }

// let demo=new Demo("adam",23,9603);
// console.log(demo.regno);

// let name=demo.getName;
// console.log(name);



// // // ==============================================

// let name="Ajay";
// let a="";

// for(i=0;i<name.length;i++){
//     a=name.charAt(i)+a;
// }
// console.log(a);

// // =======================================

// object:


// let obj={
//     "name":"Miniki",
//     age:24,
//     "department":"CSE",

//     data:function(){
//         console.log("This is Data function");

//     }

// }

// console.log(obj);


// let ob=new Object();

// ob.name="Alok"
// ob.age=25

// ob.data=function(){
//     console.log("hii its me");
//     return "ok";
// }

// console.log(ob.data());



// let arr=new Array();

// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// arr.push(50);

// console.log(arr[3]);


// let s=new Set();

//     s.add(10);
//     s.add(20);
//     s.add(30);
//     s.add(10);
//     console.log(s);

// // ==================================================

// let obj = {
//     mame: "mini",
//     age: 25,

//     data: function () {

//         console.log("This is a data function");


//     }
// }

// console.log(obj);



// let ob=new Object();

// ob.name="Ajay";
// ob.age=21;

// ob.data=function() {

//     console.log("My name is Ajay");

//     return "My age is 21";

// }

// console.log(ob.data());

// ============================================================================
// Map


let obj={name:"Ajay"};
let s=new WeakSet();

s.add(obj);
console.log(obj);


// let myMap=new Map();

// let myobject={name:"Alok"}
