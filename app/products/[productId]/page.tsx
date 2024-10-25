// "use client";
import { Metadata } from "next";
import getConfig from "next/config";
import { version, use } from "react";

const { publicRuntimeConfig } = getConfig();

type Props = {
  params: Promise<{ productId: string }>;
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product - ${params.productId}`,
//     description: `Product - ${params.productId} detail descriptions is here...`,
//   };
// };

const fetchProductById = async (productId): Promise<any> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
    .then((response) => response.json())
    .then((json) => console.log("json is: ", json));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // const tt = use(params);
  const product = await fetchProductById((await params).productId);

  return {
    title: product?.title,
    description: product?.body,
  };
};

export default function ProductDetail() {
  return (
    <h1>
      this is the Product detail page serving from Next.js{" "}
      {publicRuntimeConfig?.dependencies.next} with React {version}
    </h1>
  );
}
