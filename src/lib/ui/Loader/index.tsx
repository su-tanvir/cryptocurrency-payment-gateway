import styles from "./styles.module.css";

export const Loader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
