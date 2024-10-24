import { Metadata } from "next";

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

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  console.log("props is: ", /* @next-codemod-error 'props' is passed as an argument. Any asynchronous properties of 'props' must be awaited when accessed. */
  props);
  const product = await fetchProductById(params.productId);
  // console.log("product is: ", product);
  return {
    title: product?.title,
    description: product?.body,
  };
};

export default function ProductDetail() {
  return <h1>this is the Product detail page serving from Next.js 13!</h1>;
}
