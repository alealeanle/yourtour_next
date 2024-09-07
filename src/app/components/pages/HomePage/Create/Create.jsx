import clsx from 'clsx';
import TourForm from '@/app/components/commons/Form/TourForm';
import stylesHeaderBlock from '@/app/styles/headerBlock.module.scss';

const Create = () => {
  return (
    <section id="create" className={clsx('root', 'create')}>
      <div className="_container">
        <div className={stylesHeaderBlock.headerBlock}>
          <h2 className={stylesHeaderBlock.title}>Собери свой тур</h2>
          <div className={stylesHeaderBlock.text}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </div>
        </div>
        <TourForm />
      </div>
    </section>
  );
};

export default Create;
