console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     }
// }

// Exercise 2 Section
//  console.log("EXERCISE 2:\n==========\n");
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FIZZBUZZ");
//     } else if (i % 3 == 0) {
//       console.log("FIZZ");
//     } else if (i % 5 == 0) {
//       console.log("BUZZ");
//     }
//     else {
//         console.log(i);
//     }
//   }

//   // Exercise 3 Section
// console.log("EXERCISE 3:\n==========\n");
// console.log("Printing Odds with a while loop")
// //WHILE for Exercise 1
// let number = 1;
// while (number <= 100) {
//    if (number % 2 != 0 ) {
//      console.log(number);
//    }
//   number++;
// }

//DO-WHILE for Exercise 1
// let number = 1;
// do {
//      if (number % 2 != 0) {
//           console.log(number);
//      }
//      number++;
// }
// while(number <= 100);

// console.log("Fizz Buzz with do-while loop")
// // DO-WHILE for Exercise 2
// let num = 1;
// do{
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FIZZBUZZ");
//       } else if (num % 3 == 0) {
//         console.log("FIZZ");
//       } else if (num % 5 == 0) {
//         console.log("BUZZ");
//       }
//       else {
//           console.log(num);
//       }
//       num++;
// }
// while(num <= 100);

// WHILE for Exercise 2
// let num = 1;
// while(num <= 100) {
//   if (num % 3 == 0 && num % 5 == 0) {
//       console.log("FIZZBUZZ");
//     } else if (num % 3 == 0) {
//       console.log("FIZZ");
//     } else if (num % 5 == 0) {
//       console.log("BUZZ");
//     }
//     else {
//         console.log(num);
//     }
//     num++;
// }


// //   // Exercise 4 Section
//   console.log("EXERCISE 4:\n==========\n");
// let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
//  //let value = "5";
// let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
//  console.log("Random value: ")
//  console.log(value);
//  console.log("end point");
//  console.log(n);
//  console.log("Checking to see if we have the value....")

// let isFound = false;
// for(let i = 1; i <= n; i++) {
//     if(i == value) {
//         console.log("Found Value!");
//        isFound = true;
//        break;
//     }
//     else {
//        //console.log("Did not find value");
//         isFound = false;
//     }
//   }
//   if(isFound == false) {
//     console.log("Did not find value");
//   }






  //other solution
  // let i = 1;
  // for(; i <= n; i++)
  // {
  //   if (i == value) {
  //       console.log("Found value");
  //       break;
  //   }
  // }
  // if(i != value) {
  //   console.log("Did not find value");
  // }




// //   // Exercise 5 Section
//   console.log("EXERCISE 5:\n==========\n"); //max minus min
//   let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); //random number between 1 and 10
//   let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); //random number between 1 and 10
//   let end = Math.round(Math.random() * (1000 - 1) + 1); //random number between 1 and 1000
//   let start = Math.round(Math.random() * (10 - 1) + 1); //random number between 1 and 10

// console.log("Fizz Divisor: ");
// console.log(fizzDivisor);
// console.log("Buzz Divisor: ");
// console.log(buzzDivisor);
// console.log("Starting Number: ");
// console.log(start)
// console.log("Ending number: ")
// console.log(end);
// console.log("Solution:");

//   for(let i = start; i <= end; i++) {
//     if(i % fizzDivisor === 0 && i % buzzDivisor === 0) {
//             console.log(`${i} FIZZBUZZ`);
//           } else if (i % fizzDivisor == 0) {
//             console.log(`${i} FIZZ`);
//           } else if (i % buzzDivisor == 0) {
//             console.log(`${i} BUZZ`);
//           }
//           else {
//               console.log(`${i}`);
//           }
//     }















    // console.log("ben's way");
    // console.log("Fizz Divisor")
    // console.log(fizzDivisor);
    // console.log("Buzz Divisor")
    // console.log(buzzDivisor)
    // console.log();
    // for (let i = start; i <= end; i++) {
    //     let output = "";
    //     if (i % fizzDivisor == 0) {
    //         output += "FIZZ";
    //     }
    //     if( i % buzzDivisor == 0 ) {
    //         output += "BUZZ";
    //     }
    //     console.log(`${i} ${output}`);
    // }
  