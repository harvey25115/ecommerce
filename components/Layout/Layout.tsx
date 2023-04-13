import Image from "next/image";
import Link from "next/link";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import styles from "./Layout.module.scss";

/**
 * Display the common layout
 * @param param0
 * @returns ReactNode
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">E-Shop</Link>
        </div>
        <div className={styles.searchBox}>
          <label htmlFor="search-input">Search</label>
          <input
            type="text"
            id="search-input"
            placeholder="shorts, shoes, clothes"
          />
        </div>
        <div className={styles.accountBox}>
          <Link href="/">
            <Image
              src="/icons8-shoppingcart-48.png"
              alt=""
              width={20}
              height={20}
            />
            <span>Cart</span>
          </Link>
          <Link href="/">
            <Image src="/icons8-user-48.png" alt="" width={20} height={20} />
            <span>Account</span>
          </Link>
          <div>
            <span>Currency</span>
            <CurrencySelect />
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
