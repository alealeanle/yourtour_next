'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import Card from '@/app/components/commons/Card/Card';
import stylesHeaderBlock from '@/app/styles/headerBlock.module.scss';
import styles from '@/app/components/pages/HomePage/Choose/Choose.module.scss';

const Choose = ({ tours }) => {
  const [activeFilter, setActiveFilter] = useState();

  const filters = [
    'Популярные',
    'Авторские',
    'Походы',
    'Сплавы',
    'Велопрогулки',
  ];
  const handleFilterClick = filter => setActiveFilter(filter);

  return (
    <section id="choose" className={clsx(styles.root, styles.choose)}>
      <div className="_container">
        <div className={clsx(styles.header, stylesHeaderBlock.headerBlock)}>
          <h2 className={stylesHeaderBlock.title}>Выбери свой тур</h2>
          <ul className={styles.menuBlock}>
            {filters.map(filter => (
              <li
                key={filter}
                className={clsx(styles.menuBlockItem, {
                  [styles._active]: activeFilter === filter,
                })}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.card}>
          {tours.map(tour => (
            <Card {...tour} style={styles} key={tour.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
