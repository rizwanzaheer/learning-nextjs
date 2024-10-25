import { Suspense, version } from "react";
import { Metadata } from "next";
import Link from "next/link";
import getConfig from "next/config";
import Loading from "./loading";

const { publicRuntimeConfig } = getConfig();

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page visually.",
};

export default async function Page() {
  // const res = await fetch(`${process.env.BASE_URL}/api/v1/dashboard`);
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  // const data = await res.json();
  // console.log("data is: ", data);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h1>
          Hello home page, serving from Next.js{" "}
          {publicRuntimeConfig?.dependencies.next} with React {version} home
          page!
        </h1>
        <Link href="/counter">to counter</Link>
      </Suspense>
    </div>
  );
}
