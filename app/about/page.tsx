import styles from "../../styles/home.module.css";
export default function AboutPage() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sec}>
        <h1> ABOUT US</h1>
        <p>
          Welcome to the official explorer for The New York Times Best Seller
          list Explorer.
        </p>
        <br />
        <p>We hope you enjoy your stay!</p>
      </section>
    </div>
  );
}
