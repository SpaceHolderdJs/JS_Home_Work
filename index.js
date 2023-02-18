// 1. Написати функцію що приймає 2 масиви чисел та повертає
//  той масив, сума чисел якого більша

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res1 = arr1.reduce((acc, i) => acc + i)
// console.log(res1);
const res2 = arr2.reduce((acc, i) => acc + i)
// console.log(res2);

function  resul () {
    if (res1 > res2) {
        return (res1)
    } else if (res1<res2){
        return (res2)
    }
};
console.log(resul());





// 2. Написати свою функцію-конструктор людини (person) з
// аргументами name, age, city, skills (масив технологій з
//     якими ви вмієте працювати, наприклад [”html”, “css”, “js]).
//     Додати функцію до вашого об`єкту, що додає skill у масив ваших вмінь