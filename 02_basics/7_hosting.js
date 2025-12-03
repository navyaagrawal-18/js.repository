// nested scope
function one(){
    const username="navya"
    function two(){
        const website="youtube"
        console.log(username)
    }
    two()
}
one()
if(true){
    const username="navya"
    if(username=="navya"){
        const website="youtube"
        console.log(username + website)
    }
    
}
function addOne(num){
    return num+1;

}
console.log(addOne(5))
const addTwo= function(num){
    return num+2;
}
console.log(addTwo(6))
//  scope:variable can accessed in your code.
// nested scope: create func inside another func. inner func can use variables of outer function but outer function cannot use variable of inner func 