import styles from "../styles/List.module.css";

export default function List({ children }) {
  return <ol className={styles.list}>{children}</ol>;
}
