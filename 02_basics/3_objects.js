const person={
  name:"Navya",
  age:20,
  isStudent:true
};
console.log(person.name)
console.log(person["age"])
const obj="full name"
console.log(obj["full name"])
const details={
  username:"navya agrawal",
  user:{
    email:"navya@goggle.com",
    country:"India"
  }

};
console.log(details.user.email)
const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={obj1,obj2}
console.log(obj3)
const obj0=Object.assign(obj1,obj2)
console.log(obj0)
const obj4={...obj1,...obj2}
console.log(obj4)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
