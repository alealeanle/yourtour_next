import MainBlock from '@/app/components/pages/HomePage/MainBlock/MainBlock';
import Choose from '@/app/components/pages/HomePage/Choose/Choose';
import Create from '@/app/components/pages/HomePage/Create/Create';
import Reviews from '@/app/components/pages/HomePage/Reviews/Reviews';
import Histories from '@/app/components/pages/HomePage/Histories/Histories';
import Bottom from '@/app/components/pages/HomePage/Bottom/Bottom';
import Gallery from '@/app/components/pages/HomePage/Gallery/Gallery';
import styles from '@/app/components/pages/HomePage/HomePage.module.scss';

const HomePage = ({ tours, histories }) => {
  return (
    <main className={styles.root}>
      <MainBlock />
      <Choose tours={tours} />
      <Create />
      <Reviews />
      <Gallery />
      <Histories histories={histories} />
      <Bottom />
    </main>
  );
};

export default HomePage;
