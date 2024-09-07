'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import styles from '@/app/components/commons/Header/Header.module.scss';
import Logo from '@/app/assets/images/logo/logo.svg';
import LogoDark from '@/app/assets/images/logo/logoDark.svg';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  });

  return (
    <header
      className={clsx(styles.root, styles.header, {
        [styles._fixed]: scrollY > 450,
      })}
    >
      <div className={clsx(styles.container, '_container')}>
        <a href="#main-block">
          {scrollY < 450 ? (
            <Image
              className={styles.logoImg}
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
            />
          ) : (
            <Image
              className={styles.logoImg}
              src={LogoDark.src}
              width={LogoDark.width}
              height={LogoDark.height}
              alt="logo"
            />
          )}
        </a>
        <nav className={`${styles.menu} menu`}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#choose" className={styles.link}>
                Туры
              </a>
            </li>
            <li className={styles.item}>
              <a href="#create" className={styles.link}>
                Создать тур
              </a>
            </li>
            <li className={styles.item}>
              <a href="#reviews" className={styles.link}>
                Отзывы
              </a>
            </li>
            <li className={styles.item}>
              <a href="#histories" className={styles.link}>
                Истории
              </a>
            </li>
          </ul>
        </nav>
        <a href="tel:+79999999999" className={styles.tel}>
          +7 999 999 99 99
        </a>
      </div>
    </header>
  );
};

export default Header;
