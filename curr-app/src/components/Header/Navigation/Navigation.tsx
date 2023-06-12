import styles from '@/components/Header/Navigation/navigation.module.scss';
import Link from 'next/link';
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/converter">Converter</Link>
    </nav>
  );
};

export default Navigation;
