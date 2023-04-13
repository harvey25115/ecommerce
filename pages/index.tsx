import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card/Card";
import styles from "@/styles/Home.module.scss";
import { GetServerSideProps } from "next";
import type { Product } from "@/util/types";

// 10 products
const LIMIT = 10;

/**
 * Get data during SSR
 * @param param0
 * @returns data
 */
export const getServerSideProps: GetServerSideProps<{
  data: Product[];
}> = async () => {
  const res = await fetch(
    `${process.env.PRODUCT_API_URL}/products?limit=${LIMIT}`
  );
  const data: Product[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

/**
 * Display home with list of products
 * @param param0
 * @returns ReactNode
 */
export default function Home({ data }: { data: Product[] }) {
  const productList = data.map((product) => {
    return (
      <li key={product.id}>
        <Link href={`/product/${product.id}`}>
          <Card product={product}></Card>
        </Link>
      </li>
    );
  });

  return (
    <>
      <Head>
        <title>E-commerce Homepage</title>
      </Head>
      <main className={styles.main}>
        <aside className={styles.sideBar}>
          <header>Category</header>
          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/icons8-polo-shirt-48.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Men clothing
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/icons8-womens-t-shirt-48.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Women clothing
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/icons8-diamond-48.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Jewelry
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image
                  src="/icons8-laptop-with-cursor-48.png"
                  alt=""
                  width={20}
                  height={20}
                />
                Electronics
              </Link>
            </li>
          </ul>
        </aside>
        <section>
          <header>Hot Deals</header>
          <ul className={styles.productContainer}>{productList}</ul>
        </section>
      </main>
    </>
  );
}
