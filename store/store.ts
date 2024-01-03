import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Import your reducers here
import cartReducer from "@/slices/cartSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
