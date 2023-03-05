// const arr = new SuperArray([1,2,3])
// arr.at(0)                    // повертає {element: 1, array: [1, 2, 3]}


class SuperArray extends Array {
    constructor(el) {
        super(el);
    }
    showInfo() {
        console.log(this);
    }
    copyInfo() {
        return { ...this[0] }
    }
}

SuperArray.prototype.copy = function () {
    return null;
}

const arr = new Array([1, 2, 3]);
console.log(arr);


// Написати метод, що приймає назву приватної
// змінної классу та робить її не приватну копію 

class SuperArray1 extends Array {
    constructor (arr) {
        super(arr);
    }
    at() {
        return{
            al:this[0][this[0].length - 1],
            array:this[0] 
        }
    }
}
const array = new SuperArray1([1,2,3,4]);
console.log(array.at(0));