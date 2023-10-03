const factoryFunctions = (string) => {
  const capString = () => string.toUpperCase();
  const printString = () => console.log(`---${capString()}---`);
  return { printString };
};

const milo = factoryFunctions("Milo");
milo.printString();

const miloFactori = (string) => {
  const capMilo = () => string.toUpperCase().concat(" FAT");
  const printMilo = () => {
    console.log(`<<<<< ${capMilo()} >>>>>`);
  };
  return { printMilo };
};

const nico = miloFactori("nico");

nico.printMilo();

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};
const counter = counterCreator();

counter();
counter();
counter();
counter();
counter();

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {
    console.log("GAME OVER");
  };
  const damage = (x) => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName };
};

const jimmie = Player("jim", 10);
const badGuy = Player("jeff", 1);
jimmie.attack(badGuy);
jimmie.attack(badGuy);
