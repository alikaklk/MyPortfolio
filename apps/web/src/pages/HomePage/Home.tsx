import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.topText}>Welcome to my portfolio!</h1>
        <p className={styles.bottomText}>I'm Ali Kaklik, a Full-Stack Software Engineer.</p>
      </div>
    </section>
  );
}