//문자열레서 사용 가능한 속성과 메서드
//length, toUpperCace, tollowerCase() trim(), split() indexof() replace() peplaceAll() slice() repeat
//지금까지 직접 함수를 만들어 사용
//메서드는 자바스크립에서 만들어 놓은 함수- 그래서뒤에
let str = "strawberry Moon";
let str2 = "strawberry Moon";

//문자열 인덱싱
console.log(str[1]); //t
console.log(str[0]); //s
console.log(str[0] + str[3]); //sa

console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

console.log("str 문자열의 길이", str.length);
console.log("str2 문자열의 길이", str2.length);

//인지가 없는 메소드; xx.method() 형태
//- toUpperCase
//- toLowerCase
// trim

let msg = "happy birthday~";
let userId = "            user123";
console.log(msg.toUpperCase);
console.log(msg.toLowerCase);
console.log(userId.length);
console.log(userId.trim);
console.log(userId.trim().length);

console.log(userId.trim().toUpperCase().length);
//인자 잇는 메서드 ; xx.method (arg) 형태
// indexof() ; 무자얄에서 인자로 받은 문자열의 인덕스를 반환, 없다면 -1 반환
//replace 교체될 값 대신 들어갈 값
//eplaceAll 해당하는 모든 문잘를 교채
//slice -startindex, endindex, starte=index- endindex 1까지 자름

let fruit = "applemango";
console.log(fruit.indexOf("apple")); //0
console.log(fruit.indexOf("mango")); //5
console.log(fruit.indexOf("e")); //4
console.log(fruit.indexOf("z")); //-1

console.log(fruit.charAt("8")); //g
console.log(fruit.charAt("5")); //m
console.log(fruit[5]); //m

console.log(fruit.slice("5")); //mango
console.log(fruit.slice("3, 6")); //em
console.log(fruit.slice("-1")); //0
console.log(fruit.slice("-3")); //ngo
console.log("fruit의 값에 변화 없음", fruit); // 변화 없음

let msg2 = "Wow! it's so beauty";
console.log(msg2.replace("Wow", "OMG"));
console.log(msg2.replaceAll("Wow", "OMG"));
// 2024.02.28-> 2024.02.28로 바꾸기
let date = "2024.02.28";
console.log(date.replaceAll(".", "_"));

console.log("helloWorld".repeat(5));
console.log(date.split("."));
console.log(date.split("")); // 모든 글짜를 잘라
let splitedDate = date.split("."); //
console.log(typeof splitedDate);

//----------------
//배얄 사용 가능한 속성과 메서드
//push, pop, unfish, shift, index, reverse, lenth

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quaka", "panda", "dog", "capybara"];
arr1[5] = 6; // 중간에 빈 값(empty) 생길수 있음
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1); //1, 2, 3, 4, 5, 10, 20 30
//pop ()배열 마지막 요소 제거
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

//unshift() 맨 앞에 요쇼 추가
arr2.unshift("bear");
console.log(arr2);

//push,pop, unshift, shift-> 무자열애서 메서드를 사용한 것과 다르게 원래의 배열이 변경됨
//includes(); 해당 배열에 인자로 받은 값과 동일한 요소가 있는지
console.log(arr2.includes("bear")); //true

//index(); 문자열솨 마찬가지로
console.log(arr2.indexOf("capybara"));

//length- 속성으로 괄호 작성
console.log(arr2.length);

//reserve(); 배열의 순서를 뒤집음-> 배열

//join(); 배열을 인자의 문자열 기존으로 합져 문자열로 반환
//원래
console.log(arr2);
console.log(arr2.join());
console.log(typeof arr2.join());
console.log(arr2.join(""));
console.log(arr2.join("그리고"));
console.log(arr2);

//----------------------------------
//배열에서 반복문
//for
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
// for of
//여기서 number 는 for of 문에서 내가 지어즌 변수명
//index  번호러 순하하는 것이 아니라 배열 요소에 직접 접근
for (let number of arr3) {
  console.log(number);
}

//for (let alphabets of alphabets) {
console.log(alphabets);
//for each
//매가 변수 3개를 받는 배열의 반복을 위한 메더드(함수)
//메개변수 이름은 마음대로 지어도 상광 없지만 순서에 따른 의미는 항상 동일
/* 
arr.each(function) 요소를 지칭할 별명, 인덕스를 지칭할 별명{ arr 를 지청 별명}*/
console.log("for each");
arr3.forEach(function (num, idx) {
  console.log(num);
  console.log(idx);
});
///-------------------------
//filter 조건을 만족하는 요소들 '배열' 반환
//arr2 의 요소 중 길이가 5자 이상인 요소만  모아
let Newarr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});
console.log(Newarr2);
console.log(arr2); //원래 배열에 영향 주지 않음

const words = ["미에갯", "라이거", "유니콘", "고질라", "드래건"];
const newWords = words.filter(function (ani) {
  return ani.charAt(o) === "라" || ani.charAt(0) === "유";
});

//find 배얄애서 특정 족ㄴ을 만족하는 첫 번재 요소 반환
let findResualt = words.find(function (ani) {
  return ani.charAt(0) === "드";
});
console.log(findResualt);
//map(); 배열 내의 모든 원소에 대해 호줄한 함수의 결과 모아 새로운 배열 반환
//arr/map(function ( value, index, arr))
//배열의 모든 원소를 for 문으로 돌려서 바꿀소 있지만 더 간단히 메소드를 사용

let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(mapArr); // [100, 200, 300, 400, 500]