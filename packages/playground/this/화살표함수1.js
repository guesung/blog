const obj = {
  func: () => console.log(this), // global
  func2: function () {
    console.log(this); // obj
  },
};

obj.func();
obj.func2();
