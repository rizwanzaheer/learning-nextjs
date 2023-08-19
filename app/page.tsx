import { Metadata } from "next";

import Link from "next/link";
import { getData } from "../lib/data";

export const metadata: Metadata = {
  title: "Visual metadata home page",
  description: "Visual metadata home page description.",
};

export default async function Page({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  // const res = await fetch("http://localhost:3000/api/"); // this will create error boundary stuff
  const res = await fetch("http://localhost:3000/api/v1");
  const data = await res.json();
  console.log("data is: ", data);
  return (
    <div>
      <h1>Hello, Next.js 13 upgrade!</h1>
      <Link href="/counter">to counter</Link>
      <br />
      <Link href="/shop/shoes/nike-air-max-101?token=thisIsSecretToken1234&id=234234">
        to Nike Shop
      </Link>
      <br />
      <Link href="/account">to Account</Link>
      <br />
      <Link href="/error/should/show">to Error</Link>
      <br />
      <Link href="/error">to Error</Link>
      <div style={{ width: "100%", height: "200vh", backgroundColor: "gray" }}>
        <h1>this is style div</h1>
      </div>

      <div>
        <p id="setting">settings</p>
      </div>
      {analytics}
      {team}
    </div>
  );
}
