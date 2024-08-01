var obj1 = {
  name: 'Lee',
  sayName: function () {
    console.log(this.name); // Lee. 메소드 안의 this이므로 obj1을 가리킴
    function a() {
      console.log(this); // undefined. a함수는 메서드 안에 있지만, 메서드 안에 선언된 내부함수이므로 전역 객체를 가리킨다. node.js환경에서는 global, 브라우저에서는 window를 가리킨다.
    }
    a();
  },
};

var obj2 = {
  name: 'Kim', // Kim. 객체 안의 this이므로 obj2를 가리킴
};

obj2.sayName = obj1.sayName;

obj1.sayName(); // Lee
obj2.sayName(); // Kim
