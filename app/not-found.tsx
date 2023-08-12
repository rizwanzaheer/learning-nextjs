import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Global Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">to home</Link>
      </p>
    </div>
  );
}
