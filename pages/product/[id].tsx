import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import styles from "@/styles/Product.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/currencyStore";
import getFormattedPrice from "@/util/price-format";
import type { Product } from "@/util/types";

/**
 * Get data during SSR
 * @param param0
 * @returns data
 */
export const getServerSideProps: GetServerSideProps<{
  data: Product;
}> = async ({ params }) => {
  const res = await fetch(
    `${process.env.PRODUCT_API_URL}/products/${params?.id}`
  );

  let data: Product;

  try {
    data = await res.json();
  } catch (err) {
    throw Error("Server error");
  }

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        data,
      },
    };
  }
};

/**
 * Display product details
 * @param param0
 * @returns ReactNode
 */
export default function Product({ data }: { data: Product }) {
  const { value, rates } = useSelector((state: RootState) => state.currency);
  const { image, title, description, category, price, rating } = data;
  // calculate and format price
  const formattedPrice = getFormattedPrice(value, price, rates);

  return (
    <>
      <Head>
        <title>Product - {title}</title>
      </Head>

      <main className={styles.main}>
        <Link href="/" className={styles.back}>
          <Image src="/icons8-back-48.png" alt="" width={48} height={48} />
        </Link>
        <div className={styles.imageContainer}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.productInfo}>
          <div>
            <h1>{title}</h1>
          </div>
          <div>{category}</div>
          <div>{formattedPrice}</div>
          <div>
            <Image
              src="/icons8-star-filled-48.png"
              alt=""
              width={20}
              height={20}
            />
            {rating.rate}
            <span>({rating.count} reviews)</span>
          </div>
          <div>{description}</div>
        </div>
      </main>
    </>
  );
}
