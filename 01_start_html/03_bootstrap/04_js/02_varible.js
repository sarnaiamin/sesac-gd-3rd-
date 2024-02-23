console.log("connected!");

//변수 선언하고 사용하기
/*
var 키워드
1.변수 선언 값 할당
2. 변수 선언과 값 할당을 동시에
*/
// 변수 선언
var varName; // underfinde
// 변수 할당
varName = "layla";
// 변수 선언과 값 할당 동시
var varName2 = "layla2";
// 변수 제할당
varName = "yuki"; // varname 변수의 값이 "layla"  yuki 변경
console.log(varName); //yuki 출력

console.log(varName);
console.log("varName");
// var 이 이상한 점
// 변수의 동일한 이름으로 재선언 할 수 있음
var varName = "lily";
console.log(varName); // lily 출력
// 2. 변수를 선언하기 전 값 할당 할수 있음
// 잠점 같아 보일수 있이느 유지보수할때
aa = 123;
console.log(aa);

//변수 값 할당 동시에
let letName = "심청이";
console.timeLog(letName2); //심청이 출력
// let latname2= 심봉사 ; error; 준복 선언 불가
letName2 = "심봉사"; //값 제할당 가능
console.log(letName2);
`
`
/* const\ 키워드
반드시 변수 선언과 값 할당 동시에 이뤄짐
변수 재선언 재할당*/
const constName; //error 선언 동시애 할당필요
console.log(constName); 
/* 정라
var: es6 이 전에 사용했던 변구 선언 키워드 사용 자양하자
let; 변수 서언 키워드
변수 선언 - 겂 불가능
변수 재활동 가눙 (값 수정할수 았음)
const ; 상수 선언 키워드
상수 변하지 앟움 값
변수 선너과 값 활동 동시에 해야함
재선언 재활동 불가눙 
식발자 규칙
이름 지정할떄 사용하는 단어 (변수명 함수명 등)
키워드 사용 불가
키워드 특별한 역할을 이미 하고 있는 단어
ex, var, let, const, if, function. for. return
숫자로 시작 불가
특수문자 $ 만 허용
공백 문자 사용 불가
사용 간ㅇ 한 식뱔자 
a, name, name1. name$/ name, my_name, myname
varm, let, const. 1st, my name, 
*/