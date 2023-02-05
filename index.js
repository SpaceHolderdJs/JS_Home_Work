//1

const arr = [1, 6, 8, 21, 56];


console.log(arr.reduce((total, el) => {
    return total + (el - 1) / arr.length
}));


//2

const str = "Hello world random words here";

const word = str.split(" ")
for (const str of word) {
    console.log(str.length)
}

//3

const arr2 = [20, 90, 7, 8, 100];

let max = arr2[0];
let min = arr2[0];

// function findMax(arr2) {
//     let max = arr2[0]
//     for (let num of arr) {
//         if (max < num) {
//             max = num;
//         }
//     }
//     return max;
// }
// console.log(findMax(arr2));

arr2.forEach((number) => {
    if (max < number) {
        max = number;
    }
    if (min > number) {
        min = number;
    }
})

console.log(min, "min");
console.log(max, "max");