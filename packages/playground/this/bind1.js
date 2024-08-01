const obj = {
  name: '규성',
  sayName() {
    console.log(this.name);
  },
};

function callCB(cb) {
  cb();
}

callCB(obj.sayName);

// obj.sayName은 sayName메서드를 실행하지 않았기에 obj가 sayName메서드의 this에 바인딩되지 않는다.
