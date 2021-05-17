<h1>강의를 통해 배운 것</h1>
<h2>DOMContentLoaded event과 load event의 차이점</h2>
<div>
  <ul>
    <li>DOMContentLoaded 이벤트는 HTML의 로딩과 파싱이 완료되면 바로 동작하는데, stylesheets, images의 로딩을 기다리지 않는다.</li>
    <li>load는 HTML, stylesheets, images를 포함한 전체 페이지의 로딩이 완료된 후 이벤트를 동작시킨다.</li>
  </ul>
  <strong>따라서 pre-loader 이벤트를 멈추게 하려면 load event를 쓰는 게 적합하다.</strong>
</div>
