import { configureStore } from '@reduxjs/toolkit';

import {
   TypedUseSelectorHook,
   useDispatch as dispatchHook,
   useSelector as selectorHook,
} from 'react-redux';

import quizeReducer from './slices/quize';

const store = configureStore({
   reducer: {
      quizes: quizeReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
