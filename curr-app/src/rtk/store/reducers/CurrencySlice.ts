import { SingleCurrency } from '@/types/currency-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CurrencySliceState {
  defaultCurr: string;
  defaultCurrId: number;
  currArray: SingleCurrency[];
  result: number;
}

const initialState: CurrencySliceState = {
  defaultCurr: 'BYN',
  currArray: [],
  defaultCurrId: 0,
  result: 1,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setDefaultCurrency(state, action: PayloadAction<string>) {
      state.defaultCurr = action.payload;
    },
    setDefaultCurrId(state, action: PayloadAction<number>) {
      state.defaultCurrId = action.payload;
    },
    setCurrenciesList(state, action: PayloadAction<SingleCurrency[]>) {
      state.currArray = action.payload;
    },
    setResult(state, action: PayloadAction<number>) {
      state.result = action.payload;
    },
  },
});

export default currencySlice.reducer;
