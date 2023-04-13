import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/stores/currencyStore";
import { change, updateRates } from "@/stores/currencySlice";
import styles from "./CurrencySelect.module.scss";
import { useEffect } from "react";
import useCurrency from "@/hooks/useCurrency";

// use to render list of options
const CURRENCY_LIST = ["EUR", "GBP", "JPY"];

/**
 * Display the selection of currency
 * @returns ReactNode
 */
export default function CurrencySelect() {
  // retrieve data from store
  const { value, rates } = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();

  const { data } = useCurrency();
  // data from 2023/4/13
  // use this dummy data if the API key used has already reached its limits
  // const data = {
  //   success: true,
  //   timestamp: 1681345863,
  //   base: "USD",
  //   date: "2023-04-13",
  //   rates: {
  //     EUR: 0.909202,
  //     GBP: 0.80049,
  //     JPY: 132.995045,
  //   },
  // };

  useEffect(() => {
    if (!rates && data?.rates) {
      dispatch(updateRates(data.rates));
    }
  });

  // render list of option
  const options = CURRENCY_LIST.map((cur) => {
    return (
      <option value={cur} key={cur}>
        {cur}
      </option>
    );
  });

  return (
    <select
      className={styles.select}
      onChange={(e) => dispatch(change(e.target.value))}
      value={value}
      disabled={!rates}
    >
      {options}
    </select>
  );
}
