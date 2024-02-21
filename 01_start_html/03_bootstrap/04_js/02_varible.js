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
