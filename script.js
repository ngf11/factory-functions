// Factory Function vs. Constructor vs. Class -

//Factory Function

function createPerson(name) {
  return {
    name,
    talk() {
      return `Hello my name is ${this.name}`;
    },
  };
}
const me = createPerson("nico.");
const didi = createPerson("Didi Wu TinTin");
const siggy = createPerson("Siggy");
console.log(me.talk());
console.log(didi.talk());
console.log(siggy.talk());

//Constructor
function Person(name) {
  this.name = name;
}

Person.prototype.talk = function () {
  return `Hello, I am ${this.name}`;
};

const milo = new Person("Milo");
console.log(milo.talk());

const cami = new Person("Camila");
console.log(cami.talk());

// classes are just constuctores
