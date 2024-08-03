var a = 1;
var b = 2;

function 일반함수() {
  const a = 3;
  const b = 4;
  console.log(this.a); // undefined (1)
  console.log(this.b); // undefined (2)
  return this;
}
console.log(일반함수()); // window/global (3)

// (1)과 (2)의 결과값은 Node.js환경과 브라우저환경에 따라 결과가 다르다. Node.js에서는 undefined이지만 브라우저에서는 1과 2가 출력된다.
// Node.js에서 각 파일은 자체 모듈로 취급되기 때문이다. 파일의 최상위 레벨에서 선언된 변수들은 전역 스코프가 아닌 모듈 스코프에 속한다.
