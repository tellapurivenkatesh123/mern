// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
}

const subtract=(a,b)=>{
    return a-b;
}
const square=x=>x*x;
greet=()=>console.log("hello");
let _ = multiply(6, 9);
console.log(_);
_ = square(6);
console.log(_);
greet();
