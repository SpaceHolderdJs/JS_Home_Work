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
arr.showInfo();


