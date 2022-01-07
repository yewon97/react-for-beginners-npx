import PropTypes from 'prop-types';
import styles from './Button.module.css'

function Button({text}) {
  return (
  <button className={styles.btn}>{text}</button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
}

// 외부로 export하기 위한 문장
export default Button;