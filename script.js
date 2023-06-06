// In this line of codes i have covered basics of javascript       uncomment each one separately to explore every basic function individually



//                 variables

/*
let ss = true
console.log(ss)
console.log(typeof ss)

console.log( typeof true)
console.log( typeof 'tuebd')

ss = 'munaa'
console.log(ss)
console.log(typeof ss)

let f;
console.log(f)
console.log(typeof f)        // let us change its data type

f=2000;
console.log(f)
console.log(typeof f)


let age = 20;
age = 22;           // variables introduced by let can be changed in future


//const byear = 2000;
//byear = 2001;         // variables introduced by const cannot be changed in future

const af=45;             
console.log(af)             // empty  variables cannot be assigned by const  
*/





/*
//                                    operators
//    1) Arithematic operators

const aAge = 2025 - 2000;
const bAge = 2025 - 2003;
console.log(aAge,bAge) ;
// we can write this code in better manner as 

const now = 2024;
const cAge = now - 2000;
const dAge = now - 2003;
console.log(cAge,dAge) ;

// using some more mathematicals
console.log(bAge*2,bAge/3,3**2)

// we can concate 2 strings
const x= 'abb ';
const xx='cc';
console.log(x+xx)
console.log(25/3)


//   2) Assignment operators

let ax= 3; // here ax is 15
ax += 7;   // here ax = ax+7  which is eqal to 3+7 = 10            as this you can do more
ax *= 2;   // here ax = ax*2  which is eqal to 10*2 = 20 

// we have a ++ operator which will add 1 to our number as
ax ++;    // here ax = ax+1        so      ax =21        
ax --; // this will do ax = ax-1
ax--;  // we done this twice so answer is ax-1-1 = 19
console . log(ax)


//   3) Comparision Operator

console.log(aAge > bAge)  // aAge = 25     bAge = 22
console.log(bAge >=15)        // 22 > 15 so we get true
console.log(bAge >=25)        // 22  is not less than 25 so we get false
console.log(bAge !=25)      // !=  ---> not equal to  


//            Operator Precedure    (order)
// hey we have a mdn table which show which operator should do the task fast & i attached its link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// don't worry about it but keep in mind when doing project know about this process to not getting any bugs

let n,m;
n=m=25-10-5;    // here the operator working from right side to left     refer the table
                // so here we have m as 10 & n as m equivalent to 10
console.log(n,m)
*/


/*
//                         Stringd & Template Literals

const fristName = 'Siraj';
const job = 'student';
const birthYear = 2000;
const year = 2023

const siraj = "hey I'm "+fristName+ ' & '+(year - birthYear)+' years old '+job+' !'

console.log(siraj)  // this will give you   hey I'm  Siraj & 23 years old student !   this is simplified by introducing template literals  as

const sirajNew = `hey I'm ${fristName} & ${year-birthYear} years old ${job} !`
console.log(sirajNew)

// ok now regularly we write multiple line of string as 
console.log('first line \n\
multiple \n\
lines');             // regular way

console.log(`string
with 
back slash`);       // using `` way    (`` can be found upon the tab button)
*/


/*
//                    Taking Desicion      if / else
// first xeample
const age =20;

if (age >=18){
    console.log('you can get a license')
}

const nage=15;
if (age>=22){
    console.log('you can get a license')
} else{
    const yearsleft = 22-15
    console.log(`wait for few more years man,
    ${yearsleft} years`)
}
// second example
const birthyear = 1998;
let centuary;

if (birthyear<=2000){
    centuary = 20
}else{
     centuary = 21
}
console.log(centuary)
*/


/*
//                        Type conversion & Coercion
// type conversion means we manually change the type of value
// coercion mean JS automatically changes the type for us

const p = '2000';
console.log(p+23)
console.log(Number(p)+23)

console.log(Number('hey'))       // will give nan value : not a number
console.log(String(10),10)       // first we get 10 as string & then as number

// type coercion
console.log('hey im '+23+' years old') // see here 23 is number but JS automatically converted it into string
console.log('23'-'12'-2)       // here JS converted str into numbers
console.log('23'+'12'+2)       // here JS converted numbers into str
// so here if you use + then it converts all into str
// if you use - then it converts all into numbers
console.log('23'*'2')        // converted str into integers
console.log('23'/'2')        // converted str into integers
// exercise
console.log('10'+'2'-'6') // first + so(10+2= as 102) then - so (102-6 = 96)
*/

/*
//                      truthy & falsy 
// falsy values are not exactly false,but when we try to convert them into boolean they turn into false
// we have 5 falsy values and they are  ===   0,'',undefifned,null,NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(NaN))

// for example 
const money = 0;
if(money){
    console.log('dont spend the money')
}else{
    console.log('you should get a job')
}                     // see automatically else value is printing  because 0 is converted as false 

let hight ;
if (hight){
    console.log( 'ok hight is defined')
}else{
    console.log('hight is not defined')
}                // see value of hight @ first not defined so we get falsy value as else
*/


/*
//                 Equality Operators    == vs ===

const age = 18;
// in if statement we have only line then we should not {}
if (age===18)console.log('you are a adult now')

// I have say this == is loose equality one & === is strict equality  one 

if (18=='18')console.log('good work')  // works finely because we used  ==  loose one
if (18==='18'){
    console.log('good work')
  }else{
    console.log('18 not a number here')
  }  // doesn't works because we used  === strict one

// == is a kind of Coercion JS will take care of it                   but
//  === is strict equality one so JS will not take care of it
//   '18' == 18 --> TRUE         but        '18'  === 18 -->  FALSE

// lets create a prompt (input value) & use if else
const fav = Number(prompt('your favourite number')); 
console.log(fav)
console.log(typeof fav)

// if (fav ==23){
//     console.log('23 is good number')
// }
if (fav ===23){
    console.log('23 is good number')
}else if(fav===7){
    console.log('7 is also a good number')
}else if (fav == 9){
    console.log('9 is ok')
}else{
    console.log('the number you entered is not 23,7,9')
}
// != loose not equal              !== strict not eual          always use strict not equal one
if (fav!== 23)console.log('why not 23 man')
*/

/*
//                          Boolean Logic
// refer your notes

//                         Logical Operators
// with help of boolean logic let me demonstrate logical opwrators

const hasDriverLicense = true; // consider as A
const hasGoodVision = false;   // consider as B

console.log(hasDriverLicense && hasGoodVision) // && is and symbol    here b false   so entire code is false
console.log(hasDriverLicense || hasGoodVision) // || is or symbol    here b false   but entire statement is true because we are using or 
console.log(!hasDriverLicense)  // ! is not symbol   this statement is false because actual one is true
console.log(!hasGoodVision)    // this statement is true because actual one is false

if (hasDriverLicense && hasGoodVision){
    console.log('let sarah drive')
}else{
    console.log('someone else should drive')    //here else statement works because  in && one statement is false 
}
// let's add another boolean

const isTired = true; // consider as C

console.log(hasDriverLicense && hasGoodVision && isTired)  // false because has good is false

if (hasDriverLicense && hasGoodVision && isTired){
    console.log('let sarah drive')
}else{
    console.log('someone else should drive')    //here else statement works because  in && one statement is false 
} 
//
if (hasDriverLicense && !hasGoodVision && isTired){
    console.log('let sarah drive')
}else{
    console.log('someone else should drive')    //here in hasgoovision i added ! not symbol so false statement converted into true
} 
*/


/*
//                     switch statement
// switch statement works by switching the given variable as

const day ='fday';

                               // order should be first giv variable day then switch with it      only gonna work this way
switch(day){
    case'monday':          // day === 'monday'
        console.log('plan for watching movie')                    
        console.log('plan for watching anime')      
        break;
    case 'tuesday':
        console.log('time to study')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('meetup with friends')
        break;
    case 'friday':
        console.log('go to maszid')
        break;
    case 'saturday':
    case 'sunday':
        console.log("don't enjoy")
        break;
    default:
        console.log('not a valid day')
}


const cc = prompt('enter the day')
if (cc === 'monday'){
    console.log('plan for watching movie')                    
    console.log('plan for watching anime')

}else if (cc === "tuesday"){
    console.log('time to study')

}
*/


//                             Statements & Expressions
// refer your notes


/*
//                           Conditional (Ternary)   Operator
// like if else but in different manner 
const age = 23;
age>= 18 ? console.log('you can drink now 🍺') : console.log('you need to drink water 💧 ')
// remember here only one line is allowed 
// here (age >= 18) is our condition & ? is our if statement 
// console.log('you can drink now 🍺')    is our if result
// console.log('you need to drink water 💧 ')   is our else result
// you have to write else statement after : 

// better way to write

const drink = age>=20 ? 'wine 🍺' : 'water 💧' ;
console.log(drink)


console.log(`I like to drink ${age>=20 ? 'wine 🍺' : 'water 💧'}`)
*/




/*
// exercise challenge 4  answer
const bill = 275;
const tip = (bill <= 300 && bill>= 50 ? bill*0.15 : bill*0.2);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
*/





//                           JS releases   : ES5, ES6+   and ESNEXT
/////  refer video from section 1 & video of 30           JavaScript Releases: ES5, ES6+ and ESNext