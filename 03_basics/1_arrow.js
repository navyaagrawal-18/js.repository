const user={
    username:"navya",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)

    }
}
user.welcomeMessage()
user.username="ishita"
user.welcomeMessage()
//  this means object that is currently using or calling function
const user1={
    name:"navya",
    getName:function(){
        console.log(this.name)
    }
}
user1.getName()
const user2={
    name:"navya",
    getName:()=>{
        console.log(this.name)
    }
}
user2.getName()
