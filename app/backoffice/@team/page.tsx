import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team page",
  description: "Team parallel page route...",
};

export default async function Page() {
  return (
    <div>
      <h1>Team page from parallel routes</h1>
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
