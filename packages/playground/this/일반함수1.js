const a = 1;
const b = 2;

function 일반함수() {
  const a = 3;
  const b = 4;
  console.log(this.a); // undefined (1)
  console.log(this.b); // undefined (2)
  return this;
}
console.log(일반함수()); // window/global (3)

// (1)과 (2)의 결과는 undefined이다. 왜냐하면, const로 선언한 변수는 지역 변수가 된다. var 키워드로 선언을 하거나, 아무 것도 붙이지 않아 암묵적 전역으로 선언을 해야 전역 객체에 등록이 된다.
