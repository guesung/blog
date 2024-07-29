a = 1;
b = 2;

function 일반함수() {
  const a = 3;
  const b = 4;
  console.log(this.a); // 1 (1)
  console.log(this.b); // 2 (2)
  return this;
}
console.log(일반함수()); // window/global (3)

// a와 b는 암묵적 전역 변수가 되어, 전역 객체에 등록이 되었다.
// var로 선언했을 때는 Node.js환경에서는 모듈 스코프 내에 속하게 되지만, var 없이 선언하면 브라우저 환경과 동일하게 암묵적 전역 변수가 된다.
