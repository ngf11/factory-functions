//closures

const factoryFunction = (str) => {
  const capstr = () => str.toUpperCase();
  const printStr = () => console.log(`---${capstr()}---`);
  return { printStr };
};
const nico = factoryFunction("nico");
nico.printStr();

const counterCreater = () => {
  let count = 0;
  return function () {
    console.log(count);
    count++;
  };
};

const count = counterCreater();
count();
count();
count();
count();
