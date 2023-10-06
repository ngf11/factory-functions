// Object.assign()
const jsSkill = {
  knowsJs() {
    return true;
  },
};

const engDegree = {
  hasDegree() {
    return true;
  },
};

const backendSkill = {
  knowsBackend() {
    return true;
  },
};

const jsEngeneer = Object.assign({}, jsSkill, engDegree);
const fullstack = Object.assign({}, jsEngeneer, backendSkill);
console.log(fullstack.knowsJs());
console.log(fullstack.hasDegree());
console.log(fullstack.knowsBackend());
