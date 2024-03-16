import { useCallback, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/redux/useReduxState";

import { ShoppingListAction } from "@/store/shoppingList.reducer";

export default function useShoppingList() {
  const { showAddItemModal, list } = useAppSelector((s) => s.shoppingList);
  const dispatch = useAppDispatch<ShoppingListAction>();

  const setIsAddItemModalShow = useCallback(
    (payload: boolean) => {
      dispatch({
        type: "shoppingList/setIsAddItemModalShow",
        payload,
      });
    },
    [dispatch]
  );

  // Open Add Item form modal
  const showAddListModal = useCallback(
    () => setIsAddItemModalShow(true),
    [setIsAddItemModalShow]
  );

  // Close Add Item form modal
  const hideAddListModal = useCallback(
    () => setIsAddItemModalShow(false),
    [setIsAddItemModalShow]
  );

  // Use for setting of new order of list
  const setList = useCallback(
    (payload: any) => {
      dispatch({
        type: "shoppingList/setList",
        payload: payload,
      });
    },
    [dispatch]
  );

  // Use for adding new item in a list
  const setListItem = useCallback(
    (payload: ItemType) => {
      dispatch({
        type: "shoppingList/setList",
        payload: [...list, payload],
      });
    },
    [dispatch, list]
  );

  return {
    state: {
      showAddItemModal,
      list,
    },

    showAddListModal,
    hideAddListModal,
    setList,
    setListItem,
  };
}
