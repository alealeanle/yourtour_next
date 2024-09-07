import clsx from 'clsx';
import styles from '@/app/components/commons/Footer/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={clsx(styles.root, styles.footer)}>
      <div className={clsx(styles.container, '_container')}>
        <div className={styles.label}>Наши социальные сети</div>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="_icon-inst"
          >
            <span>instagram</span>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="_icon-fb"
          >
            <span>facebook</span>
          </a>
          <a href="https://vk.com/" target="_blank" className="_icon-vk">
            <span>vkontakte</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
