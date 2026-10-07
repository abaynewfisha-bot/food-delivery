
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

const cartSlice = createSlice({
  name: "cart",

  initialState:[],

  reducers: {
    addItem: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload.id)
      if (existItem) {
        return state.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item))
      }
      else {
       state.push({ ...action.payload,qty: 1,
});
      }
    },
     incrementQty: (state, action) => {
      const item = state.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const item = state.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.qty -= 1;
      }
    },
       removeItem: (state, action) => {
      return state.filter(
        (item) => item.id!== action.payload
      );
    }
  }
})

export const {
  addItem,
  incrementQty,
  decrementQty, 
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer; 
