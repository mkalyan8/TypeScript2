// Arrow Function

var sum=(x:number, y:number):number=>
{
    return x+y;
}

console.log(sum(83,78));

// Parameterless Arroe Functin

var p = () =>
{
    console.log("Welcome : ");
    // Hi Naveen Test Engineer
}
p();

/*
    If the function body consists of only statement
    then no need for the curly brackets and the return keyword
*/

var Add=(i:number,j:number):number =>
{
    return i+j;
}

console.log(Add(32,97));

var Addition=(k:number,l:number) => k+l;
console.log(Addition(34,677));

// Function Overloading

function A(m:number,n:number):number;
function A(m:string,n:string):string;

function A(m:any,n:any):any
{
    return m+n;
}

console.log(A(34,76));
console.log(A("Kalyan ","Mysa"));

// Function overloading with different number of parameters and
// types with same naem is not supported

/*
Rest Parameters:
---------------
If number of parameters that a function will receive is not known or acn vary, we can use rest parameters 
We can use the rest parametrs denoted by ellipsis, denoted by ... (3 dots)




*/
