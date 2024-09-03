"use client"

import { useState } from 'react';
import { Roboto } from "next/font/google";
import Button from '../Button/Button';
import styles from '../../styles/tourForm.module.scss';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700']
});

const TourForm = () => {
	const [selectedValue, setSelectedValue] = useState('');

	const handleSelectChange = (event) => {
			setSelectedValue(event.target.value);
	};
	const inputStyle = styles.formCreate__input + " " + roboto.className;

	return (
		<div className={styles.formCreate}>
		<form action="#" id="form-create" className={styles.formCreate__body}>
			<div className={styles.formCreate__row}>
				<div className={styles.formCreate__item}>
					<label htmlFor="form-create-label" className={styles.formCreate__label}>Имя</label>
					<input type="text" id="form-create-label" name="name" className={inputStyle} placeholder="Введите Ваше имя" />
				</div>
				<div className={styles.formCreate__item}>
					<label htmlFor="form-create-dest" className={`${styles.formCreate__label} _icon-dropdown`}>Направление</label>
					<select id="form-create-dest" name="dest" className={inputStyle} value={selectedValue} onChange={handleSelectChange} >
						<option value="" disabled></option>
						<option value="Путешествие в горы">Путешествие в горы</option>
						<option value="Автостопом в Стамбул">Автостопом в Стамбул</option>
					</select>
					{!selectedValue && (
						<div className={styles.formCreate__destPlaceholder}>Куда хотите ехать</div>
					)}
				</div>
			</div>
			<div className={styles.formCreate__row}>
				<div className={styles.formCreate__item}>
					<label htmlFor="form-create-mail" className={styles.formCreate__label}>Email</label>
					<input type="email" id="form-create-mail" name="email" className={inputStyle} placeholder="example@mail.com" />
				</div>
				<div className={styles.formCreate__item}>
					<label htmlFor="form-create-tel" className={styles.formCreate__label}>Телефон</label>
					<input type="tel" maxLength="11" pattern="[0-9]{10,11}" id="form-create-tel" name="tel" className={inputStyle} placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" />
				</div>
			</div>
			<div className={styles.formCreate__row}>
				<div className={styles.formCreate__item}>
					<label htmlFor="form-create-date-from" className={styles.formCreate__label}>Дата от</label>
					<input type="date" min="2024-03-03" max="2025-03-03" id="form-create-date-from" name="date-from" className={inputStyle} />
				</div>
				<div className={styles.formCreate__item}>
					<label htmlFor="form-create-date-to" className={styles.formCreate__label}>Дата до</label>
					<input type="date" min="2024-03-03" max="2025-03-03" id="form-create-date-to" name="date-to" className={inputStyle} />
				</div>
			</div>
			<div className={styles.formCreate__item}>
				<label htmlFor="form-create-coment" className={styles.formCreate__label}>Комментарий</label>
				<textarea id="form-create-coment" name="coment" className={inputStyle}></textarea>
			</div>
			<div className={styles.formCreate__item}>
				<label className={styles.formCreate__label}>Вам есть 18 лет?</label>
				<div className={`${styles.formCreate__adulty} ${styles.adulty}`}>
					<input type="radio" id="adulty-true" name="adulty" value="adulty-true" className={styles.adulty__input} />
					<label htmlFor="adulty-true" className={`${styles.formCreate__label} ${styles.adulty__label}`}>Да</label>
					<input type="radio" id="adulty-false" name="adulty" value="adulty-false" className={styles.adulty__input} />
					<label htmlFor="adulty-false" className={`${styles.formCreate__label} ${styles.adulty__label}`}>Нет</label>
				</div>
			</div>
			<div className={`${styles.formCreate__item} ${styles.agreement}`}>
				<input type="checkbox" id="agreement" name="agreement" className={styles.agreement__input}></input>
				<label htmlFor="agreement" className={styles.agreement__mark}></label>
				<label htmlFor="agreement" className={styles.agreement__label}>Нажимая кнопку, я принимаю условия&nbsp;<a href="#" className={styles.agreement__link}>Лицензионного договора</a></label>
			</div>
			<div className={styles.formCreate__buttons}>
				<Button
					text={"Найти тур"}
					type={"submit"}
				/>
				<Button
					text={"Сбросить"}
					type={"reset"}
					style={styles.formCreate__btn_clear}
				/>
			</div>
		</form>
	</div>
	)
}

export default TourForm;