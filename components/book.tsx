"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/detail.module.css";
export default function Book({ li_key, title, author, url, book_img }) {
  const router = useRouter();
  const onclick = () => {
    router.push(`${url}`);
  };
  return (
    <div key={li_key}>
      <img src={book_img} alt={title} onClick={onclick}></img>
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.txt}>{author}</p>
      <Link href={`${url}`}>
        <p className={styles.buy}>Buy now &rarr;</p>
      </Link>
    </div>
  );
}
