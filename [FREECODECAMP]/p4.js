////SOAL edabit.com
// function reverse(arr) {
//     let resultArr = [];
//     if (arr.length === 0) {
//         return [];
//     } else {
//         for (let i = arr.length - 1; i >= 0; i--) {
//             resultArr.push(arr[i]);
//         }
//     }
//     return resultArr;
// }
// console.log(reverse([1, 2, 3]));
// console.log(reverse([]));


////SOAL edabit.com tanpa built in function concat
// function concat(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i]);
//     }
//     return arr1;
// }
// console.log(concat([1, 2, 3], [4, 5, 6]));


////SOAL edabit.com
// function addUp(num) {
//     let total = 0;
//     for (let i = 1; i <= num; i++) {
//         total += i;

//     }
//     return total;
// }
// console.log(addUp(4));

//recursion
// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
// }
// console.log(addUp(4));console.log(addUp(4));

//recursion
// function addUp(num) {
//     //algoritma untuk penjumlahan berurutan: (num * (num + 1)) / 2;
//     return (num * (num + 1)) / 2;
// }
// console.log(addUp(5));