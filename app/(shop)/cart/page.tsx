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
      <h1>Cart!</h1>
      <Link href="/account">Account</Link>
      <br />
      <Link href="/">home</Link>
      <br />
      <Link href="/about">about</Link>
    </div>
  );
}
