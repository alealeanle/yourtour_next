import styles from '../../styles/tourForm.module.scss';

const Button = ({ text, type, style}) => {
	return (
		<button type={type} className={`${styles.formCreate__btn} ${style}`}>{text}</button>
	)
}

export default Button;