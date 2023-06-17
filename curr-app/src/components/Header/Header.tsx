import styles from '@/components/Header/header.module.scss';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <Image src={Logo} alt="logo" className={styles.logo}></Image>
        <span className={styles.site__name}>Конвертер валют</span>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
