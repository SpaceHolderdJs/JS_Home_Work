
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
