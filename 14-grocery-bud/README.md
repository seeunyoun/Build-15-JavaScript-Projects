setTimeout(function(){}, 몇 초);
function()의 매개변수에는 어떤 함수를, 어떻게 동작 완료시킬지 적으면 됨!

if(value){} -> value가 없으면 즉, 공백이면 불리언 값 true를 나타냄
if(value == ''){} 이 구문과 동일한 뜻!

function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value };
}
여기서 배열 안의 id:id -> id / value:value -> value로
{id, value}이렇게 shortcut해서 쓸 수 있음! ((ES6))

삼항(ternary) 연산자 ?
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

localStorage.getItem("list")가 참이면, JSON.parse(localStorage.getItem("list")) 구문을 실행하고, 거짓이면,
빈 []를 가져온다!

filter(function(){});