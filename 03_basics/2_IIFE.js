(function chai(){
    console.log(`DB CONNECTED`)
})();
((name)=>{
    console.log(`DB CONNECTED TWO  ${name}`)
})('navya');
// IIFE(instantly invoked function expression)
// instantly:run smoothly
// invoked:executed
// function expression:written in expression and not in normal form
// AVOID POLLUTING GLOBALSCOPE (create own private space) , run instantly(without needing function call), variables inside iife cannot accessed from outside.
//IIFE MEANS FUNCTION THAT RUNS AUTOMATICALLY AS SOON AS IT CREATED.
//() AT END FOR CALLING FUNCTION IMMEDAILTELY .
(function(name){
    console.log(`hello + ${name}`);
})('ishita');