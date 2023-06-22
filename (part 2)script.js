// Hello you! this is second part of basics in JAVASCRIPT                                umcomment  to study the individual topics           to uncommnet just remove   (  /*  &  */ )    from the topics starting point and at ending point    


/*
//                            Activating Strict mode
// used for writing secure code
'use strict';    // just write this line of code @ top of code at begining of code yo enable strict mode

*/


/*
//                           functions
//  The fundamental buildind block of real world JS is its functions
function a (){
    console.log("I'm Siraj")     // function body  write code which needed for recalling 
  }
// to call or invoke written function use
  a();

// now another scenario with arguments 
function mixer(apple,banana) {
    console.log(apple,banana);     // to be frank we don't need this line    but wtring this line for your undestanding
    const juice = `Juice with ${apple} apple & ${banana}banana`
    return juice;
}
mixer(4,1); // from these you only gonna get 4 1 as answer because these are result of  console.log(apple,banana              so to get value of juice use

const mix = mixer(4,1);
console.log(mix) // or use
console.log(mixer(4,1))
*/


/*
//                  Function Declaration VS Expression

function aa (currentyear,yb){
  const c = `your current age by birth year is ${currentyear - yb}`
  return c;
}
const cage = aa(2023,2000);
console.log(cage)

// function calculateAge(birthYear) {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const age = currentYear - birthYear;                     // created by GPT
//   return age;
// }
// const birthYear = 1990;
// const age = calculateAge(birthYear);
// console.log(`your age is ${age}`);

//  Function declaration
// function declaration can be callable even before function created as

//const age1 = calcuAge(2000) even if i place this line here not below function code will work here
function calcuAge (birYear){
  return 2023 - birYear;
}
const age1 = calcuAge(2000)

//  Function expression
const calcuAge1 = function (birthYear){    // here in this line i did not give function a name to call it again
  return 2025-birthYear;
} 
const age2 = calcuAge1(2000)

console.log(age1,age2)

console.log(`Your age by Function declaration is ${age1} & by Function expression is ${age2}`)

// my suggetion is to use FUNCTION EXPRESSION  in code    because it is in ordered manner
*/




//                     Arrow Functions
// arrow function is the 3rd type & newly introduced in ES6 version
// for comparision i'm gonna take expression function here 
const calcuAge1 = function (birthYear){
  return 2025-birthYear;
}                                       // 4 lines
const age1 = calcuAge1(2000)
console.log(2000)

// arrow function 
const calAge3 = birthYear => 2028-birthYear;
const age3 = calAge3(2000);                       // 3 lines
console.log(age3)
//now let us add some logic to find remainig years before retirement

const untlRetire =birthYear => {
  const age =2026-birthYear;
  const retirment = 65-age;
  return retirment;
}
console.log(untlRetire(2000))

// using 2 parameters simultaneously
const untlRetire1 =(birthYear,firstName) => {
  const age =2026-birthYear;
  const retirment = 65-age;
  return `${firstName} retires in ${retirment} years`;
}
console.log(untlRetire1(1995,'aif'))
console.log(untlRetire1(1990,'fairoz'))





/*
//                functions calling other functions
// for reference
function mixer(apple,banana) {
  console.log(apple,banana);     // to be frank we don't need this line    but wtring this line for your undestanding
  const juice = `Juice with ${apple} apple & ${banana} banana`
  return juice;
}
console.log(mixer(4,3))

// calling actual function insude a function
function fruitCutter(fruit){
  return fruit*3
}

function mixer1(apple,banana) {
  const applePiece = fruitCutter(apple);
  const bananaPiece = fruitCutter(banana);
 
  const juice = `Juice with ${applePiece} apple peices & ${bananaPiece} banana peices`
  return juice;
}
console.log(mixer1(4,3))
*/



/*
//                                 Array
// array i slike a big container of different type of data types 

const fr = [1,2,3,4,5,6,7]
const freinds = ['john','ron','nav']        // general way of creating array
const fs = new Array(2000,1,45,56,12,78,89,56);    // to create a array use (new array)
console.log(fs.length)
console.log(fs[fs.length-1])       // for viewing final or last character

// i can write much code but you already know it so refer video 39 from section 3 fundamwntas2

// some usefull functions of array

// to add elements to array

// @ first of array use .unshift()         &       @ end of array use .push()
freinds.push('tony');
freinds.unshift('hulk');
console.log(freinds)

// to remove element from array

// @ first of array use .shift()           &        @ end of array use  .pop()
fr.pop();
fr.shift(); 
console.log(fr)

// see to add use put something inside ( )              &           to remove we did not put anything inside ()


// we use .includes()          to check wether given element inside the array

console.log(freinds.includes('tony'))      // true
console.log(fr.includes(88))               // false
*/




/*
//                             Objects
// we use objects to group properties of an individual value 
const turbo = {
  name: 'sir',
  age:20,
  job:'vip'
}
console.log(turbo)               // ways to print out individual elements
console.log(turbo.name)          // dot notation
console.log(turbo['age'])        // bracket notation 

// with bracket notation we can do some extra things as 
const baskar ={
  firstName : 'uday',
  secondName : 'baskar',
  age :22,
  job : 'IT',
  friends : ['david','dinesh']
}
const nameKey = 'Name'            // now see the logic
console.log(baskar['first'+nameKey])
console.log(baskar['second'+nameKey])               // we will use this logic repeatively

// now let's do something even more with [] notation

const interest = prompt('what do know about him ? among firstName, lastName, age, job')
console.log(baskar[interest])      // now in prompt if you pass any of   (firstName, lastName, age, job)  then you get it's equivalent answer

// now what if some one put any value that is not in object          then do this
if (baskar[interest]){
  console.log(baskar[interest]) 
}else{
  console.log('wrong request man ask correct query')
}
// we can even use both dot &  bracket notation to add elements to the object as
baskar.place = 'kpudi';
baskar['height'] = '5.5';
baskar['twit'] = 'okkk'
console.log(baskar)                 // to check

console.log(`${baskar.secondName} has ${baskar.friends.length} friends, & his best friend is ${baskar.friends[1]}`)

*/
/*
//                              Object Methods
//if a function if written inside of a object then it is typically know as object method 


const hugg = {
  namef: 'hug',
  bYear :2000,
  friends:['john','mike'],
  job:'teacher',
  hasLicense:true,
  calcage: function(){
    //console.log(this)
    return 2023-this.bYear       // here i usd this keyword insted of  jonas.bYear   to stop dry
  }
}
//console.log(hugg.calcage())

console.log(`${hugg.namef} is a ${hugg.calcage()} years old ${hugg.job} , and he has a ${hugg.hasLicense===true?'drivers license':'no drivers license '}`)


*/



/*
//                               For Loop
// loops help us to automate repetitve tasks 
// FOR LOOP keeps runnig while given condition is true
for (let i=0;i<=5;i=i+1){       // here i=i+1    can be written as i++
  console.log(i)
}
for (let b=1;b<=6;b++){       
  console.log(b)
}
// using some complexity    increasing number inside a string of(lift weight count 1 )       here count will incresed from 1 to 10

for (let rep =1;rep<=10;rep++){
  console.log(`lift weight count ${rep} 🏋️`)
}

console.log('odd')

for (let rep =1;rep<=10;rep=rep+2){          // peinting odd counts
  console.log(`lift weight count ${rep} 🏋️`)
}
console.log('even')
for (let rep =0;rep<=10;rep=rep+2){          // peinting even counts
  console.log(`lift weight count ${rep} 🏋️`)}
*/



/*
//     some extra with for loop along objects & arrays
const dd = [];
const tyr= []; 
const sir = [
  'siorah','dd',2023-2000,['david','dinesh','baskar'], true
]                                                      // now let me loop through this attay
for (let i=0;i<sir.length;i++){
  console.log(sir[i], typeof sir [i])

  tyr[i]=typeof sir[i]  // filling types of array
  tyr.push(typeof sir[i])  // filling types of array in another way
}
console.log(tyr)
dd.push('het',1)
console.log(dd)

// now let us try something common to a array
var year =[2000,1995,1999,2001]
var age =[]
for (let i= 0;i<year.length;i++){
  age.push(2023-year[i])
}
console.log(age)








// using countinue & break
// countinue is used for skip something & do the job              but break stops the job at certain condition

const sid = [
  'siorah','dd',5,2023-2000,['david','dinesh','baskar'], true
] 
console.log(sid)
// countinue only on strings
console.log('------ ONLY STRINGS -------')
for (let i =0;i<sid.length;i++){
  if(typeof sid[i]!== 'string' ) continue;
  
  console.log(sid[i])
}
// break after number

console.log('------ break after number-------')
for (let a =0;a<sid.length;a++){
  if(typeof sid[a]=== 'number' ) break;
  
  console.log(sid[a])                        // stps after dd because next one is 5
}
*/



/*
//                                Looping backwards        &       loop inside loops
// let us loop in backwards 
const sid = [
  'siorah',
  'dd',
  5,
  2023-2000,
  ['david','dinesh','baskar']
] 
console.log(sid)           // general one (('siorah', 'dd', 5, 23,['david','dinesh','baskar']))    let us now loop it back

// for (let i=0;i<sid.length;i--){
//   console.log(sid[i])
// }                               // do not un comment it & run this code or else your pc shutdowns
console.log('------BACKWARdS -------')
for (let i=sid.length-1;i>=0;i--){
  console.log(i,           sid[i])
}



//  loop inside loop
for (let exercise =1;exercise<=3;exercise++){
  console.log(`starting the ${exercise} 🏋️🏋️`);

  for (let rep=1;rep<6;rep++){
    console.log(`Exercise ${exercise} : lifting the weight ${rep}`)
  }
}
*/





/*
//                                    While Loop

// for reference using for loop
console.log('from for loop')
for (let rep =1;rep<=7;rep++){
  //console.log(`lift weight count ${rep} 🏋️`)
}
console.log('from while loop')

let r=1;
while(r<=7){                // this (r<=7) condition part is important one
  //console.log(`count of weight lifting ${r} 🏋️`);
  r++
}

let dice = Math.trunc(Math.random()*6) +1                 // here i used some mathematics functions we will discuss about them later
console.log(dice)// now every time refresh the page i will get a num from1-6

while(dice!==6){
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random()*6) +1  ;
  if (dice===6)console.log('you got dice number 6 and so while loop stoped')  
}                                       // here while loop stops when dice = 6

*/