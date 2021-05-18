form은 default로 서버로 보내버리는 특징(behavior)이 있기 때문에 form에 addEventListener()를 하고
콜백 function을 주면 e.preventDefault();를 꼭 해줘야 함.
from 태그 안의 value는 consol.log(typeof ); 하면 number도 string으로 받는 경우가 있음.
그러면 parseInt()로 한 번 더 감싸줘야 함.

slice(startNum, howmany); slice 함수에서 매개변수는 각각 '배열에서 몇 번째부터 가져옴?' '거기부터 몇 개 가져옴?' 이라는 뜻을 내포.

Object.value();는 배열 안의 value 값을 가져옴.