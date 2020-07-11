// Volume of a Box - edabit.com
//A better way to loop through objects is first to convert the object into array then loop through the array

// function volumeOfBox(sizes) {
//     const volume = 0;
//     //get values from the object by converting to array
//     let values = Object.values(sizes);
//     //looping through arrays created from Objects.values
//     for (let i = 0; i < values.length; i++) {
//         //volume  of Box = widht*length*height
//         volume = i **
//     }
//     return volume;
// }

//cara lain
function volumeOfBox(sizes) {
    const widths = sizes.width;
    const lengths = sizes.length;
    const heights = sizes.height;
    let volume = widths * lengths * heights;
    return volume;

}


//Test Case
console.log(volumeOfBox({
    width: 2,
    length: 5,
    height: 1

})) // 10
console.log(volumeOfBox({
    width: 4,
    length: 2,
    height: 2
})) // 16
console.log(volumeOfBox({
    width: 2,
    length: 3,
    height: 5
})) // 30