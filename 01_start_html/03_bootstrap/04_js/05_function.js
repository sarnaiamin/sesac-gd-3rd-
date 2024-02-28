function helloWorld1() {
  //항수 정의
  //함수
  //특정 작엊을 수행하기 위해 독립적으로 설게된 코드 집합
  //함수 저의 -> 함수 호출
  //함수 정릐 / 선언
  //key word;function
  //name; 함수이름 (camelcase)
  //parameter: 함수 선언 사 매개변수를 받은 것
  //body; 함수 내부 코도 (scrope 라고도 함)
  // 함수 정의 / 선언 방삭
  //함수 선언문(함수 선언)
  //function 키워드 사용
  //function  name() {}
  //함수 표현식
  //-함수 이름 작성x->      변수를 만들어 함수를 저장
  //참고 )
  console.log("helloWorl1");
}
//항수 실행

//2 함수 호출
const helloWorld2 = function () {
  console.log("helloWorld2");
};

const helloWorld3 = () => {
  console.log("helloWorld3");
};

helloWorld3();

// return 사용
//return 반환값 => 함수 내용 코드 푀종 결과 값
// consule.lof(로 콘솔을 찍는 것에서 그치지 않고' 함수 내부 코도의 죄종 결과 저장하고, 보관하기 위해 키워드
//함수 불럭 안에서 return*/
function onePlusone() {
  return 1 + 1;
}
// onePlusone() //-> 2

console.log(onePlusone()); //consulelog(2) -> 콘솔창에서 2 찍음
function numPlusOne(num) {
  return num + 1;
}

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 7)); //12

const result2 = sum(100, 35);

function hello(name) {
  alert("hello ${name}");
}
hello("layla");
//과제
//multifly
function multifly(num1, num2) {
  console.log("num1 :", num1);
  console.log("num2:", num2);
  console.log("aa"); //return
}
console.log(multifly(7, 3)); //21
onsole.log(multifly(4, 10)); //40

//square 함수 만즐기
function square(num) {
  return num ** 2;
}
console.log(square(4));

console.clear();
