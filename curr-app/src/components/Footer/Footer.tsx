import styles from '@/components/Footer/footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.link} href="https://github.com/Cibulya">
        CibulyaDev
      </Link>
      <span>2023</span>
    </footer>
  );
};

export default Footer;
