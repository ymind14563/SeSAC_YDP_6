import React, { useState, useMemo } from 'react'

// useMemo
// - 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화.
export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(''); // 재랜더링용

    // [before]
    const calc = () => {
        console.log('열심히 계산 중...calc');
        for (let i = 0; i < 1000000; i++) {} // 시간 소모적인 작업 예시
        return count ** 2; // 제곱
    }

    // [after] useMemo 적용
    // count의 값이 바뀔 때에만 함수를 실행
    // input 상태가 바뀌면 컴포넌트는 리랜더링 되지만 calc는 연산되지 않음.

    // 랜더링 하는데 있어 변화하지 않은 값들은 재계산하지 않기 위함이 목적 (불필요한 재계산 방지)
    // useMemo에서 계산된 값들을 미리 저장해 놓고, 변화하지 않는다면 저장해놓은 useMemo 값을 가져다 쓴다. -> 최적화
    // 하지만 의존성 배열(여기서는 [count]) 값이 변경되면 재계산한다.
        const calcMemo = useMemo(() => {
        console.log('열심히 계산 중...calcMemo');
        for (let i = 0; i < 1000000; i++) {} // 시간 소모적인 작업 예시
        return count ** 2; // 제곱
    }, [count]) // count가 변경될 때만 계산 수행

  return (
    <div>
        <h1>UseMemo ex</h1>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={() => setCount(() =>  count + 1)}>Plus</button>
        <p>count: {count}</p>

        {/* [before] */}
        <p>calc : {calc()}</p> {/* 함수 직접 호출, 랜더링과 동시에 실행 */}

        {/* [after] useMemo 적용 */}
        <p>calcMemo : {calcMemo}</p>
    </div>
  )
}


    // useMemo vs. useEffect
    // useMemo : 반복적인 작업을 덜하기 위해 사용 (자주 안바뀌는 것을 의존성 배열에 추가)
    // useEffect: 컴포넌트가 렌더링된 후에 부수 효과를 처리하기 위해 사용 
    // (예: 데이터 가져오기, 구독 설정, DOM 조작 등. 의존성 배열에 추가된 값이 변경될 때마다 실행)