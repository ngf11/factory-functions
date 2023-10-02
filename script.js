const personFactory = (name, age) => {
  const sayHello = () => console.log(`Hello I am ${name}`);
  return { name, age, sayHello };
};

const nico = personFactory("nico.", 34);
console.log(nico);
nico.sayHello();

const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = () => {
    console.log(`Hello, I am ${this.name}`);
    // console.log(this);
  };
};

const didi = new Person("didi Wu TiTin", 3);
console.log(didi);
didi.sayHello();

let name1 = "nico";
let num = 34;
let color = "black";
let food = "Burger";
console.log(name1, num, color, food);
console.log({ name1, num, color, food });
