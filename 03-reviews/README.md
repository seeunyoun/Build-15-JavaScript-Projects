<h1>강의를 통해 배운 것</h1>
<h2>let, const 변수 선언</h2>
<div>
  <ul>
    <li>let 변수 선언할 시, 변수에 할당한 값은 바뀔 수 있다.</li>
    <li>const 변수 선언하면, 처음 변수에 할당한 값은 고정되어 바뀔 수 없다.</li>
  </ul>
</div>
<br>
<hr>
<h2>배열에서 원하는 값을 가져오는 법</h2>
// set starting item 일단 초기값 0을 추후에 값이 바뀔 수 있도록 let으로 변수를 선언한다.
<pre>
<code>
let currentItem = 0;</code>
</pre>
// show person based on item 배열에 있는 key와 value를 가져올 수 있게 함수를 선언한다.
<pre>
<code>
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
</code>
</pre>
// show next person 다음 버튼을 누르면 해당 배열의 다음 배열 key 값을 받아올 수 있게 한다. <strong>currentItem++;</strong>는 위에서 애초에 let으로 선언한 했기 때문에 가능.
<pre>
<code>
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0; // 배열 안의 length를 초과하면 다시 0에서 시작!
  }
  showPerson();
});
</code>
</pre>
// show prev person 이전 버튼을 누르면 해당 배열의 이전 배열 key 값을 받아올 수 있게 한다.
<pre>
<code>
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; // 0보다 작아지면 배열의 마지막 값에서 다시 시작!
  }
  showPerson();
});
</code>
</pre>
