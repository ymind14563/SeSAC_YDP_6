// redux 설치
// npm i redux react-redux @reduxjs/toolkit 

import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';

function App2() {
   // #7. useSelector 훅 사용하여 Redux 스토어에서 상태 읽어오기
   // Redux 상태에서 number 값을 선택
   const number = useSelector((state) => state.number);
   const number2 = useSelector((state) => state);
  console.log("number >>> ", number); // { number : 100 }

  return (
    <div className="App">
      <h1>React Redux Ex2</h1>
      <h1>Redux를 사용!</h1>
      <h2>number : {number}</h2>
      <Box1 />
    </div>
  );
}


// Box 컴포넌트
const Box1 = () => {
  return(
    <div className='Box'>
      <h2>Box1 </h2>
      <Box2 />
    </div>
  )
}

// Box2 컴포넌트
const Box2 = () => {
  return(
    <div className='Box2'>
      <h2>Box2 : </h2>
      <Box3 />
    </div>
  )
}

// Box3 컴포넌트
const Box3 = () => {
  return(
    <div className='Box3'>
      <h2>Box3 : </h2>
      <Box4 />
    </div>
  )
}

// Box4 컴포넌트
const Box4 = () => {
  // #8. useDispatch 훅 사용하여 액션을 디스패치하는 함수 가져오기
  // - 이 함수를 사용하여 상태 업데이트 !
  // Redux 상태에서 number 값을 선택하고, 액션을 디스패치할 준비
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return(
    <div className='Box4'>
      <h2>Box4 : {number}</h2>
      <button onClick={()=>dispatch({ type: 'counter/PLUS' })}>PLUS</button>
      <button onClick={()=>dispatch({ type: 'counter/MINUS' })}>MINUS</button>
    </div>
  )
}

export default App2;



// Redux의 주요원칙 3가지
// 1. 단일 스토어 
//  - 애플리케이션의 전체 상태는 하나의 스토어(store)에 저장되어야 함.
// = 모든 상태가 중앙집중화된 스토어
// Why? 한 곳에서 관리되면 일관성을 유지하기 좋고 추적이 용이함

// 2. 상태는 읽기 전용
// - 상태는 직접 수정할 수 없으며, 상태를 변경하려면 액션(Action)을 통해서만 가능
// - 상태를 변경하려는 의도를 설명하려는 액션을 스토어에 전달하면, 스토어는 리듀서를 통해서 새로운 상태 객체를 생성함.
// => 액션 -> 스토어 -> 리듀서 => 새로운 상태 생성.

// 3. 변경은 순수 함수로 이루어짐.
// - 상태를 변경하는 로직은 순루 함수인 리듀서로 정의됨.
// - 이 과정에서 상태는 직접 수정되지 않고, 새로운 상태 객체가 반환됨.

// ** 순수 함수란? (2가지 특징)
// 1. 동일한 입력에 대해 항상 동일한 출력을 반환함.
// -> 함수의 결과가 함수 외부의 상태나 데이터에 의존하지 않는다.

// 2. 부수 효과가 없다.
// -> 함수 외부의 상태를 변경하지 않는다.
// -> 즉, 함수 내부에서 상태를 변경하거나, I/O 작업(input, output)을 수행하지 안혹, 외부에서 참조할 수 있는 변수나 데이터에 영향을 주지 않는다.


// **정리**
// 저장공간(Store) - 상태를 저장 = 편집실
// 사용할 상태를 선택(Selector)
// 우리가 상태 관리를 할 텐데 
// 어떠한 상태의 변화를 일으키는 사건!(Action) - 명령 = 대본

// 그 사건으로 인해 새로운 상태를 반환하는 함수 (Reducer) - 동작 = 감독

// (Dispatch)는 Action을 Store랑 연결해줌.
// = 액션을 스토어에 보내는 행위를 의미
// Dispatch를 호출 => Store가 해당 Action을 Reducer로 전달
// => 상태 업데이트 !
