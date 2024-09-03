import styles from '../../styles/footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} _container`}>
				<div className={styles.footer__label}>Наши социальные сети</div>
				<div className={`${styles.footer__socials} ${styles.socials}`}>
					<a href="https://www.instagram.com/" target="_blank" className="_icon-inst"><span>instagram</span></a>
					<a href="https://www.facebook.com/" target="_blank" className="_icon-fb"><span>facebook</span></a>
					<a href="https://vk.com/" target="_blank" className="_icon-vk"><span>vkontakte</span></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;