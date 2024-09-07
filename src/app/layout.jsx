import { Roboto } from 'next/font/google';
import Header from '@/app/components/commons/Header/Header';
import Footer from '@/app/components/commons/Footer/Footer';
import '@/app/styles/globals.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Your Tour Next.js',
  description:
    'YourTour предлагает идеальные путешествия, включая популярные и авторские туры, походы, сплавы и велопрогулки. Создайте свой тур и наслаждайтесь незабываемыми моментами.',
  keywords:
    'туризм, путешествия, авторские туры, походы, сплавы, велопрогулки, горные туры, обучение в сфере сервиса и туризма',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
