import { Metadata } from "next";
import Link from "next/link";
import { getData } from "../lib/data";

import ErrorBoundary from "./error-boundary";

export const metadata: Metadata = {
  title: "Visual metadata home page",
  description: "Visual metadata home page description.",
};

export default async function Page() {
  // await getData();
  return (
    <ErrorBoundary>
      <div>
        <h1>Hello, Next.js 13 upgrade!</h1>
        <Link href="/counter">to counter</Link>
        <br />
        <Link href="/shop/shoes/nike-air-max-101?token=thisIsSecretToken1234&id=234234">
          to Nike Shop
        </Link>
        <br />
        <Link href="/error/should/show">to Error</Link>
        <br />
        <Link href="/error">to Error</Link>
        <div
          style={{ width: "100%", height: "200vh", backgroundColor: "gray" }}
        >
          <h1>this is style div</h1>
        </div>

        <div>
          <p id="setting">settings</p>
        </div>
      </div>
    </ErrorBoundary>
  );
}
