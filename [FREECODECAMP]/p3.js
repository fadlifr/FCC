///////////////////////////////////////////////
/////// Latihan function recursive ///////////
/////////////////////////////////////////////

//Latihan 1: menghitung factorial
// function factorial(num) {
//     //base case (termination)
//     if (num === 0) {
//         return 1;
//     } else {
//         //recursive = mengembalikan function itu sendiri dengan dikurangi 1
//         return num * factorial(num - 1);
//         // return 3 * factorial (3-1) = 3 * 2 = 6
//         // return 2 * factorial (2-1) = 2 * 1 = 2
//         // return 1 * factorial (0) = 1 * 1 = 1
//         // 0 return kasus 1 = 1
//         //rekursif bisa dianalogikan seperti nested loop
//         //inner loop akan ditulis lebih dulu dari outer loop
//         //factorial(0) return 1
//         //factorial(1) return 1*1
//         //factorial(2) return 2*1*1
//         //factorial(3) return 3*2*1*1

//     }
// }

// //TEST CASE
// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(10));




//Latihan 2: the greates common divisor (gcd) of two positive numbers
// function gcd(a, b) {
//     //  //jika a tidak ada, bisa juga jika b tidak ada maka yang di return nilai a atau string 'masukan nilai a'
//     if (!b) {
//         return a
//     } else {
//         return gcd(b, a % b)
//     }
// }

// //TEST CASE
// console.log(gcd(2154, 458));
// console.log(gcd(10, 5));
// console.log(gcd(30, 10));


//Latihan 3: get the integers in range (x, y)
// function range(x, y) {
//     if (x < 0 || y - x === 1) {
//         return [];
//     } else if (y - x === 2) {
//         return [x + 1];
//     } else {
//         let hasil = range(x, y - 1)
//         hasil.push(y - 1);
//         return hasil
//     }
// }

// //TEST CASE
// console.log(range(-1, 9));
// console.log(range(2, 4));
// console.log(range(1, 2));
// console.log(range(2, 9));



//latihan 4: sum of an array of numbers
// function arraySum(myArray) {
//     //base case (termination)
//     if (myArray.length === 1) {
//         return myArray[0];
//     } else {
//         //recursive
//         return myArray.pop() + arraySum(myArray);
//     }
// };

// //TEST CASE
// console.log(arraySum([1, 2, 3, 4, 5, 6]));
// console.log(arraySum([7, 8, 9, 10, 11, 12]));


//Latihan 5: