import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page visually.",
};

export default function Page() {
  return (
    <div>
      <h1>Hello home page, serving from Next.js 13!</h1>
      <Link href="/counter">to counter</Link>
    </div>
  );
}
