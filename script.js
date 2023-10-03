// Closures
function human(name) {
  function sayHi() {
    console.log(`Hello, my name is ${name}`);
  }
  function howYouFeel() {
    console.log(`${name} feeling Good!`);
  }
  return {
    sayHi,
    howYouFeel,
  };
}
human("nico");
const nico = human("nico");
const didi = human("Didi wu TinTin");
didi.sayHi();
didi.howYouFeel();

//  module
var Module = (function () {
  return {
    myMethod: function () {
      console.log("myMethod has been called.");
    },
  };
})();

// call module + methods
Module.myMethod();
