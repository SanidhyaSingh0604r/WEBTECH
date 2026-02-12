let person={
    name:"John",
    age:30,
    isEmployed: true,
    greet: function(){
        console.log("Hello,my name is"+this.name);
        console.log(this);
        let innerGreet = function(){
            console.log(this);
            
        }
    }

}