

// primitive: String , number, boolean, null, undefined, symbol, bigInt
const score=100;
const scoreValue=100.1
const isLoggedIn=true
const temp=null 
let email;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)
const bigInt=1234567812
// reference(non primitive)
// array object function

const ppl=["ishita","navya","navika"]
let obj={
    name:"navya",
    age:18,
}
const myfunction=function(){
    console.log("hello world");
}
console.log(typeof(temp))
// stack(primitive ) heap( non primitive)
// stack: each variable gets in own copy , heap: variable share the same object reference
let myName="navya"
let anotherName= myName
anotherName="agrawal"
console.log(myName)
console.log(anotherName)
let user1={
    email:"navya@goggle.com"
   

}
let user2= user1
user2.email="agrawal@goggle.com"
console.log(user1.email)
console.log(user2.email)
