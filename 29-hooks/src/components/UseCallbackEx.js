import React, { useState, useCallback } from 'react'

// useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용.
export default function UseCallbackEx() {
    const [text, setText] = useState('');

    // [before]
    // useCallback 안썼을 때
    // text 상태가 업데이트 되면 = 컴포넌트 리랜더링 = 코드를 다시 읽는다는 뜻
    // = onChangeText 함수도 다시 생성 => 불필요한 작업
    const onChangeText = (e) => {
        setText(e.target.value);
    }

    // [after]
    // useCallback 훅으로 함수를 기억하여
    // 컴포넌트가 리랜더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한, 기존 함수를 재사용

    const onChangeTextUseCallback = useCallback((e) => {
        setText(e.target.value);
    }, []);

  return (
    <div>
        <h1>useCallback ex</h1>
        <input type="text" onChange={onChangeTextUseCallback} />
        <div>작성한 값: {text || '없음'}</div>
    </div>
  )
}
