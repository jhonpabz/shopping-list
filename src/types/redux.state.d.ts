declare namespace ReduxSpace {
  type ReduxAction<Actions> = {
    type: keyof Actions;
    payload: any;
  };

  namespace ShoppingList {
    type State = {
      showAddItemModal: boolean;
    };
  }
}
