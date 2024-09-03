import TourForm from '../Form/TourForm';
import stylesHeaderBlock from '../../styles/headerBlock.module.scss';

const Create = () => {
	return (
		<section id="create" className="page__create create">
			<div className="create__container _container">
				<div className={stylesHeaderBlock.headerBlock}>
					<h2 className={stylesHeaderBlock.headerBlock__title}>Собери свой тур</h2>
					<div className={stylesHeaderBlock.headerBlock__text}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</div>
				</div>
				<TourForm />
			</div>
		</section>
	)
}

export default Create;