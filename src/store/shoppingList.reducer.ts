import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialDashboardState as initialState } from "@/lib/redux/initialState";

const shoppingListReducer = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    setIsAddItemModalShow(state, action: PayloadAction<boolean>) {
      state.showAddItemModal = action.payload;
    },
  },
});

const { setIsAddItemModalShow } = shoppingListReducer.actions;

export type ShoppingListAction = ReturnType<typeof setIsAddItemModalShow>;

export default shoppingListReducer.reducer;
