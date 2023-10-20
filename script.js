const User = function (name) {
  this.name = name;
  this.discoreName = "@" + name;
};

function user(name) {
  const discoreName = "@" + name;
  return {
    name,
    discoreName,
  };
}
console.log(user("nico"));

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
console.log(zerothEle, firstEle);
const nico = {
  name: "nico",
  age: 34,
  born: 1989,
  place: "Montevideo",
  lives: "United States",
};

const { name: choad, age, born, lives } = nico;
console.log(choad);
let a = 1;
let b = 2;
console.log({ a, b });
[a, b] = [b, a];
console.log({ a, b });
