const obj1 = {
  name: 'obj1',
  sayName() {
    console.log(this.name);
  },
};

const obj2 = {
  name: 'obj2',
  sayName: obj1.sayName,
};

obj2.sayName(); // obj2

// obj2가 obj1.sayName 메서드를 호출하고 있다. 그렇기에, obj1.sayName내부의 this는 호출한 obj2를 가리키게 된다.
