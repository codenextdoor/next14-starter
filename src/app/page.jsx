import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          harum autem, saepe voluptas esse ex natus consequuntur corrupti soluta
          qui corporis. Exercitationem enim blanditiis voluptas quibusdam?
          Laborum ab magni eius?
        </p>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default Home;
