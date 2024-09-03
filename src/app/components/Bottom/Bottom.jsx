import Image from 'next/image';
import Img from '@/app/assets/images/background.jpg';
import styles from '../../styles/bottom.module.scss';

const Bottom = () => {
	return (
		<section className={`${styles.page__bottom} ${styles.bottom}`}>
			<div className={`${styles.bottom__container} _container`}>
				<div className={styles.bottom__img}>
					<Image
						src={Img.src}
						width={100}
						height={100}
						// quality={100}
						alt={"cover"}
						unoptimized
					/>
				</div>
				<div className={styles.bottom__main}>
					<h3 className={styles.bottom__title}>Пора в путешествие вместе с нами!</h3>
					<div className={styles.bottom__text}>Напиши на почту и узнай подробности на&nbsp;
						<a href="mailto:yourtour@gmail.com" className={styles.bottom__mail}>yourtour@gmail.com</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bottom;