<h1>강의를 보고 배운 것</h1>
<h2>setInterval(콜백함수,새로고침 시간)</h2>
<pre><code>// countdown
let countdown = setInterval(getRemainingTime, 1000);
</pre></code>
<h2>clearInterval(변수명)</h2>
clearIntervel 괄호 안에 setInterval을 준 변수명을 적는다.
<pre><code>
clearInterval(countdown);
</pre></code>

<h2>10 미만인 숫자 앞에 0을 붙이는 코드</h2>
우선, 결과 값들을 모두 변수명 values 라는 배열로 만든 후, 맨위에 선언했던 items를 forEach() 돌린다. 이 때 콜백함수의 매개변수는 item 뿐만 아니라 index도 추가해서 해당 인덱스에 결과값이 들어갈 수 있도록 하고, format 함수로 한 번 감싼다.
<pre><code>
// set values array
const values = [days, hours, minutes, seconds];

function format(item) {
  if (item < 10) {
    return (item = `0${item}`);
  }
  return item;
}

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

</pre></code>
