import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number; // Add quantity property
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id; // Access the id property of the payload
      const productToAdd = state.items.find(
        (product) => product.id === productId
      );
      if (productToAdd) {
        productToAdd.quantity += 1; // Increase quantity if the product is already in the cart
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add the product with quantity 1
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    resetCart: (state) => {
      state.items = []; // Reset the items array to empty
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
