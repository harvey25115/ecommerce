import Image from "next/image";
import styles from "./Card.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/currencyStore";
import getFormattedPrice from "@/util/price-format";
import type { Product } from "@/util/types";

/**
 * Display the product thumbnail
 * @param param0
 * @returns ReactNode
 */
export default function Card({ product }: { product: Product }) {
  // retrieve data from store
  const { value, rates } = useSelector((state: RootState) => state.currency);

  // calculate and format price
  const formattedPrice = getFormattedPrice(value, product.price, rates);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={product.image} alt={product.title} fill />
      </div>
      <div className={styles.productInfo}>
        <div>{product.title}</div>
        <div>
          <Image
            src="/icons8-star-filled-48.png"
            alt=""
            width={20}
            height={20}
          />
          {product.rating.rate}
        </div>
        <div>{formattedPrice}</div>
      </div>
    </div>
  );
}
