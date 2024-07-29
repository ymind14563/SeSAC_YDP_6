import './App.css';
import Larva from './Larva';

function App() {
  const name = 'apple';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px'
  }
  return (
    <>
    <div className='App'>  {/* 문법상 필요는 없으나 여기선 App.css 를 활용하기 위해 작성함 */}
      {/* 자동 생성 코드 있었으나 불필요하기에 삭제함. */}

      {/* JSX 문법 */}
      {/* #1. 하나로 감싸인 요소 */}
      {/* 의미 없는 div가 싫은 경우 - <></> Fragment 문법 */}

      {/* #2. js 문법 사용 
        - {} 로 감싸면 js 표현식 사용 가능.
        - {} 안에서 삼항 연산자 사용 가능 (if, for 문 사용 불가) 
      */}

      <div>{name} 안녕?</div>
      <div>
        {student === 'sesac'? <span>새싹 크루</span> : <span>새싹이 뭔지 몰라요..</span>}
      </div>

      {/* #3. style 속성
        - 리액트에서 DOM 요소에 스타일 적용 시 문자열 X --> 객체 사용!
        - {{스타일명 : '값'}}
        - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야함. (ex. backgroundColor)
        - font-size (x) JSX에서는 - 는 진짜 빼기를 말한다.
      */}
      <div style={styles}>스타일 적용</div>
      <div style={{
        backgroundColor: 'pink',
        color: 'blue',
        fontSize: '48px'
      }}>
        스타일 적용2
      </div>

      {/* #4. className 사용
          - class 속성이 아닌 className 속성 사용. (ex. <div className="App">)

          #5. 종료 태크 (closing tag)가 없는 태그 사용
          - 기존의 종료 태그가 없는 태크를 사용하더라도 종료 태그를 작성해야 함.
          - <input /> or <input></input>

          #6. 주석
          - // : jsx 외부 주석
          - {* *} : jsx 내부 주석
      */}
      <Larva />
      </div>
    </>
  );
}

export default App;
