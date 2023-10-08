//closures

function outer() {
  const outerVar = "Hey I am an outer var";
  return function inner() {
    const innerVar = "Hey I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  };
}
