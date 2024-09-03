'use client'
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from '../../styles/header.module.scss';
import Logo from '@/app/assets/images/logo/logo.svg';
import LogoDark from '@/app/assets/images/logo/logoDark.svg';

const Header = () => {
	const [scrollY, setScrollY] = useState(0);

	const onScroll = useCallback(() => {
		setScrollY(window.scrollY);
}, []);

useEffect(() => {
	window.addEventListener("scroll", onScroll, { passive: true });
	return () => {
		 window.removeEventListener("scroll", onScroll, { passive: true });
	}
});

	return (
		<header className={`${styles.header} ${scrollY > 450 ? styles._fixed : ""}`}>
			<div className={`${styles.header__container} _container`}>
				<a href="#main-block" className={styles.header__logo}>
					{scrollY < 450 ?
						<Image
							className={styles.header__logoImg}
							src={Logo.src}
							width={Logo.width}
							height={Logo.height}
							alt="logo"
						/> :
						<Image
							className={styles.header__logoImg}
							src={LogoDark.src}
							width={LogoDark.width}
							height={LogoDark.height}
							alt="logo"
						/>
					}
				</a>
				<nav className={`${styles.menu} menu`}>
					<ul className={styles.menu__list}>
						<li className={styles.menu__item}>
							<a href="#choose" className={styles.menu__link}>Туры</a>
						</li>
						<li className={styles.menu__item}>
							<a href="#create" className={styles.menu__link}>Создать тур</a>
						</li>
						<li className={styles.menu__item}>
							<a href="#reviews" className={styles.menu__link}>Отзывы</a>
						</li>
						<li className={styles.menu__item}>
							<a href="#histories" className={styles.menu__link}>Истории</a>
						</li>
					</ul>
				</nav>
				<a href="tel:+79999999999" className={styles.header__tel}>+7 999 999 99 99</a>
			</div>
		</header>
	);
};

export default Header;