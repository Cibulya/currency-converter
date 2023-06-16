import { SingleCurrency } from '@/types/currency-types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CurrencySliceState {
  defaultCurr: string;
  defaultCurrId: number;
  currArray: SingleCurrency[];
}

const initialState: CurrencySliceState = {
  defaultCurr: 'BYN',
  currArray: [],
  defaultCurrId: 0,
};

interface IdAndName {
  name: string;
  id: number;
}

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
    setName(state, action: PayloadAction<IdAndName>) {
      state.currArray.map((el) => {
        if (el.Cur_ID === action.payload.id) {
          el.Cur_Name = action.payload.name;
        }
      });
    },
  },
});

export default currencySlice.reducer;
