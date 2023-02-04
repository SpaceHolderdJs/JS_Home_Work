//1

const arr = [1, 2, 4, "I am not a number", "Hello", 100, 45];

let result = arr.filter(function (elem) {
    if (elem >= 0) {
        return true;
    } else {
        return false;
    }

});

let result2 = result.reduce(function (sum, elem) {
    return sum + elem;
})


console.log(result2);


//2

const arr2 = [{ city: "Lviv" }, { city: "Kyiv" }, { city: "dnipro" }];




//3

const arr3 = [];

console.log(Math.random(arr3));