{
    let x=50;
    console.log(x);//output 50
    {
        let x=100;//uncaught syntaxerror
        let y=200;//this is allowed as its a diff identifier
        console.log(y);//output 200
        console.log(x);//output 100
    }
}

{
    let x=50;
    console.log(x);//output 50
    if(true)
    {
        let x=100;//this is allowed as its a diff identifier
        console.log(x);// output 100
    }
    console.log(x);//output 50
}

