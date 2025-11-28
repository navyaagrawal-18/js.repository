const arr1=[1,2,3]
const arr2=[4,5,6]
const finalArr= arr1.concat(arr2)
console.log(finalArr)
const arr3= [4,5,6]
const arr4=[7,8,9]
const finalArr2= [...arr3,...arr4]
console.log(finalArr2)
const arr5=[3,6,8]
const arr6=[5,7,9]
arr5.push(...arr6)
console.log(arr5)
console.log(Array.isArray(1,2,3))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))
let score1= 100
let score2=200
let score3= 300
console.log(Array.of(score1,score2,score3))