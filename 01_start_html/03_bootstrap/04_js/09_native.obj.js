/* 
js표준 내장 객체
자바스크림트기 기본적으로 가지고 있는 객체
string, numer, array, date math
*/
//1. date 객체
//시간 , 날짜 대한 정보를 얻기 위해 사용

//현재 날짜
let now = new Date();
console.log(now);

//1000ms ===1s
//1000ms * 3600 = 1000ms * 60 *60 ===1s * 60 * 60 = 1h
//1000ms * 3600 * 24=== 24h
//1970년 1월 1일 기존으로 해당 ms 만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970);

//new date(year, month, day, hour, minites, second, ms)
//year: 4자리
//month: 0(1월)₩ ~ 11(12월)
//date: 1~31 값이 없으면 1로처리
//hour, minites, second, ms)값이 없으면 0로 처리
console.log(new Date(2021, 2, 15, 18, 30, 15));

//date 객체 메세드
// 연 월 일 등으로 값 얻을수 있음
console.log(now.getFullYear());
console.log(now.getFullYear()) + console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMinutes());
console.log(now.getMilliseconds());
console.log(now.getDay());

//오늘 날짜 기존
//switch
switch (now.getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  //return "평일";
  case 0:
  case 6:
    //return "주밀";
    break; //작성시 break  키워드 작성하지 않아도 해당
  default:
    //return "알수 없움";
    break;
}

//3
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(todayStatus);

// math 객체
//수학적인 상수와 함수를 위한 속성과 메이드

//속성
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

//메서드
console.log(Math.min(10, 2, 6, -50));
console.log(Math.max(10, 2, 6, -50));
console.log(Math.random());
console.log(Math.round(3.4)); //수수를 반울림 하여 전수로 변환
console.log(Math.floor(3.4)); //
console.log(Math.ceil(3.4));

//math.random

//0~ 9 사이의 난수 생성
console.log(Math.random() * 10);

//0~10 사이의 난수 생선
console.log(math.floor(Math.random() * 11));

//0 ~ 100 사이의 난수 생성
console.log(math.floor(Math.random() * 100) + 1);

console.log(math.floor(Math.random() * 3) + 20);
