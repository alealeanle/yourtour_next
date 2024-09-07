import { v4 as uuidv4 } from 'uuid';
import tourImg1 from '@/app/assets/images/choose/01.jpg';
import tourImg2 from '@/app/assets/images/choose/02.jpg';
import tourImg3 from '@/app/assets/images/choose/03.jpg';
import tourImg4 from '@/app/assets/images/choose/04.jpg';
import tourImg5 from '@/app/assets/images/choose/05.jpg';
import tourImg6 from '@/app/assets/images/choose/06.jpg';
import historyImg1 from '@/app/assets/images/histories/01.jpg';
import historyImg2 from '@/app/assets/images/histories/02.jpg';
import historyImg3 from '@/app/assets/images/histories/03.jpg';

export const tours = [
  {
    id: uuidv4(),
    price: 'от 80 000 руб',
    img: tourImg1,
    alt: 'Mountains jorney',
  },
  {
    id: uuidv4(),
    price: 'от 80 000 руб',
    img: tourImg2,
    alt: 'Mountains jorney',
  },
  {
    id: uuidv4(),
    price: 'от 80 000 руб',
    img: tourImg3,
    alt: 'Mountains jorney',
  },
  {
    id: uuidv4(),
    price: 'от 80 000 руб',
    img: tourImg4,
    alt: 'Mountains jorney',
  },
  {
    id: uuidv4(),
    price: 'от 80 000 руб',
    img: tourImg5,
    alt: 'Mountains jorney',
  },
  {
    id: uuidv4(),
    price: 'от 80 000 руб',
    img: tourImg6,
    alt: 'Mountains jorney',
  },
];

const cardList = ['вкусная еда', 'дешевый транспорт', 'красивый город.'];

const socials1 = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  youtube: 'https://www.youtube.com/',
};

const socials2 = {
  instagram: 'https://www.instagram.com/',
  ВКонтакте: 'https://www.vk.com/',
};

const socials3 = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  ВКонтакте: 'https://www.vk.com/',
};

export const histories = [
  {
    id: uuidv4(),
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    cardList: cardList,
    socials: socials1,
    img: historyImg1,
    alt: 'History photo',
  },
  {
    id: uuidv4(),
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    socials: socials2,
    img: historyImg2,
    alt: 'History photo',
  },
  {
    id: uuidv4(),
    title: 'Автостопом в Стамбул',
    text: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:',
    socials: socials3,
    img: historyImg3,
    alt: 'History photo',
  },
];
