import styles from '@/styles/notfound.module.scss';
import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Currency-app: 404</title>
      </Head>
      <div className={styles.content}>
        <h1>Такой страницы не существует.</h1>
        <Link className={styles.link} href="/">
          Вернуться на главную
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
