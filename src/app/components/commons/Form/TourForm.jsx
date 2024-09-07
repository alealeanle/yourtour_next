'use client';

import { useState } from 'react';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';
import Button from '@/app/components/commons/Button/Button';
import styles from '@/app/components/commons/Form/TourForm.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const TourForm = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = event => {
    setSelectedValue(event.target.value);
  };
  const inputStyle = styles.input + ' ' + roboto.className;

  return (
    <div className={clsx(styles.root, styles.tourForm)}>
      <form action="#" id="form-create" className={styles.body}>
        <div className={styles.row}>
          <div className={styles.item}>
            <label htmlFor="form-create-label" className={styles.label}>
              Имя
            </label>
            <input
              type="text"
              id="form-create-label"
              name="name"
              className={inputStyle}
              placeholder="Введите Ваше имя"
            />
          </div>
          <div className={styles.item}>
            <label
              htmlFor="form-create-dest"
              className={`${styles.label} _icon-dropdown`}
            >
              Направление
            </label>
            <select
              id="form-create-dest"
              name="dest"
              className={inputStyle}
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="" disabled></option>
              <option value="Путешествие в горы">Путешествие в горы</option>
              <option value="Автостопом в Стамбул">Автостопом в Стамбул</option>
            </select>
            {!selectedValue && (
              <div className={styles.destPlaceholder}>Куда хотите ехать</div>
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.item}>
            <label htmlFor="form-create-mail" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="form-create-mail"
              name="email"
              className={inputStyle}
              placeholder="example@mail.com"
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="form-create-tel" className={styles.label}>
              Телефон
            </label>
            <input
              type="tel"
              maxLength="11"
              pattern="[0-9]{10,11}"
              id="form-create-tel"
              name="tel"
              className={inputStyle}
              placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.item}>
            <label htmlFor="form-create-date-from" className={styles.label}>
              Дата от
            </label>
            <input
              type="date"
              min="2024-03-03"
              max="2025-03-03"
              id="form-create-date-from"
              name="date-from"
              className={inputStyle}
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="form-create-date-to" className={styles.label}>
              Дата до
            </label>
            <input
              type="date"
              min="2024-03-03"
              max="2025-03-03"
              id="form-create-date-to"
              name="date-to"
              className={inputStyle}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label htmlFor="form-create-coment" className={styles.label}>
            Комментарий
          </label>
          <textarea
            id="form-create-coment"
            name="coment"
            className={inputStyle}
          ></textarea>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Вам есть 18 лет?</label>
          <div className={styles.adulty}>
            <input
              type="radio"
              id="adulty-true"
              name="adulty"
              value="adulty-true"
              className={styles.adultyInput}
            />
            <label
              htmlFor="adulty-true"
              className={clsx(styles.label, styles.adultyLabel)}
            >
              Да
            </label>
            <input
              type="radio"
              id="adulty-false"
              name="adulty"
              value="adulty-false"
              className={styles.adultyInput}
            />
            <label
              htmlFor="adulty-false"
              className={clsx(styles.label, styles.adultyLabel)}
            >
              Нет
            </label>
          </div>
        </div>
        <div className={clsx(styles.item, styles.agreement)}>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            className={styles.agreementInput}
          ></input>
          <label htmlFor="agreement" className={styles.agreementMark}></label>
          <label htmlFor="agreement" className={styles.agreementLabel}>
            Нажимая кнопку, я принимаю условия&nbsp;
            <a href="#" className={styles.agreementLink}>
              Лицензионного договора
            </a>
          </label>
        </div>
        <div className={styles.buttons}>
          <Button text={'Найти тур'} type={'submit'} style={styles.btn} />
          <Button
            text={'Сбросить'}
            type={'reset'}
            style={clsx(styles.btn, styles.btn_clear)}
          />
        </div>
      </form>
    </div>
  );
};

export default TourForm;
