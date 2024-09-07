import Image from 'next/image';
import clsx from 'clsx';
import stylesHeaderBlock from '@/app/styles/headerBlock.module.scss';
import styles from '@/app/components/pages/HomePage/Reviews/Reviews.module.scss';
import Img1 from '@/app/assets/images/reviews/review_1.jpg';
import Img2 from '@/app/assets/images/reviews/review_2.jpg';

const Reviews = () => {
  return (
    <section id="reviews" className={clsx(styles.root, styles.reviews)}>
      <div className="_container">
        <div className={clsx(stylesHeaderBlock.headerBlock, styles.header)}>
          <h2 className={stylesHeaderBlock.title}>
            Отзывы наших
            <br />
            путешественников
          </h2>
          <div className={stylesHeaderBlock.text}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.review}>
            <div className={styles.text}>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений. Идейные соображения высшего
              порядка, а также начало повседневной работы по формированию
              позиции позволяет оценить значение модели развития.
            </div>
            <div className={styles.bottom}>
              <div className={styles.description}>
                <div className={styles.name}>Мария</div>
                <div className={styles.tour}>Тур: Вдали от дома</div>
              </div>
              <div className={styles.photo}>
                <Image src={Img1.src} fill quality={100} alt="User Photo" />
              </div>
            </div>
          </div>
          <div className={styles.review}>
            <div className={styles.text}>
              Равным образом постоянный количественный рост и сфера нашей
              активности играет важную роль в формировании системы обучения
              кадров, соответствует насущным потребностям.
              <br />
              <br />
              Значимость этих проблем настолько очевидна, что дальнейшее
              развитие различных форм деятельности обеспечивает широкому кругу
              (специалистов) участие в формировании новых предложений.
              Повседневная практика показывает, что реализация намеченных
              плановых заданий в значительной степени обуславливает создание
              модели развития.
            </div>
            <div className={styles.bottom}>
              <div className={styles.description}>
                <div className={styles.name}>Павел</div>
                <div className={styles.tour}>Тур: Путешествие в горы </div>
              </div>
              <div className={styles.photo}>
                <Image src={Img2.src} fill quality={100} alt="User Photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
