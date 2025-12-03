let a= 100
if(true){ //block scope: inside{} with let and const , and only work inside that block.
    let a=10
    const b=20
    console.log("inner: ", a)
}
console.log(a)
// console.log(b)
let name="navya" //global scope: outside func , used anywhere
function greet(){
    console.log(name)

}
greet()
console.log(name)
var d=20
function calculateNumber(){
    console.log(d)
}
calculateNumber()
console.log(d)
function show(){ //local scope:declared inside function, and it can be used inside that function only.
    let age=25
    console.log(age)
}
// show()
// console.log(age)   //error

