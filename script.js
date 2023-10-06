const proto = {
  hello: function () {
    return `Hi my name is ${this.name}`;
  },
  age: function () {
    return `I am ${this.years} years old`;
  },
};

const animal = {
  greet: function () {
    return `I am a ${this.species}`;
  },
};

const nico = Object.create(proto);
for (const key in animal) {
  if (animal.hasOwnProperty(key)) {
    nico[key] = animal[key];
  }
}
nico.name = "nico";
nico.years = 34;
nico.species = "Neanderthal";
console.log(nico.hello());
console.log(nico.age());
console.log(nico.greet());
const milo = Object.assign({}, proto, {
  name: "Milo",
  years: 10,

  say() {
    return "Woof";
  },
});
console.log(milo.age());
console.log(milo.hello());
console.log(milo.say());

const me = "Nico";

function herro() {
  console.log(`Herro it me ` + me);
}
herro();
console.log(nico);
