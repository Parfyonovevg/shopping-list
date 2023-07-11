import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';

import { itemModel } from '../models/models';

interface ShoppingListState {
  items: itemModel[];
}

const initialState: ShoppingListState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<itemModel>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.isActive = !item.isActive;
      }
    },
    increaseAmount: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.amount++;
      }
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.amount > 1) {
        item.amount--;
      }
    },
  },
});

export const store = configureStore({
  reducer: shoppingListSlice.reducer,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const {
  addItem,
  removeItem,
  toggleItem,
  increaseAmount,
  decreaseAmount,
} = shoppingListSlice.actions;
