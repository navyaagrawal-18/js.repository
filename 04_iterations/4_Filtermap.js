// filter: take an array and keeeps only item that pass condn.
const nums=[1,2,3,4,5,6];
const result=nums.filter(num=> num%2==0);
console.log(result);
// map: take an array and change every item then gives new array.
const number=[1,2,3,4,5,6];
const changeresult=number.map(num=>num*2);
console.log(changeresult);
// reduce: take and array and reduce into single value(sum,total)
const arr=[1,2,3,4,5];
const sum= arr.reduce((total, num)=> total+num,0);
console.log(sum);