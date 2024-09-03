import Image from 'next/image';
import styles from '../../styles/mainBlock.module.scss';
import Img from '@/app/assets/images/background.jpg';

const MainBlock = () => {
	return (
		<section id="main-block" className={`page__main-block ${styles.mainBlock}`}>
			<div className='_container'>
				<h1 className={styles.mainBlock__title}>Идеальные<br/>путешествия<br/>существуют</h1>
				<div className={styles.mainBlock__text}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</div>
				<a href="#" className={styles.mainBlock__button}>Найти тур</a>
			</div>
			<div className={styles.mainBlock__bgImageWrapper}>
				<Image
					src={Img.src}
					fill
					quality={100}
					priority
					alt={"bg"}
				/>
			</div>
		</section>
	);
}

export default MainBlock;