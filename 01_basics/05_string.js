const name="navya"
const age=18
console.log(`hello my name is ${name} and my age is ${age}`)
const gameName= new String('xyzabc- qw')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))
const newString= gameName.substring(0,4)
console.log(newString)
const anotherString=gameName.slice(-6,4)
console.log(anotherString)
const newStirngOne= "   ram  "
console.log(newStirngOne)
console.log(newStirngOne.trim())
const url="https://navya.com/%20agrawal"
console.log(url.replace('%20','-'))
console.log(url.includes('navya'))
console.log(gameName.split('-'))
