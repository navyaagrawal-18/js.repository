function greet(){
    console.log("hello")
}
greet()
function greet(name){
    console.log("hello"+name)
}
greet("navya")
function add(nums1,nums2){
    return nums1+nums2
}
const sum=add(5,4)
console.log(sum)
function userMessage(username){
    if(username==undefined){
        console.log("please enter valid username")
        return

    }
    return `${username}just logged in`
}
console.log(userMessage("navya"))
console.log(userMessage(""))
console.log(userMessage())
