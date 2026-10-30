let score = "44"

//console.log(typeof score) //string
//console.log(typeof(score))

let scoreinNumber = Number(score) //typecasting string to number
//console.log(typeof scoreinNumber) //number
//console.log(scoreinNumber)

// "44" => 44
// "44abc" => NaN (Not a Number)
// "abc44" => NaN (Not a Number)
// true => 1
// false => 0

let isloggedIn = 1
let isloggedInbollean = Boolean(isloggedIn) //typecasting string to boolean
//console.log(typeof isloggedInbollean) //boolean
//console.log(isloggedInbollean) //true

//1 => true
//0 => false
//"" => false
//" " => true
//"abc" => true

let num = 3
let somenum = String(num) //typecasting number to string
//console.log(typeof somenum) //string    
//console.log(somenum) //3

// ************** operations with typecasting **************
let valueNUM = 3
let negvalue = -valueNUM //typecasting number to negative number
//console.log(negvalue) //-3

//console.log(3 + 3)
//console.log(3-3)
//console.log(3*3)
//console.log(3**3)
//console.log(3/3)
//console.log(3%3) //modulus operator

// string addition
//let str1 = "Hello"
//let str2 = "World"
//let str3 = str1 + str2
//console.log(str3)

//console.log("1" + 2)// "12" => string
//console.log(1 + "2")// "12" => string
//console.log("1" + 2 + 3)// "123" => string
//console.log(1 + 2 + "3")// "33" => string
//use parseInt() or Number() to convert string to number before addition

//console.log("1" - 2)// -1 => number
//console.log(1 - "2")// -1 => number
//console.log("1" - 2 - 3)// -4 => number
//console.log(1 - 2 - "3")// -4 => number
//use parseInt() or Number() to convert string to number before addition

//console.log(parseInt("1") - 2)// -1 => number
//console.log(Number("1") - 2)// -1 => number

//tricky questions
// console.log(+true) // 1 => number
// console.log(+"") // 0 => number
// console.log(+" ") // 0 => number
// console.log(+null) // 0 => number
// console.log(+undefined) // NaN => number

let gamecounter = "100"
let newgamecounter = +gamecounter + 1 //typecasting string to number and adding 1
//console.log(newgamecounter) //101