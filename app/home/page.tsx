import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page visually.",
};

export default async function Page() {
  const { data } = await fetch("http://localhost:3000/pages/api/hello");
  console.log("data is: ", data);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h1>Hello home page, serving from Next.js 13!</h1>
        <Link href="/counter">to counter</Link>
      </Suspense>
    </div>
  );
}
