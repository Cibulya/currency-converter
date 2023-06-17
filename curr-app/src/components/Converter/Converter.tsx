import styles from '@/components/Converter/converter.module.scss';
import ConverterForm from '../ConverterForm/ConverterForm';

const CurrConverter = () => {
  return (
    <div className={styles.converter}>
      <div>Ковертер Валют</div>
      <ConverterForm />
    </div>
  );
};

export default CurrConverter;
