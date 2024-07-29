const obj = {
  a: 1,
  func() {
    console.log(this); // obj (1)
  },
  func2: function () {
    console.log(this); // obj (2)
  },
  func3: function () {
    function func4() {
      console.log(this); // global(3)
    }
    func4();
  },
};

obj.func();
obj.func2();
obj.func3();

// this는 호출한 시점에 동적으로 결정이 된다.
// (1)에서 this를 호출한 시점이 obj.func 내부이다. func()는 obj의 메서드이다. 메서드 내부에서 this를 호출했기 때문에 해당 객체를 가리키게 된다.
// func과 func2 이렇게 다른 형태로 객체의 메서드 선언이 가능하다. function없이 선언하거나(`함수명(){}`), `함수명 : function(){}` 이런 식으로 말이다.
// (3)에서 this를 호출한 시점은 메서드 내부의 함수, 즉 내부 함수이기 때문에 전역 객체를 가리키게 된다.
