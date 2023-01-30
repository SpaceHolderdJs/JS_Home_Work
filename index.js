//1

const arr = ["1", "2", "4", "7"];
const res = [];

// for (let el of arr) {
//     console.log(arr);
// }

// for (let key in arr) {
//     console.log(arr[key]);
// }

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} 
//    не те що потрібно але наближене ))

// console.log(arr[0],arr[1],arr[2],arr[3]);

// Очікуваний результат
// [1, 2, 4, 7]; 

//2

const arr1 = ["Poland", "Ukraine", "USA"];
// змінити існуючий масив на масив виду [”P”, “U”, “U”] 
// (залишити по першій літері з кожного слова)

// arr1.forEach((el) => {
//     if (el.includes("P")) {
//         console.log(el);
//     }else {(el.includes("U")) 
//         console.log(el);
//     }
// });

arr1[0]= "P";
arr1[1]= "U";
arr1[2]="U";
console.log(arr1);    


//3
const arr2 = ["Lviv", "Kyiv", "Poltava"];
// знайти індекс елемента “Kyiv”

console.log(arr2.indexOf("Kyiv"), "index");