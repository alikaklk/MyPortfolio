import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.Hero}>
        <div className={styles.SplitTextContainer}>
            <span className={styles.TextPartLeft}>
                <h1>Welcome to</h1>
            </span>
            <span className={styles.TextPartRight}>
                <h1>my portfolio!</h1>
            </span>
        </div>
        <p className={styles.HeroP}>I'm Ali Kaklik, a Full-Stack Software Engineer.</p>
    </section>
  );
}