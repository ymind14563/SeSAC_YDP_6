// 함수형
// 직관적으로 함수 이름 만들고, 보여줄 html 요소 return문에 작성.
// + 화살표 함수 (함수 표현식)로 작성해도 되고, 함수선언문으로 작성해도 된다.
// class는 상속때문에 import가 필요했지만 여기서는 필요없다.
import PropTypes from 'prop-types'

const FunctionComponent = (props) => {
    console.log("Function props >>>" , props); // { name : "xxx"}
    const {name} = props;
    const teacher = "Damon";

    return (
        <>
            <h1>Hi~ {teacher}!</h1>
            <p>여기는 Functional Component!</p>
            {/* props 사용할 때 */}
            <p>
                {/* 새로운 컴포넌트의 이름은 <b>{props.name}</b> */}
            </p>
            <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
        </>
    )
}

// defaultProps: 부모 컴포넌트에서 props를 미전달 시 기본값을 보여줄 props 설정
// FunctionComponent.defaultProps = {
//     name: "야호"
// }

// propTypes: 컴포넌트의 필수 props를 지정 or props 타입을 지정할 때 사용.
// TypeScript가 아닌 Javascript의 "유연한 특성" 때문에 문제가 생길 수 있음
// -> 이를 해결하기 위해 권장.

// default도 없어야 isRequired 동작을 함.
FunctionComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정하여 FunctionComponent.proTypes에 저장
    name : PropTypes.string,
    // name : PropTypes.string.isRequired
    // "string" 타입이자 "필수값"으로 지정.
    // props 가 반드시 제공되어야 함을 의미.
}

export default FunctionComponent;

// TMI
// 리액트 18버전 이상부터, React.StrictMode가 기본적으로 활성화 됨.
// 이는 개발 모드에서 컴포넌트의 랜더링과 라이프사이클(생명주기) 메서드가 두번 호출 되도록 해서
// 부작용을 테스트 하거나 식별하는데 도움을 줌.
// 이로 인해서 console.log가 두번 찍힐 수 있다.