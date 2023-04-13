import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

/**
 * CurrencyState interface
 */
export interface CurrencyState {
  value: string;
  rates?: Rate;
}

/**
 * Rate interface
 */
export interface Rate {
  EUR: number;
  GBP: number;
  JPY: number;
}

/**
 * initial state
 */
const initialState: CurrencyState = {
  value: "EUR",
};

/**
 * reducer
 */
export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    /**
     * Changing currency
     * @param state
     * @param action
     */
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    /**
     * Updating rates data from API
     * @param state
     * @param action
     */
    updateRates: (state, action: PayloadAction<Rate>) => {
      state.rates = action.payload;
    },
  },
});

// actions
export const { change, updateRates } = currencySlice.actions;

export default currencySlice.reducer;
