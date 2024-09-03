import stylesHeaderBlock from '../../styles/headerBlock.module.scss';
import styles from '../../styles/reviews.module.scss';

const Reviews = () => {
	return (
		<section id="reviews" className={`${styles.page__reviews} ${styles.reviews}`}>
			<div className="reviews__container _container">
				<div className={stylesHeaderBlock.headerBlock}>
					<h2 className={stylesHeaderBlock.headerBlock__title}>Отзывы наших<br />путешественников</h2>
					<div className={stylesHeaderBlock.headerBlock__text}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</div>
				</div>
				<div className={styles.reviews__body}>
					<div className={`${styles.reviews__item} ${styles.review}`}>
						<div className={styles.review__text}>
							Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.
						</div>
						<div className={styles.review__bottom}>
							<div className={styles.review__description}>
								<div className={styles.review__name}>Мария</div>
								<div className={styles.review__tour}>Тур: Вдали от дома</div>
							</div>
							<div className={`${styles.review__photo} ${styles.review__photo_1}`}></div>
						</div>
					</div>
					<div className={`{styles.reviews__item} ${styles.review}`}>
						<div className={styles.review__text}>
							Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.<br /><br />Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.
						</div>
						<div className={styles.review__bottom}>
							<div className={styles.review__description}>
								<div className={styles.review__name}>Павел</div>
								<div className={styles.review__tour}>Тур: Путешествие в горы </div>
							</div>
							<div className={`${styles.review__photo} ${styles.review__photo_2}`}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Reviews;