//1

const user1 = {
	name: true,
	age: 12,
    country: "Ukraine"
}

const user2 = {...user1}

for (let key in user1 ) {
    user1[key] = user2[key];
    delete user2['name']
    delete user2['age']
}
console.log(user1);
console.log(typeof '', user2);
console.log(user2.country);


//2

let e = {n: 1, m: 2};
let d = {a: 1, b: 2, c: 3};

let b = {
    
};

for (let i = 0 ; i <= String.length; i++){
    console.log();
};



console.log(e);
