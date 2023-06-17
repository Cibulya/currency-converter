import styles from '@/components/Header/Navigation/navigation.module.scss';
import Link from 'next/link';
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/">
        Главная
      </Link>
      <Link className={styles.link} href="/converter">
        Конвертер
      </Link>
    </nav>
  );
};

export default Navigation;
