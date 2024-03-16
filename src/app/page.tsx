"use client";

import { arrayMoveImmutable } from "array-move";
import AddItemModal from "@/components/AddItemModal";
import ListContainer from "@/components/ListContainer";
import ShoppingList from "@/components/ShoppingList";

import BaseButton from "@/components/base/BaseButton";
import useShoppingList from "@/hooks/redux/useShoppingList";

export default function Home() {
  const {
    state: { list },
    setList,
    showAddListModal,
  } = useShoppingList();

  const handleAddItem = () => {
    showAddListModal();
  };

  //@ts-ignore
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setList(arrayMoveImmutable(list, oldIndex, newIndex));
  };

  return (
    <main className="w-full">
      <ListContainer>
        <h1 className="text-center py-7 text-[3rem]">My Shopping List</h1>
        <BaseButton className="w-full" onClick={handleAddItem} primary>
          + Add an item
        </BaseButton>
        <ShoppingList onSortEnd={onSortEnd} />
      </ListContainer>
      <AddItemModal />
    </main>
  );
}
