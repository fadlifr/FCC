//Project Euler : Problem 1
//Multiples of 3 & 5
//Kamis, 5 maret 2020

//Find the sum of all the multiples of 3 or 5 below the provided parameter value (number)

//CARA 1: Menggunakan FOR
function multiplesOf3and5(number) {
    let sum = 0;
    //looping untuk akses (number)
    for (let i = 3; i < number; i++) {
        //pengkondisian untuk bilangan kelipatan 3 dan 5
        if (i % 3 == 0 || i % 5 == 0) {
            //jumlahkan setiap bilangan yang memenuhi kondisi
            sum += i;
            // console.log(sum);
        }
    }
    return sum;
}

//CARA 2: Menggunakan while
// function multiplesOf3and5(number) {
//     let sum = 0;
//     let i = 3;
//     //looping untuk akses (number)
//     while (i < number) {
//         //pengkondisian untuk bilangan kelipatan 3 dan 5
//         if (i % 3 == 0 || i % 5 == 0) {
//             //jumlahkan setiap bilangan yang memenuhi kondisi
//             sum += i;
//         }
//         i++
//     }
//     return sum;
// }

//TEST CASE

console.log(multiplesOf3and5(10)); // 23
console.log(multiplesOf3and5(49)); // 543
console.log(multiplesOf3and5(1000)); // 233168
console.log(multiplesOf3and5(8456)); // 16687353
console.log(multiplesOf3and5(19564)); // 89301183