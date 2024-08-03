function func(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

const obj = {
  name: 'guesung',
};

const obj2 = new func('timegambit');
obj2.sayName.apply(obj); // guesung

obj2.sayName.bind(obj);
obj2.sayName(); // timegambit
