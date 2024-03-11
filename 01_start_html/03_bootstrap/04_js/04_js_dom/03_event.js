const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-pink");
const btn3 = document.querySelector(".btn-gold");
const btn4 = document.querySelector(".btn-skyblue");
const container = document.querySelector(".container");

// addEventListener 사용
// btn1 : 익명 함수, 함수 표현식 사용해 변수에 저장하지 않고 작성
btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭했습니다!");
});

// 하나의 요소에 여러 이벤트 등록 가능
// mouseover는 마우스가 해당 요소 위에 올랐을 때 실행 -> 마우스 떼도 계속 적용
// hover는 마우스가 해당 요소 위에 올라가 있을 때만 적용 -> 마우스 떼면 원래대로 돌아감
btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "yellowgreen";
  div.style.marginBottom = "10px";
  div.innerText = "버튼 2 추가";
  container.append(div);
});

btn3.addEventListener("click", changeColor);
function changeColor() {
  let div = document.querySelectorAll(".container div");
  for (let div of divs) {
    div.style.color = "red";
  }
}
//마지막 요소만 배견색 파랑으로 변경

//btn4 : 이벤트 적용된 자기 자신을 선택하는 this
btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  this.style.backgroundColor = "oronge";
  this.style.color = "skyblue";
}
// click 이외도 다양한 이벤트

// 매개변수
//scroll event 는 브라우저 전제에 대한 실행

console.log(window);
window.addEventListener("scroll", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(scrollY);
});
///=-------------------------------
//form event

const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
//품이 제출되는ㄴ 이벤트

todoForm.addEventListener.addEventListener("submit", function () {
  consolelog(submit);
  //브리우저 상에서 기분적으로 동작하는 이벤트 동작을 제거
  event.preventDefault();
  console.log(submit);
  const todoInfut = document.querySelector("input[name=todo]");
  //console.log(todoInfut);
  //todoInfut.value = "아아!";

  const todo = todoInfut.value;
  const newTodo = document.createElement("li");
  newTodo.append = todo;
  todos.append(newTodo);

  //만약 빈 문자열이 들어왔을때 li 로 추기하고 싶지 암ㅎ다면

  //입력창 초기화

  todoInfut.value = "";
});

const changeInput = document.querySelector("#change-infut");
c;
