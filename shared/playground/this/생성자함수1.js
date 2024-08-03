function Func() {
  console.log(this);
}

const func2 = new Func(); // Func {}
const func3 = Func(); // global
