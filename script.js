//................................................ global variable....................................................................................................
// let a = 89;
// function sum(a) {
//     return a;
// }
// console.log(sum(a));

//............................................ local variable..........................................................................................................

// function add(b,c) {
//     let b =5;
// let c =2;
//     return b+c;
// }
// console.log(add(b,c));
// .........................................even number................................................................................................................
// function even(number) {
//     return number % 5 === 0;
// }
// console.log(even(6));

// ..........................................switch statement.........................................................................................................
// let dayOfweek = prompt("Enter a day")
// switch (dayOfweek) {
//     case "Monday":
//      console.log("Today is Monday")
//      break;
//      case "Tuesday":
//      console.log("Today is Tuesday")
//      break;
//     case "Wednesday":
//     console.log("Today is Wednesday")
//     break;
//     case "Thursday":
//      console.log("Today is Thursday")
//      break;
//     case "Friday":
//      console.log("Today is Friday")
//      break;
//      case "Saturday":
//      console.log("Today is Saturday")
//      break;
//      case "Sunday":
//     console.log("Today is Sunday")
//         break;
//     default:
//     document.write("Enter the correct day");
// }



// let dayOfAK = 3;
// switch (dayOfAK) {
// case 1: case 2:
//  alert("Whoopee")
//  break;
//  case 3: case 4:
// alert("TGIF!")
// break;
// default:
// alert("Shoot me now!")
// }



// q1 Write a function called get Month name that takes an integer parameter month Number (1 for Jan , 2 for Feb, etc) and returns the name of the month as a string. Use a switch-case statement to implement this function.
// let month = 3
// function getmonth (month) {
//     switch (month) {
//         case 1:
//         document.write("jan")
//         break;
//         case 2:
//         document.write("feb")
//         break;
//         case 3:
//          document.write("march")
//          break;
//          case 4:
//          document.write("april")
//          break;
//          case 5:
//         document.write("may")
//         break;
//         case 6:
//         document.write("june")
//         break;
//         case 7:
//          document.write("july")
//          break;
//          case 8:
//         document.write("aug")
//         break;
//         case 9:
//         document.write("sep")
//         break;
//         case 10:
//          document.write("oct")
//          break;
//          case 11:
//         document.write("nov")
//         break;
//         case 12:
//         document.write("dec")
//         break;
//         default:
//         document.write("its not working")    
//     }
// }
// console.log(getmonth(month));


// q Write a function called calculateDiscount that takes two parameters: productType (a string indicating the type of product) and price (a number representing the original price of the product). The function should calculate and return the discounted price based on the following rules using a switch-case statement:If productType is "Electronics", apply a 10% discount.If productType is "Clothing", apply a 20% discount.If productType is "Books", apply a 15% discount.For any other productType, return the original price without any discount.Round the discounted price to two decimal places before returning it.

// function calculateDiscount(productType, price) {
//     let discount;
//     switch (productType) {
//         case "electronic":
//         discount = price * 0.1;    
//         break;
//         case "clothing":
//         discount = price * 0.2;    
//         break;
//         case "book":
//         discount = price * 0.15;    
//         break;
//         default:
//             console.log("original price")
//             break;
//     }
//     let discountedPrice = (price - discount).toFixed(2);
//     return discountedPrice;
    
// }
// console.log(calculateDiscount("electronic", 80));
// console.log(calculateDiscount("clothing", 100));
// console.log(calculateDiscount("book", 20));


// ..........................................................for loop..............................................................................................
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }


// // Example 3: Looping backwards
// for (let i = 10; i > 0; i--) {
//     console.log(i);
//   }

  // Example 2: Looping over an array
// const fruits = ['apple', 'banana', 'cherry'];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Example 4: Skipping iterations with continue
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//       continue; // Skip iteration when i is 2
//     }
//     console.log(i);
//   }

//   // Example 5: Breaking out of a loop with break
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       break; // Exit the loop when i is 3
//     }
//     console.log(i);
//   }
  



//.......................................................... while loop...............................................................................................................
// let n = +prompt("Enter the value of n")
// let i = 0;
// while (i<n) {
//     document.write("<br>"+ i)
//     i++;
// }


// let n = +prompt("Enter the value of n")
// let i = 50;
// while (i>n) {
//     document.write("<br>"+ i)
//     i--;
// }


// write a program to display sum of numbers from 1 to 100
// let sum =0;
// let num = 1;
// while (num<=5) {
//     sum += num;  //sum =sum + num 0+1=1,3,6,10,15
//     num++;
// }
// document.write("Sum of 1 to 10:" + sum)

// write a program to display factorial of a number
// let number = 4;
// let factorial=1;
// while (number>0) {
//       factorial = factorial * number; //4 ,12,24
//     number--;
// }
// document.write("Factorial of a number is :" + factorial)


// write a program to display finding the first 10 even number
// let evenNumber =[];
// let i=1;
// while (evenNumber.length<10) {
//     if(i%2===0){
//     evenNumber.push(i)
// }
// i++;
// }
// document.write("The first even number is :" + evenNumber)

// write a program to display user input validation.
// let userInput;
// let password= "javascript123";
// while (userInput!==password) {
//     userInput = prompt("Enter your password");
// }
// document.write("Correct password");

// write a program to display generating countdown
// let countdown = 10;
// while(countdown>0){
//     document.write("<br>" + countdown)
//     countdown--
// }
// document.write("<br>" + "<h1>Happy New year</h1>")


// ................................................................Do-while loop....................................................................................................
// let n = +prompt("Enter the value of n")
// let i= 0;
// do {
//     document.write("<br>"+i)
//     i++;
// } while (i<=n);


// let count =0 ;
// do {
//     console.log(count);
//     count++;
// } while (count<=100);


// write a program to display sum of numbers from 1 to 100
// let sum =0;
// let num =1;
// do {
//     sum += num;  //sum =sum + num 0+1=1,3,6,10,15
//     num++;
// } while (num<=5);
// document.write("Sum of 1 to 10:" + sum)


// write a program to display factorial of a number
let number = 4;
let factorial=1;
do {
    factorial = factorial * number; //4 ,12,24
   number--;
} while (number>0);
document.write("Factorial of a number is :" + factorial+ "<br>")


// write a program to display finding the first 10 even number
let evenNumber =[];
let i=1;
do {
    if(i%2===0){
         evenNumber.push(i)
         }
         i++;
         }
while (evenNumber.length<10);
document.write("The first even number is :" + evenNumber)











