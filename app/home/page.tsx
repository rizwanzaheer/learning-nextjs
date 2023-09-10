import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page visually.",
};

export default async function Page() {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/dashboard`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log("data is: ", data);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h1>Hello home page, serving from Next.js 13 home page!</h1>
        <Link href="/counter">to counter</Link>
      </Suspense>
    </div>
  );
}
