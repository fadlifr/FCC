////SOAL edabit.com
////Check if an Array Contains a Given Number

// function check(arr, el) {
//     //kalau array kosong
//     if (arr.length === 0 && arr != null) {
//         return false;
//     } else {
//         // looping elemen arr
//         for (var i = 0; i < arr.length; i++) {
//             //pengecekan elemen el apakah ada di dalam arr
//             if (arr[i] === el) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }

////Using built in function includes
// function check(arr, el) {
//     if (arr.includes(el)) {
//         return true;
//     }
//     return false;
// }

////Using built in function indexOf
function check(arr, el) {
    return arr.indexOf(el) > -1;
}


//TEST CASE
console.log(check([1, 2, 3, 4, 5], 3)) // true
console.log(check([1, 1, 2, 1, 1], 3)) // false
console.log(check([5, 5, 5, 6], 5)) // true
console.log(check([5, 5, 5, 6, 8], 8)) // true
console.log(check([], 5)) // false