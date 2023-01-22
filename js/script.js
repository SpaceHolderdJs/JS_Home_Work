//1

const user1 = {
    name: true,
    age: 12,
    country: "Ukraine"
}

const user2 = { ...user1 }

for (let key in user1) {
    user1[key] = user2[key];
    delete user2['name']
    delete user2['age']
}
console.log(user1);
console.log(typeof '', user2);
console.log(user2.country);


//2

const Obj1 = {
    n: 1,
    m: 2,
};

const Obj2 = {
    a: 1,
    b: 2,
    c: 3
};

if (Object.keys(Obj1).length < Object.keys(Obj2).length) {
    console.log(Obj1)
} else if (Object.keys(Obj1).length > Object.keys(Obj2).length) {
    console.log(Obj2)
}


//крутив фантазію як міг )))




// console.log(Object.keys(Obj1).length);
// console.log(Object.keys(Obj2).length);
