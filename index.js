const obj = {
    city: "Lviv has",
    visitors: 150000
};
// obj.hes = "has";
obj.el = "visitors novadays";

const { City, hes, visitors, el } = obj;

const output = "";
console.log(obj);





const data = {
    0: { name: "Oleg", age: 35 },
    1: { name: "Alex", age: 40 },
    2: { name: "Olena", age: 20 }
}


// let Oleg = { name: "Oleg", age: 35 };
// let Alex = { name: "Alex", age: 40 };
// let Olena = { name: "Olena", age: 20 };

// let dat = [Oleg,Alex,Olena];
// sortByAge(dat);
// alert(dat);

// for (let key in data) {
//     console.log(data[key])
//     if (data[key].age < 15) {
//         data.freeze(data[key]);
//     } else {
//         delete data[key];
//     }
// }

// data.sort(byField('age'));
// data.forEach(data => alert(data.name));


// _.sortBy(data, ['user', 'age']);


const data2 = {};

for (let key in data) { 
    if (data[key].age > 20 ) {
        // delete data[key];
        data2[key] = data[key];

    }
}



console.log(data2, "Final DATA2");