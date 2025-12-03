(function chai(){
    console.log(`DB CONNECTED`);
})();   

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();  

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('navya');
// IIFE(instantly invoked function expression)
// instantly:run smoothly
// invoked:executed
// function expression:written in expression and not in normal form
// avoid global scope(create own private space) , run instantly(without needing function call), variables inside iife cannot accessed from outside.
