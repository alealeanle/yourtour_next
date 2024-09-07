import Image from 'next/image';
import clsx from 'clsx';
import Img from '@/app/assets/images/background.jpg';
import styles from '@/app/components/pages/HomePage/Bottom/Bottom.module.scss';

const Bottom = () => {
  return (
    <section className={clsx(styles.root, styles.bottom)}>
      <div className={clsx(styles.container, '_container')}>
        <div className={styles.img}>
          <Image src={Img.src} fill quality={100} alt={'cover'} />
        </div>
        <div className={styles.main}>
          <h3 className={styles.title}>Пора в путешествие вместе с нами!</h3>
          <div className={styles.text}>
            Напиши на почту и узнай подробности на&nbsp;
            <a href="mailto:yourtour@gmail.com" className={styles.mail}>
              yourtour@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
