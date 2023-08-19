import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visual metadata home page",
  description: "Visual metadata home page description.",
};

export default async function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>from back office!</h1>
      <Link href="/home">to home</Link>
      <br />
      <Link href="/shop/shoes/nike-air-max-101?token=thisIsSecretToken1234&id=234234">
        to Nike Shop
      </Link>
      {children}
    </div>
  );
}
