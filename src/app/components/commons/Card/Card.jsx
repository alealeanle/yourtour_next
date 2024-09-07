import Image from 'next/image';
import clsx from 'clsx';
import styles from '@/app/components/commons/Card/Card.module.scss';

const Card = ({
  title = 'Путешествие в горы',
  text,
  cardList,
  price,
  socials,
  img,
  style,
  alt,
}) => {
  return (
    <article className={clsx(style.root, style.itemCard)}>
      <div className={clsx(styles.card, style.cardBody)}>
        <div className={styles.main}>
          <h3 className={styles.title}>{title}</h3>
          {price && <p className={styles.price}>{price}</p>}
          {text && (
            <div className={styles.text}>
              {text}
              {cardList && (
                <ul className={styles.list}>
                  {cardList.map((item, i) => (
                    <li key={i} className={styles.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <div className={`${styles.details} _icon-arrow`}>Подробнее</div>
      </div>
      {socials && (
        <div className={styles.social}>
          {Object.entries(socials).map(([key, url]) => (
            <a key={key} href={url} target="_blank" className={styles.site}>
              {key}
            </a>
          ))}
        </div>
      )}
      <Image
        className={styles.image}
        src={img.src}
        fill
        quality={100}
        alt={alt}
      />
    </article>
  );
};

export default Card;
