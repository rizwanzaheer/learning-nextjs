import Link from "next/link";

export default function Page({
  params,
  searchParams,
}: {
  params: {
    tag: string;
    item: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("p is: ", params);
  console.log("searchParams is: ", searchParams);
  return (
    <div>
      <div>from shop/tag/item page layout!</div>
      <div>tag: {params?.tag}</div>
      <div>item: {params?.item}</div>
      <div>
        searchParams with Object.entries :{" "}
        {searchParams && Object.entries(searchParams)}
      </div>
      <div>
        searchParams with Object.keys/map :{" "}
        {searchParams &&
          Object.keys(searchParams).map((key) => [key, searchParams[key]])}
      </div>
      <Link href="/">to home</Link>
    </div>
  );
}
