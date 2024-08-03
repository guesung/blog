const obj = {
  name: '규성',
  sayName() {
    console.log(this.name);
  },
};

function callCB(cb) {
  cb();
}

callCB(obj.sayName.bind(obj));
