const thing = {
  dna: Math.random(),
};
const obj = Object.create(thing);
console.log(obj);
console.log(obj.dna);

const obj2 = Object.create({});
Object.defineProperty(obj2, "milo", {
  value: "is fat",
});
console.log(obj2);
console.log(obj2.milo);
