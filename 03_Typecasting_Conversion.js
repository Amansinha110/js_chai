let score = "44"

console.log(typeof score) //string
console.log(typeof(score))

let scoreinNumber = Number(score) //typecasting string to number
console.log(typeof scoreinNumber) //number
console.log(scoreinNumber)

// "44" => 44
// "44abc" => NaN (Not a Number)
// "abc44" => NaN (Not a Number)
// true => 1
// false => 0

let isloggedIn = 1
let isloggedInbollean = Boolean(isloggedIn) //typecasting string to boolean
console.log(typeof isloggedInbollean) //boolean
console.log(isloggedInbollean) //true

//1 => true
//0 => false
//"" => false
//" " => true
//"abc" => true