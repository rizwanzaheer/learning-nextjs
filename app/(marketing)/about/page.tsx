import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "this is about page from routes group",
};

export default async function Page() {
  // await getData();
  return (
    <div>
      <h1>Marketing about from intercept!</h1>
      <Link href="/">home</Link>
    </div>
  );
}
