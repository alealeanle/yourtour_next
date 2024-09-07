import Image from 'next/image';
import clsx from 'clsx';
import styles from '@/app/components/pages/HomePage/MainBlock/MainBlock.module.scss';
import Img from '@/app/assets/images/background.jpg';

const MainBlock = () => {
  return (
    <section id="main-block" className={clsx(styles.root, styles.mainBlock)}>
      <div className="_container">
        <h1 className={styles.title}>
          Идеальные
          <br />
          путешествия
          <br />
          существуют
        </h1>
        <div className={styles.text}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </div>
        <a href="#" className={styles.button}>
          Найти тур
        </a>
      </div>
      <div className={styles.backgroundImageWrapper}>
        <Image
          className={styles.backgroundImg}
          src={Img.src}
          fill
          quality={100}
          priority
          alt={'bg'}
        />
      </div>
    </section>
  );
};

export default MainBlock;
