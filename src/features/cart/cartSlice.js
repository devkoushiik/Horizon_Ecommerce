import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [], // this will come from async thunk
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSLice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      // destructure payload
      const { product } = action.payload;
      // find the item | exits or not
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      // if find
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      // calculation amount
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSLice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart.");
    },
    clearCart: (state, action) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSLice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSLice.caseReducers.calculateTotals(state);
      toast.success("Cart updated.");
    },
    calculateTotals: (state) => {
      // calculate tax
      state.tax = 0.1 * state.cartTotal;
      // final price with tax + shipping
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSLice.actions;
export default cartSLice.reducer;
