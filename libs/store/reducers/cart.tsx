import {createSlice} from '@reduxjs/toolkit';

export type CartData = {
  id: string;
  itemName: string;
  itemImage: string;
  itemQty: number;
};

// Define a type for the Cart state
export interface CartState {
  items: CartData[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    addEditDeleteCartSuccess: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const {addEditDeleteCartSuccess} = cartSlice.actions;

export const addEditDeleteCart = (cart: CartData[]) => async dispatch => {
  try {
    dispatch(addEditDeleteCartSuccess(cart));
  } catch (e) {
    return console.error(e.message);
  }
};
