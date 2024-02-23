function helloWorld1() {
  //항수 정의
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
