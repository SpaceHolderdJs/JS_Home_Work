//1

const a = 10;
const b = 15;

if (a > b) {
    console.log("FALSE");
} else if (a < b) {
    console.log("TRUE")
}

//2

// const year = prompt("Введіть ваш рік народження");

// alert(`Вам ${2023 - year} років!`);

//3

const name1 = "Igor";
const name2 = "Oleg";
const name3 = "Olena";
const name4 = "Nastya";


const nam1 = prompt("Введіть им`я");

switch (nam1) {
    case ("Igor"):
        alert("MAN");

        break;

    case ("Oleg"):
        alert("MAN");

        break;

    case ("Olena"):
        alert("Woman");

        break;

    case ("Nastya"):
        alert("Woman");
        
        break;
        default:alert("Do not anderstend you")

}



