/* output of the following is
Called b!
undefined
*/
// function b and variable a can be referenced before
// they are define in the code. This is called Hoisting.
// This is possible in javascript because execution context
// sets up the memory for variables and function before 
// executing the code
b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}