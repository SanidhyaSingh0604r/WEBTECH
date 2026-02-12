// let arr=[1,2,3]
// let arr2=[...arr1]
// arr2[0]=100;
// console.log(arr);
// console.log(arr2);
// let emp={id: 1,name:"Rahul"};
// let details={...emp, role: "Developer"};
// console.log(details);

let arr1=[1,2,{name : 'john'}];
let arr2=[...arr1];
console.log(arr2);
arr2[1]=10;
console.log(arr1);
console.log(arr2);
arr2[2].name='jane';
console.log(arr1);
console.log(arr2);

function sum(...numbers){
    return numbers.reduce((a,b)=> a+b,0);
}
sum(10,20,30);