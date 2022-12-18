import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Tabs() {
  const { pathname } = useRouter();

  const isBooks = pathname === "/books";
  const isOther = pathname === "/other";

  return (
    <div className={styles.grid}>
      <a
        href="/books"
        className={`${styles.card} ${isBooks ? styles.active : ""}`}
      >
        <h2 className={inter.className}>Книги</h2>
      </a>
      <a
        href="/other"
        className={`${styles.card} ${isOther ? styles.active : ""}`}
      >
        <h2 className={inter.className}>Інше</h2>
      </a>
    </div>
  );
}
