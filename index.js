//1


const fn = function (f1, f2) {
	return {
			result1: f1(),
			result2: f2(),
   }
}

const res = fn(() => "res1", () => "res2")

console.log(res, "Result");

//2

function SD (a,b) {
    return a.toString().length + b.toString().length
}
const result22 = SD(10,1235456)
console.log(result22)
