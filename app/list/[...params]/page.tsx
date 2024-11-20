import Book from "../../../components/book";
import styles from "../../../styles/detail.module.css";

async function getBooks(title) {
  //   console.log(title);
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${title}`
  );

  const json = await response.json();
  return json;
}
export async function generateMetadata({ params }) {
  let {
    params: [title, encoded],
  } = await params;
  return {
    title: encoded,
  };
}
export default async function ListPage({ params }) {
  // 제목 가져와서 디코딩 후 fetch할 url에 넣기
  let {
    params: [title, encoded],
  } = await params;
  if (title) {
    title = decodeURI(title);
    title = title.includes("%26") ? title.replaceAll("%26", "and") : title;
    title = title.includes("%20") ? title.replaceAll("%20", " ") : title;
  }
  const booklists = await getBooks(encoded);

  // 가져온 json정보에서 책리스트 찾기
  const books = booklists.results.books;
  // map으로 책 정보 하나씩 보여주기
  const detailBookListItems = books.map((book, index) => (
    <Book
      key={index}
      li_key={index}
      title={book.title}
      author={book.author}
      book_img={book.book_image}
      url={book.amazon_product_url}
    />
  ));
  return (
    <section className={styles.sec}>
      <h1>{title}</h1>
      <article>{detailBookListItems}</article>
    </section>
  );
}
