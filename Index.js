// початкові данні

let users = [
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
];

// console.log(users);


const groupElementsOfArray = (arr, oneSetQuantity = 3) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.puch(arr.slice(i * oneSetQuantity, (i + 1) * oneSetQuantity));
    }
    return result.filter((arr) => arr.length > 0);
};

console.log(groupElementsOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));




