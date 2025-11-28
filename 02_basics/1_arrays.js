const myFruits=["apple","banana","grapes"] // string
const myArr=[0,1,2,3] //int array
const myArr2=new Array(1,2,3,4) // another way to create array
console.log(myFruits[1])
//  methods
myFruits.push("kiwi")
myFruits.push("mango")
myFruits.pop()
myFruits.unshift("papaya")
myFruits.shift()
console.log(myFruits)
console.log(myFruits.includes("kiwi"))
console.log(myFruits.indexOf("mango"))
console.log(myFruits.sort())
console.log(myFruits.reverse())
console.log(myFruits.length)
for(let fruit of myFruits){
    console.log(fruit);
}
const newArr= myFruits.join()
console.log(myFruits)
console.log(typeof newArr)
// slice and splice
// slice:dont chnage original array make copy of array
// splice: change the original array (remove the element that will be splice from original array)
console.log("A",myFruits)
const myn1= myFruits.slice(1,3)
console.log(myn1)
console.log("B",myFruits)
const myn2=myFruits.splice(1,3)
console.log("C",myFruits)
console.log(myn2)
