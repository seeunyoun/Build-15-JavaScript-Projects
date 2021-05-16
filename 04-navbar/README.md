<h1>강의를 통해 배운 것</h1>
<h2>add/remove & toggle Method</h2>
<p>1. 클래스를 추가하고 add() 제거하는 remove() 메소드</p>
<pre><code>
navToggle.addEventListener("click", function () {
 if (links.classList.contains("show-links")) {
   links.classList.remove("show-links");
 } else {
   links.classList.add("show-links");
 }
});
</code></pre><br>
<p>2. <strong>더 간결하게</strong> 클래스를 추가하고 제거하는 toggle() 메소드</p>
<pre><code>
links.classList.toggle("show-links");
</code></pre>

제이쿼리랑 비슷하네...