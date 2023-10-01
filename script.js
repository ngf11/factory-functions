// Factory Function vs. Constructor vs. Class -

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
