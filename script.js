//Factory Functions

function factoryFunction(str) {
  const obj = Object.create(factoryFunction.prototype);
  obj.str = str;
  return obj;
}
const nico = factoryFunction("nico");
console.log(nico);

// const Formatter = (function () {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
// })();
// const Formatter = (function () {
//   console.log("Start");
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
// })();
