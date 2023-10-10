//objewct literal
const myModual = {
  name: "nico",
  age: 34,
  sayName() {
    console.log(` my name is ${this.name}`);
  },
  setName(newName) {
    this.name = newName;
  },
};
