import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
