//closures

// function outer() {
//   const outerVar = "Hey I am an outer var";
//   function inner() {
//     const innerVar = "Hey I am an inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }

// const innerFn = outer();
// innerFn();
function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHelloformal = createGreeting("Hello How are you?");
const sayHelloRude = createGreeting("What Up?");

console.log(sayHelloRude("nico"));
console.log(sayHelloformal("nico"));
