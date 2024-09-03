import Image from 'next/image';
import styles from '../../styles/card.module.scss';


const Card = ({ title = "Путешествие в горы", text, cardList, price, socials, img, style, alt }) => {
	return (
		<article className={style.cardBody__item}>
			<div className={`${styles.card} ${style.cardBody__card}`}>
				<div className={styles.card__main}>
					<h3 className={styles.card__title}>{title}</h3>
					{ price && <p className={styles.card__price}>{price}</p> }
					{ text &&
						<div className={styles.card__text}>
							{text}
							{ cardList &&
								<ul className={styles.card__list}>
									{
										cardList.map((item, i) =>
											<li key={i} className={styles.card__item}>{item}</li>
										)
									}
								</ul>
							}
						</div>
					}
				</div>
				<div className={`${styles.card__details} _icon-arrow`}>Подробнее</div>
			</div>
			{ socials &&
				<div className={styles.card__social}>
					{
						Object.entries(socials).map(([key, url]) =>
							<a key={key} href={url} target="_blank" className={styles.card__site}>{key}</a>
						)
					}
				</div>
			}
			<Image
				className={styles.card__image}
				src={img.src}
				fill
				quality={100}
				alt={alt}
			/>
		</article>
	)
}

export default Card;