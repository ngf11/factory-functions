function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
Person.prototype.greet = function () {
  console.log(`Hi, I am ${this.name}`);
};
Person.prototype.form = function () {
  console.log(`I am from ${this.city}`);
};

const nico = new Person("nico", 34, "Montevideo");
console.log(nico);
console.log(Person.prototype);
console.log("-------");
console.log(Object.getPrototypeOf(nico) === Person.prototype);

function UFO(name, age, city, planet) {
  Person.call(this, name, age, city);
  this.planet = planet;
}

UFO.prototype.live = function () {
  console.log(`I live in ${this.planet}`);
};
Object.setPrototypeOf(UFO.prototype, Person.prototype);

const elon = new UFO("elon", 50, "A galaxy far far away", "Mars");
console.log(Object.getPrototypeOf(UFO.prototype));
nico.greet();
nico.form();
console.log("-----");
elon.greet();
elon.live();
elon.form();
