function func() {
  console.log(this); // global
}

func();

console.log(this); // {}

// 일반함수 내부에서 this를 호출했기에 첫 this는 전역인 global을 가리킨다. 두 번째 this는 module.exports를 가리킨다. 이는, 각 Node.js의 파일이 모듈단위로 나뉘어 있기 때문이다.
// this === module.exports : true를 출력함을 확인할 수 있다.
