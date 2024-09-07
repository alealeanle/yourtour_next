import { tours, histories } from '@/app/stub/stub';
import HomePage from '@/app/components/pages/HomePage/HomePage';

const fetchData = async data => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...data]);
    }, 1000);
  });
};

const getTours = () => fetchData(tours);
const getHistories = () => fetchData(histories);

export default async function Home() {
  try {
    const tours = await getTours();
    const histories = await getHistories();
    return <HomePage tours={tours} histories={histories} />;
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px',
          fontSize: '48px',
          color: 'red',
        }}
      >
        Error loading data
      </div>
    );
  }
}
