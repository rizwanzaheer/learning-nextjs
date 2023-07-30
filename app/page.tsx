import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visual metadata home page",
  description: "Visual metadata home page description.",
};

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js 13 upgrade!</h1>
      <Link href="/counter">to counter</Link>
      <br />
      <Link href="/shop/shoes/nike-air-max-101">to Nike Shop</Link>
    </div>
  );
}
