// Object.assign() functions mixins
const humanFactory = function (obj) {
  let isCrying = false;

  return Object.assign({}, obj, {
    cry() {
      isCrying = true;
      return this;
    },
    isCrying() {
      return isCrying;
    },
  });
};

const flyFactory = function (obj) {
  let isflying = false;

  return Object.assign({}, obj, {
    fly() {
      isflying = true;
      return this;
    },
    isflying() {
      return isflying;
    },
  });
};

const superman = humanFactory(flyFactory({}));
console.log(superman.fly().cry().isCrying());
