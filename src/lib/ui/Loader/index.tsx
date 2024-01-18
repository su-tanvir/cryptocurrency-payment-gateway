import styles from "./styles.module.css";

type LoaderType = "dots" | "spinner";

interface LoaderProps {
  type: LoaderType;
  className?: string;
}

export const Loader = ({ type, className }: LoaderProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <div className={styles[`loader-${type}`]} />
    </div>
  );
};

export default Loader;
