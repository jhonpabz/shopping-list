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

  const showAddListModal = useCallback(
    () => setIsAddItemModalShow(true),
    [setIsAddItemModalShow]
  );
  const hideAddListModal = useCallback(
    () => setIsAddItemModalShow(false),
    [setIsAddItemModalShow]
  );

  const setList = useCallback(
    (payload: any) => {
      dispatch({
        type: "shoppingList/setList",
        payload: [...list, payload],
      });
    },
    [dispatch, list]
  );

  // const setItem = useCallback((payload: any) => {}, []);

  return {
    state: {
      showAddItemModal,
      list,
    },

    showAddListModal,
    hideAddListModal,
    setList,
  };
}
