import styles from "../../styles/home.module.css";
import Books from "../../components/books";
const API_URL = `https://books-api.nomadcoders.workers.dev/lists`;

async function getBookLists() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Hello() {
  const booklists = await getBookLists();
  const books = booklists.results;
  const bookListItems = books.map((book, index) => (
    <Books
      key={index}
      li_key={index}
      display_name={book.display_name}
      encoded={book.list_name_encoded}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <section className={styles.sec}>
        <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
        <ul>{bookListItems}</ul>
      </section>
    </div>
  );
}
