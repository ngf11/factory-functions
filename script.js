const people = (function () {
  let name = "nico";
  function sayName() {
    console.log(name);
  }

  return {
    sayMyname: sayName,
  };
})();
console.log(people);
people.sayMyname();

function makeFunc() {
  const name = "nachoooos";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
