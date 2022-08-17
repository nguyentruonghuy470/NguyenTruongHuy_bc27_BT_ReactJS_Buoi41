import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./BT_MovieBooking/reducers/movieReducer";

// Tạo ra redux store để lưu trữ state
const store = configureStore({
  reducer: {
    cart: movieReducer,
  },
});
export default store;
