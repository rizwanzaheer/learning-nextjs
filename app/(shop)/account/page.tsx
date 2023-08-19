import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account",
  description: "this is account page from routes group",
};

export default async function Page() {
  // await getData();
  return (
    <div>
      <h1>Account from intercept shop!</h1>
      <Link href="/cart">cart</Link>
      <br />
      <Link href="/">home</Link>
      <br />
      <Link href="/about">about</Link>
    </div>
  );
}
