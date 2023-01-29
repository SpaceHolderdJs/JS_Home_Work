//1

const arr = ["1", "2", "4", "7"];
const res = [];

for (let el of arr) {
    console.log(arr);
}

console.log(arr[0],arr[1],arr[2],arr[3]);

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




//3
const arr2 = ["Lviv", "Kyiv", "Poltava"];
// знайти індекс елемента “Kyiv”

console.log(arr2.indexOf("Kyiv"), "index");