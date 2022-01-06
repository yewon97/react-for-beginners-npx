import propTypes from 'prop-types';

function Button({text}) {
  return <button>{text}</button>
}
Button.propTypes = {
  text: propTypes.string.isRequired,
}

// 외부로 export하기 위한 문장
export default Button;