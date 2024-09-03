import styles from '../../styles/mainBlock.module.scss';

const MainBlock = () => {
	return (
		<section id="main-block" className={`page__main-block ${styles.mainBlock}`}>
			<div className='_container'>
				<h1 className={styles.mainBlock__title}>Идеальные<br/>путешествия<br/>существуют</h1>
				<div className={styles.mainBlock__text}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</div>
				<a href="#" className={styles.mainBlock__button}>Найти тур</a>
			</div>
		</section>
	);
}

export default MainBlock;