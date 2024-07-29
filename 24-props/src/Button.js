import './Button.css';
import PropTypes from 'prop-types'
// props.children
// : 부모 컴포넌트에서 자식 컴포넌트를 호출 시 태크 사이에 작성한
// 문자열, 숫자, JSX, 배열 등 다양한 형태.

const Button = (props) => {
    console.log('Button props >>>', props);
    const { link, children, style } = props;
    return (
        <>
            <a href={link}>
            {/* <button className="Button">{props.children}</button>  구조분해할당이 없을 경우 이렇게도 작성 가능 */}
            <button style={style} className="Button">{children}</button>
            </a>
        </>
    )
};

Button.defaultProps = {
    children:'네이버',
    link: 'https://www.naver.com',
    style: { backgroundColor: 'blue' }
}

Button.propTypes = {
    children: PropTypes.string,
    link: PropTypes.string,
    style: PropTypes.object
}


export default Button;