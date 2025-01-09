
import styles from './styles.module.css';

const MyComponent = () => {
  return (
    <div className={`${styles.container} ${styles.text}`}>
      <p className={`${styles.bold} ${styles.large}`}>This is a styled component!</p>
    </div>
  );
};

export default MyComponent;
