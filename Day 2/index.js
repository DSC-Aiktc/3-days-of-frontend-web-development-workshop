
// PRINTING STATEMENT

console.log("hello world")
console.log("hello everyone")
console.log(354554+6565*89)

/////////////////////////////
///  Variable declaration ///
/////////////////////////////

var a = 4   
console.log(a)
let b = 2
console.log(b)
b = 5
console.log(b)  
const c = 3
console.log(c)
var d = 1231
console.log(d)

////////////////////////
////   DATATYPES   /////
////////////////////////

// 1,2,3,4,5,6..infinity -> integer
// "hello zaki" -> string
// 1.2,1.3,1.5..infinity -> float data type

var integer = 1
var float = 1.2
let str = "hello zaki"
let str2 = 'heloo zalo'
let bool = false

let ls = [11,21,31,14,15,16]
console.log(ls.length)
console.log(ls[ls.length])
console.log(typeof(bool))

///////////////////////////
// ARITHEMETIC OPERATION //
///////////////////////////

a = 3
b = 5
console.log(a+b*b+a-b-a)
console.log((1+2)*0+1+2)

let num1 = 4
let num2 = 4

///////////////////////////
// CONDITIONAL STATEMENT //
///////////////////////////

if(num1 > num2){
    if(num1 == num2 ){

    }else if(num1 < num2){

    }else{

    }
    console.log("hello")
} else if(num1 == num2) {
    console.log("hello world")
} else {
    console.log("world")
}

a = 0
b = 1

switch (a+b) {
    case 0:
        console.log('0')
        break;
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    case 3:
        console.log("3")
        break;
    case 4:
        console.log("4")
        break;
   
    default:
        break;
}

//////////////////////////////
////////   FOR LOOP    ///////
//////////////////////////////



ls = [1,2,3,4,5,123,12,3123,1,231]

// for in 
for(let i =0; i <= ls.length ; i++){
    a = ls[i]
    console.log(ls[a])
}

console.log('for of')
for (const i of ls) {
    console.log(i)
}

console.log('for each')
ls.forEach(i => {console.log(i)})

//////////////////////////
///////   FUNCTIONS //////
//////////////////////////

// NORMAL FUNCTION

function addition(a,b){
    return a + b
}
add = addition(1,2)
console.log(add)
console.log(addition(1312,2))

// ARROW FUNCTION

var adddd = (a,b) => {
    return a + b;
}

console.log(adddd(1,2))
