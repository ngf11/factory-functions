const obj = { a: 1, b: 2 };
const obj1 = { c: 3, d: 4 };
const obj2 = { e: 5, f: 6 };
const obj3 = { g: 7, h: 8 };
const obj4 = { a: 11, b: 22 };

const concatObj = Object.assign({}, obj, obj1, obj2, obj3, obj4);
console.log(concatObj);
