import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error",
  description: "Error page description.",
};

export default function Page() {
  return (
    <div>
      <h1>this will create error page!</h1>
      <Link href="/home">to Home </Link>
      <br />
      <Link href="/#setting">to Home settings</Link>
    </div>
  );
}
