import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analytics page",
  description: "Analytics parallel page route...",
};

export default function Page() {
  return (
    <div>
      <h1>Analytics dashboard page</h1>
      <Link href="/counter">to counter</Link>
      <br />
      <Link href="/shop/shoes/nike-air-max-101?token=thisIsSecretToken1234&id=234234">
        to Nike Shop
      </Link>
      <br />
      <Link href="/account">to Account</Link>
    </div>
  );
}
