import Link from "next/link";

export default async function Books({ li_key, display_name, encoded }) {
  return (
    <Link href={`/list/${display_name}/${encoded}`}>
      <li key={li_key}>{display_name} &rarr;</li>
    </Link>
  );
}
