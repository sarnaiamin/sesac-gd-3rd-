console.log("connected");
let a = 1;
const b = "1";

console.log(1 === 1); //true
console.log(1 === 2); //false
console.log(1 === "1"); //false -숫자 1과 문자 1은 다음 타입
console.log(1 !== 1); //숫자 1과 숫자 1은 같지 않는다- false
console.log(1 !== 2); //tntwk 1rhk 2는같지 않다-true
console.log(1 !== 1); // false

//===, !==\
// v피연산자ㅢ 값과 타입 모두 비교
//엄격한 동등 얀산자

console.log("........................");
console.log(2 > 1); //2는 1보자 크다- true
console.log(1 >= 1); //- 1은 1보다 크기나 같다- true
console.log(2 < 1); //2는 1보다 작다-false
console.log(1 <= 1); // 1은 1보다 작거니 같다

//신술 연산자

console.log("..................");
console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(1 * 2); //2
console.log(1 / 2); //0.5
//나머지 연산자
console.log(1 % 2); //묷; 0, 나머지 1-1
console.log(1 % 3);
console.log(8 % 5);
console.log(1 ** 2); //1

//논리 연산자
//! &&, enter키 위 + shift
console.log(!true); //false
console.log(!false); //true
console.log(!!true); //true- 때문에 true-true
console.log(!!false); //false
console.log(true && true); //true
console.log(1 < 2 && 1 < 5); //true
console.log(true || true); //true
console.log(true || false); //false
console.log(1 > 2 || 1 < 5); //true
console.log(1 > 2 || 1 > 5); //false

//연산자 응용
console.log(2 > 1);
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 < 3);
// Quiz
// 코드 결과 작성
console.log(3 <= 1); //false
console.log(7 == "7"); //true
console.log(-10 >= -11); //true

const aa = "a";
console.log("원하는 텍스트 같이 콩통창에 출력");

console.log(aa, "웜하는 택스트 같아 작성");

console.log(aa, "쉼표");
console.log(aa + "+연산자");
//안녕 나는 사르나

const name = 사르나;
console.log("안녕", name, "아");
console.log("안녕", +name, +"아");
