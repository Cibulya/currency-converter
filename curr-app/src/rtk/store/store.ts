import currencyAPI from '@/currency-api/currency-service';
import currencyReducer from '@/rtk/store/reducers/CurrencySlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  currencyReducer,
  [currencyAPI.reducerPath]: currencyAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (middleware) => middleware().concat(currencyAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
