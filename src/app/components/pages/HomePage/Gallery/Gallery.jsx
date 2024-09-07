import Image from 'next/image';
import clsx from 'clsx';
import stylesHeaderBlock from '@/app/styles/headerBlock.module.scss';
import styles from '@/app/components/pages/HomePage/Gallery/Gallery.module.scss';
import Img1 from '@/app/assets/images/gallery/01.jpg';
import Img2 from '@/app/assets/images/gallery/02.jpg';
import Img3 from '@/app/assets/images/gallery/03.jpg';
import Img4 from '@/app/assets/images/gallery/04.jpg';
import Img5 from '@/app/assets/images/gallery/05.jpg';
import Img6 from '@/app/assets/images/gallery/06.jpg';
import Img7 from '@/app/assets/images/gallery/07.jpg';
import Img8 from '@/app/assets/images/gallery/08.jpg';
import Img9 from '@/app/assets/images/gallery/09.jpg';
import Img10 from '@/app/assets/images/gallery/10.jpg';
import Img11 from '@/app/assets/images/gallery/11.jpg';
import Img12 from '@/app/assets/images/gallery/12.jpg';
import Img13 from '@/app/assets/images/gallery/13.jpg';

const Gallery = () => {
  return (
    <section className={clsx(styles.root, styles.gallery)}>
      <div className="_container">
        <div className={clsx(styles.header, stylesHeaderBlock.headerBlock)}>
          <h2 className={stylesHeaderBlock.title}>Фотографии путешествий</h2>
          <div className={stylesHeaderBlock.text}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={clsx(styles.row, styles.oddRow)}>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img1.src}
              fill
              quality={100}
              alt="photo3"
            />
          </div>
          <div className={clsx(styles.item, styles._1024none)}>
            <Image
              className={styles.img}
              src={Img2.src}
              fill
              quality={100}
              alt="photo4"
            />
          </div>
          <div className={clsx(styles.item, styles._360none)}>
            <Image
              className={styles.img}
              src={Img3.src}
              fill
              quality={100}
              alt="photo5"
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img4.src}
              fill
              quality={100}
              alt="photo6"
            />
          </div>
        </div>
        <div className={clsx(styles.row, styles.evenRow)}>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img5.src}
              fill
              quality={100}
              alt="photo7"
            />
          </div>
          <div className={clsx(styles.item, styles._360none)}>
            <Image
              className={styles.img}
              src={Img6.src}
              fill
              quality={100}
              alt="photo8"
            />
          </div>
          <div className={clsx(styles.item, styles._1024none)}>
            <Image
              className={styles.img}
              src={Img7.src}
              fill
              quality={100}
              alt="photo9"
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img8.src}
              fill
              quality={100}
              alt="photo10"
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img9.src}
              fill
              quality={100}
              alt="photo11"
            />
          </div>
        </div>
        <div className={clsx(styles.row, styles.oddRow)}>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img10.src}
              fill
              quality={100}
              alt="photo12"
            />
          </div>
          <div className={styles.item}>
            <Image
              className={styles.img}
              src={Img11.src}
              fill
              quality={100}
              alt="photo13"
            />
          </div>
          <div className={clsx(styles.item, styles._360none)}>
            <Image
              className={styles.img}
              src={Img12.src}
              fill
              quality={100}
              alt="photo1"
            />
          </div>
          <div className={clsx(styles.item, styles._1024none)}>
            <Image
              className={styles.img}
              src={Img13.src}
              fill
              quality={100}
              alt="photo2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
