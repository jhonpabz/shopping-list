import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialShoppingListState as initialState } from "@/lib/redux/initialState";

const shoppingListReducer = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    setIsAddItemModalShow(state, action: PayloadAction<boolean>) {
      state.showAddItemModal = action.payload;
    },

    setList(state, action: PayloadAction<any>) {
      state.list = action.payload;
    },
  },
});

const { setIsAddItemModalShow, setList } = shoppingListReducer.actions;

export type ShoppingListAction =
  | ReturnType<typeof setIsAddItemModalShow>
  | ReturnType<typeof setList>;

export default shoppingListReducer.reducer;
