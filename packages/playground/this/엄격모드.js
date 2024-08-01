'use strict';

function func() {
  console.log(this); // undefined
}

func();

console.log(this); // {}

// 엄격모드에서 내부 함수 내에서 this를 호출 시 undefined이다.
// 바깥에서 this를 호출 시 module.exports가 바인딩된다.
