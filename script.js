const Person = (name) => {
  const sayName = () => {
    console.log(`my name is ${name}.`);
  };
  return { sayName };
};

const nico = Person("nico", 34);
nico.sayName();

// const Nerd = (name, stuff) => {
//   const { sayName } = Person(name);
//   const doSomething = () => {
//     console.log(`Nerd Stuff: ${stuff}`);
//   };
//   return { sayName, doSomething };
// };

// const milo = Nerd("Milo", "Drink from the toilet");
// milo.sayName();
// milo.doSomething();

const Nerd = (name) => {
  const prototype = Person(name);
  const doSomething = () => {
    console.log("Nerd stuff");
  };
  return Object.assign({}, prototype, { doSomething });
};
const milo = Nerd("Milo", "Drink from the toilet");
milo.sayName();
milo.doSomething();
