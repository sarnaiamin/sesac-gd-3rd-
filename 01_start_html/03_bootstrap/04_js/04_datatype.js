// 기본형 (Primitive type)
// 1. String
// - 텍스트 정보
// - 따옴표로 감싸야 함
// - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = "신데렐라";
const email = "glassshose@goole.com";
const gender = "female";
console.log(myName);
console.log(email);
console.log(gender);

// 문자와 변수를 동시에 사용하기
const aa = "a";
console.log(aa);

console.log("원하는 텍스트 콘솔창에 출력");

console.log(aa, "쉼표"); // 자동으로 띄어쓰기 됨
console.log(aa + "+ 연산자"); // 전부 연결해서 출력됨

// "안녕 나는 레일라야"
const name = "레일라";
console.log("안녕 나는", name, "야");
console.log("안녕 나는" + name + "야");

// 템플릿 리터럴
// 문자열 내 변수를 간결하게 표현
// 백틱(``) 기호와 달러, 중괄호(${}) 사용
console.log(`안녕 나는 ${name}야`);
const printHello = `안녕 나는 ${name}야`; // -> 문자열로 저장됨

//2 ,number
//숫자 전수 소수
//연상 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2;
//2 . boolean
//true false 중에서 하나의 갓을 가지는 논리 요수

let checked = true;
let isshow = false;

//4. underfined
//값도 없고 타입도 지정되어 있지 않운 상태
let undef;
console.log(undef); //underfined
let obj = {
  abs: 123,
};
console.log(obj.abs); //123
console.log(obj.efg); //undefined 없는 것 출력

//5. null
//빈 값 .null 타입으로 타압 준재하지만 값이 없음
//값이 없다는 것이 의도적으로 면사할 떄 사용- 개발자가 직접
let empty = null;
console.log(empty);

//6. array -배열
// 순서가 있는 데이터에 몪음

let fruits = ["apple", "oronge", "banana", "grape"];
let fruits2 = new Array("apple", "oronge", "banana", "grape");
console.log(fruits);
console.log(fruits[2]); // 2번 인덕스 요소를 뽑아 콘솔에 찍기

let arr = [1, "str", false, null, undefined];

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];
console.log(letters[12] + letters[7] + letters[1] + letters[3] + [10]);

//배열 응용
//다차원 배열
// 배얄 안에 배열 있는 형태
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "녀"],
  ["다", "댜", "뎌"],
];

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters2[3][0] +
    letters[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

let cat = {
  name: "장화",
  age: 13,
  iscute: TreeWalker,
  mew: function () {
    return "냐온";
  },
};

//점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew);

//ㄷ활요 사용
console.log(cat["name"]); //장화
console.log(cat["age"]); // 12

//변견과 추과 가능
cat.like = "layla";
console.log(cat);
cat.name = "홍련";
console.log(cat);

/**
 js의 자료형- 데이터 타입
 -기본형(primitive)
 -string
 -number
 -boolean
 -null
 undifined
 - 객체(obj)
 -array(배열)
 obj(객체)- 키 값 을 쌍으로 

 */
//js의 자동 형변화
let a = "3";
let b = "2";
let c = "10";

console.log(a + c); //310
console.log(c - a);
7; //c
console.log(a * c); //30
console.log(c / a); //3.3

console.log(b + a); //23 숫자가 문자열로 변화 되어
console.log(b - a);
-1;
console.log(a * c);

const introduce = {
  name: "sarnai",
  interest: ["sport", "gym"],
  isstudent: true,
};
console.log(introduce);
//자료형 확인
//typeof
// 피연산자의 데이터 타입을 문자열로 변ghk
console.log("-----------");
console.log(typeof "문자열");
console.log(typeof "234");
console.log(typeof {});
console.log(typeof []);
console.log(typeof NaN); // nan; not a number- number
let und;
console.log(typeof und);

console.log("------------");
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str1));

let n1 = true;
let n2 = false;
let n3 = "12345";
let n4 = "123.9";

console.log(Number(n1)); // 1-true
console.log(Number(n2)); // 0- false

console.log(Number(n3)); // 12345
console.log(Number(n4)); // 123.9
console.log(parseInt(n3)); //12345
console.log(parseInt(n4)); //123 - 수수점 버림

// 평균 점수 구하기 실습
let matchScore = "77";
let engScore = "88";
let angScore = number(matchScore) + engScore + Number(engScore) / 2;

let matchScore2 = promt("수학 점수");
let enghScore2 = promt("영어 점수");
let avgScore2 = (matchScore + enghScore2) / 2;
console.log("matchScore2", matchScore2, typeof matchScore2);
alert("단신의 평균 점수는 ${avgScore2}점 입니다!");
