import Card from '../Card/Card';
import stylesHeaderBlock from '../../styles/headerBlock.module.scss';
import styles from '../../styles/histories.module.scss';
import Img1 from '@/app/assets/images/histories/01.jpg';
import Img2 from '@/app/assets/images/histories/02.jpg';
import Img3 from '@/app/assets/images/histories/03.jpg';

const Histories = () => {
	const cardList = ["вкусная еда", "дешевый транспорт", "красивый город."];
	const socials1 = {
		instagram: "https://www.instagram.com/",
		facebook: "https://www.facebook.com/",
		youtube: "https://www.youtube.com/"
	};
	const socials2 = {
		instagram: "https://www.instagram.com/",
		ВКонтакте: "https://www.vk.com/"
	};
	const socials3 = {
		instagram: "https://www.instagram.com/",
		facebook: "https://www.facebook.com/",
		ВКонтакте: "https://www.vk.com/"
	};
	const histories = [
		{
			title: "Автостопом в Стамбул",
			text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
			cardList: cardList,
			socials: socials1,
			img: Img1,
			style: styles,
			alt: "History photo",
		},
		{
			title: "Автостопом в Стамбул",
			text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
			socials: socials2,
			img: Img2,
			style: styles,
			alt: "History photo",
		},
		{
			title: "Автостопом в Стамбул",
			text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
			socials: socials3,
			img: Img3,
			style: styles,
			alt: "History photo",
		},
	];

	return (
		<section id="histories" className={`${styles.page__histories} ${styles.histories}`}>
		<div className="_container">
			<div className={`${styles.histories__header} ${stylesHeaderBlock.headerBlock}`}>
				<h2 className={stylesHeaderBlock.headerBlock__title}>Истории путешествий</h2>
				<div className={stylesHeaderBlock.headerBlock__text}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</div>
			</div>
			<div className={`${styles.histories__body} ${styles.bodyHistories}`}>
				{
					histories.map((history, i) =>
						<Card
							{...history}
							key={i}
						/>
					)
				}
			</div>
		</div>
	</section>
	)
}

export default Histories;