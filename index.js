// 1 Написати функцію яка отримує від`ємне 
// число аргументом та повертає додатнє число
//  на базі від`ємного -1 → 1

function key(x) {
    x = +x; // преобразуем в число
    if (x === 0 || isNaN(x)) {
      return x;
    }
    return x > 0 ? 1 : -1;
  }
console.log(key({}));

function keys() {
    return (0-1);
}
console.log(keys({  }));


// 2. Написати функцію що отримує
//  об`єкт та повертає всі його ключі у вигляді масиву
//   {name: “Igor”, age: 23} → [”name”, “age”]

function keys (obj) {
return Object.keys(obj);
}
console.log(keys({name:"Alex", age:28}));


// Співбесіда!!!!
// Створіть свій метод map для масивів 