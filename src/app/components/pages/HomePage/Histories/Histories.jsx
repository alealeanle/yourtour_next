import clsx from 'clsx';
import Card from '@/app/components/commons/Card/Card';
import stylesHeaderBlock from '@/app/styles/headerBlock.module.scss';
import styles from '@/app/components/pages/HomePage/Histories/Histories.module.scss';

const Histories = ({ histories }) => {
  return (
    <section id="histories" className={clsx(styles.root, styles.histories)}>
      <div className="_container">
        <div className={stylesHeaderBlock.headerBlock}>
          <h2 className={stylesHeaderBlock.title}>Истории путешествий</h2>
          <div className={stylesHeaderBlock.text}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </div>
        </div>
        <div className={styles.bodyHistories}>
          {histories.map(history => (
            <Card {...history} style={styles} key={history.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Histories;
