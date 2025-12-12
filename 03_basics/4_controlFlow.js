if(2==="2"){
    console.log("executed")
}
const age=18;
if(age<18){
    console.log("Not allowed to vote")
}else{
    console.log("allowed to vote")
}
console.log("execute")
const balance=800;
if(balance<500){
    console.log("less than 500");
}else if(balance<700){
    console.log("less than 700");
}else{
    console.log("less than 1000");
}
const userLoggedIn=true;
const debitcard=true;
const isStudiedUser=true;
const isfreeUser=false;
if(userLoggedIn && debitcard && 2==2){ //AND BOTH HAVE TO TRUE 
    console.log("allow to buy course");
}
if(isStudiedUser || isfreeUser){ //OR TRUE-FALSE=TRUE
    console.log("executed or log in successfully");
}
const month=3;
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("executed");
        break;            
}
// ternary operator
let age1=18;
let result= (age1>18)? "Adult":"kids";
console.log(result);
let num=6;
let ans=(num%2==0) ?"even":"odd";
console.log(ans);