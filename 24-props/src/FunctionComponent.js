// 함수형
// 직관적으로 함수 이름 만들고, 보여줄 html 요소 return문에 작성.
// + 화살표 함수 (함수 표현식)로 작성해도 되고, 함수선언문으로 작성해도 된다.
// class는 상속때문에 import가 필요했지만 여기서는 필요없다.

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

export default FunctionComponent;

// TMI
// 리액트 18버전 이상부터, React.StrictMode가 기본적으로 활성화 됨.
// 이는 개발 모드에서 컴포넌트의 랜더링과 라이프사이클(생명주기) 메서드가 두번 호출 되도록 해서
// 부작용을 테스트 하거나 식별하는데 도움을 줌.
// 이로 인해서 console.log가 두번 찍힐 수 있다.