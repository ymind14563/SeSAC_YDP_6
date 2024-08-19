// scr/store/counterReducer.js
// ** toolkit 사용하지 않는 버전. (전통 Redux 설정 방식)

// #1. action 타입 상수 정의(counter namespace용 일뿐)
// - 코드의 가독성을 높이고, 네임스페이스를 명확하게 구분하여 이름 충돌을 방지하기 위함
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// #2. action 생성자 정의 
// - 이를 통해 컴포넌트에 액션을 쉽게 디스패치 할 수 있음

/**
 * - 'type' 반드시 포함 / 이름도 변경 불가능 !
 * -> reducer는 이 type을 보고 어떤 상태 변경을 해야할 지 판단하기 때문
 * 'type' = 액션의 유형을 설명하는 문자열 (필수 속성)
 * 
 * 참고) 추가 데이터 종류 (선택)
 * payload / meta / error 
 */

export const plus = () => ({ type : PLUS }) // PLUS 액션 생성
export const minus = () => ({ type : MINUS }) // MINUS 액션 생성

// #3. state 초기값 정의
const initialState = {
    number: 100 // 초기 number 값 설정
}

// #4. reducer(리듀서) 정의 (상태, 액션 받음)
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/PLUS":
            return { number : state.number + 1 } // number 값을 1 증가
        case 'counter/MINUS':
            return { number : state.number - 1 } // number 값을 1 감소
        default:
            return state; // 기본 상태 반환
    }
};

export default counterReducer; // 리듀서를 기본으로 내보내기