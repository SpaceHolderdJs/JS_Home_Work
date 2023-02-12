//3.Відсортувати масив виду за зростанням та окремо за спаданням

// const arr3 = [1,10, 3, 5, 9];

// arr3.sort((a, b) => a - b);
// console.log( arr3 );

// arr3.sort((a, b) => b - a);
// console.log( arr3 );

//1 створити масив на базі існуючого виду 

// const arr1 = [[1,2,3], [4,5,6]];

// const res = arr1.map((arr1Element) => {
//     return arr1Element.map((Element) => String(Element) )
// })
// console.log(res); 

// [["1", "2", "3"], ["4", "5", "6"]];

//2 поверунути новий масив на базі існуючого виду

const arr2 = [{name: "Igor", age: 20}, {name: "Oleg", age: 40}];

const arr21 = arr2.flat(2);

console.log(arr21);



// [["name", "Igor"], ["age", 20], ["name", "Oleg], ["age", 40]]


