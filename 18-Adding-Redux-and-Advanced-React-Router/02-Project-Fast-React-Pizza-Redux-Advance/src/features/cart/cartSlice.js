import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Perbaikan
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // Perbaikan typo
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item && item.quantity >= 1) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }

      if (item && item.quantity < 1) {
        // state.cart = state.cart.filter(
        //   (item) => item.pizzaId !== action.payload,
        // );
        //= cara menggunakan kembali reducer di file yang sama
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity, // Perbaikan typo
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

// penggunana ini bisa menyebabkan performance isu di dalam web aplikasi yang besar kita bisa menggunakan 'reselect' library
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
