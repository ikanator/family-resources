import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.description}>
      <p>Розширюйте горизонти разом своїх відносин разом із цими ресурсами</p>
      <div>
        <a
          href="https://germon.org/ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/germon_logo.png"
            alt="Germon Logo"
            className={styles.vercelLogo}
            width={50}
            height={50}
            priority
          />
        </a>
      </div>
    </div>
  );
}
