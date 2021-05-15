<h1>강의를 통해 배운 것</h1>
<h2>textContent, innerHTML와 innerText의 차이점</h2>
<table>
  <tbody>
    <tr>
      <th>프로퍼티<th>
      <td style="text-align:center;">innerHTML<td>
      <td style="text-align:center;">innerHTML<td>
      <td style="text-align:center;">innerHTML<td>
    </tr>
    <tr>
      <th>값<th>
      <td style="text-align:center;">raw text<td>
      <td style="text-align:center;">rendered text<td>
      <td style="text-align:center;">HTML parsed text<td>
    </tr>
    <tr>
      <th>성능<th>
      <td style="text-align:center;">좋음<td>
      <td style="text-align:center;">보통<td>
      <td style="text-align:center;">나쁨<td>
    </tr>
    <tr>
      <th>보안<th>
      <td style="text-align:center;">-<td>
      <td style="text-align:center;">-<td>
      <td style="text-align:center;">취약<td>
    </tr>
  </tbody>
</table>
<div>
  <h3>textContent</h3>
  <ul>
    <li>textContent의 값은 식별자 노드의 내부 콘텐츠를 text/plain으로 파싱한 결과로 즉, 해당 요소 내부의 원시 텍스트(raw text) - script 태그나 style 태그와 상관없이 해당 노드가 가진 텍스트 값만 가져옴.</li>
    <li>그래서 다른 프로퍼티들에 비해 파싱이 빠름.</li>
  </ul>
</div>
<div>
  <h3>innerText</h3>
  <ul>
    <li>innerText 또한 text/plain으로 파싱한 결과지만, 원시 텍스트가 최종적으로 (화면에) 렌더링된 모습. 예를 들어 내용 숨김이나 줄바꿈 같이 의도적인 스타일링이 들어간 후의 모습. - 실제로 사용자가 화면에서 볼 수 있는 텍스트만 가져옴.</li>
    <li>IE 8 이하에서는 textContent를 지원하지 않았기 때문에, innerText는 태생적으로 IE 엔진에 적합하게 만들어짐.</li>
  </ul>
</div>
<div>
  <h3>innerHTML</h3>
  <ul>
    <li>innerHTML 프로퍼티 값은 text/html으로 파싱한 결과라서 상대적으로 파싱이 느림. - 해당 element의 HTML, XML을 읽어오기 때문에, 태그나 요소 스타일이 통째로 같이 가져와지는 경우도 발생.</li>
    <li>더 큰 문제는 innerHTML이 XSS(Cross-Site Scripting) 공격에 취약한 사례로 언급됨. HTML5에서는 innerHTML과 함께 삽입된 script 태그가 실행되지 않도록 지정했지만 여전히 다른 공격 루트들은 방어 불가. 그래서 프로젝트가 보안 점검을 거치게 되는 경우, innerHTML을 사용하면 코드가 거부될 가능성이 높음. </li>
  </ul>
</div>
<br>
<hr>
<h2>classList.contains();</h2>
<p>if 조건문에 자주 쓰이고, Boolean 값을 리턴한다. 해당 요소의 클래스에 "찾고자하는 클래스명"이 있는지 묻는 메소드다. 클래스명이 있으면 true 값을 리턴한다.</p>
