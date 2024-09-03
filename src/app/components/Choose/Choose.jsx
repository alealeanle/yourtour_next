"use client"

import React, { useState } from 'react';
import Card from '../Card/Card';
import stylesHeaderBlock from '../../styles/headerBlock.module.scss';
import styles from '../../styles/choose.module.scss';
import Img1 from '@/app/assets/images/choose/01.jpg';
import Img2 from '@/app/assets/images/choose/02.jpg';
import Img3 from '@/app/assets/images/choose/03.jpg';
import Img4 from '@/app/assets/images/choose/04.jpg';
import Img5 from '@/app/assets/images/choose/05.jpg';
import Img6 from '@/app/assets/images/choose/06.jpg';


const Choose = () => {
	const [activeFilter, setActiveFilter] = useState();

	const filters = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];

	const tours = [
		{
			price: "от 80 000 руб",
			img: Img1,
			style: styles,
			alt: "Mountains jorney",
		},
		{
			price: "от 80 000 руб",
			img: Img2,
			style: styles,
			alt: "Mountains jorney",
		},
		{
			price: "от 80 000 руб",
			img: Img3,
			style: styles,
			alt: "Mountains jorney",
		},
		{
			price: "от 80 000 руб",
			img: Img4,
			style: styles,
			alt: "Mountains jorney",
		},
		{
			price: "от 80 000 руб",
			img: Img5,
			style: styles,
			alt: "Mountains jorney",
		},
		{
			price: "от 80 000 руб",
			img: Img6,
			style: styles,
			alt: "Mountains jorney",
		},
	];

	return (
		<section id="choose" className="page__choose choose">
			<div className="choose__container _container">
				<div className={`${styles.choose__header} ${stylesHeaderBlock.headerBlock}`}>
					<h2 className={stylesHeaderBlock.headerBlock__title}>Выбери свой тур</h2>
					<ul className={`${stylesHeaderBlock.headerBlock__menu} ${styles.menuBlock}`}>
						{filters.map(filter => (
							<li
								key={filter}
								className={`${styles.menuBlock__item} ${activeFilter === filter ? styles._active : ''}`}
								onClick={() => setActiveFilter(filter)}
							>
								{filter}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.cardBody}>
					{
						tours.map((tour, i) =>
							<Card
								{...tour}
								key={i}
							/>
						)
					}
				</div>
			</div>
		</section>
	)
}

export default Choose;