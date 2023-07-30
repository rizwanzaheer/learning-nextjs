import Link from "next/link";

export default function Page({
  params,
}: {
  params: {
    tag: string;
    item: string;
  };
}) {
  console.log("p is: ", params);
  return (
    <div>
      <div>from shop/tag/item page layout!</div>
      <div>tag: {params?.tag}</div>
      <div>tag: {params?.item}</div>
      <Link href="/">to home</Link>
    </div>
  );
}
