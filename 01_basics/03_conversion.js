let score= "33"
console.log(typeof(score))
let value= Number(score)
console.log(typeof (value))
let score1="33abc" 
let valueInNumber= Number(score1)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
let score2=null 
let valueIn= Number(score2)
console.log(typeof(valueIn))
console.log(valueIn)
let score3=undefined 
let valueNumber= Number(score3)
console.log(typeof(valueNumber))
console.log(valueNumber)
// "33"=33 "33abc"=NaN true=1 false=0 score="hitesh"(so it cannot change into no. so it gives NaN in output)
let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// " "=false "hitesh"=true 0=false 1=true
let Number1= 33
let StringNumber= String(Number1)
console.log(StringNumber)
console.log(typeof(StringNumber))