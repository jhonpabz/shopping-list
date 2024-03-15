"use client";
import AddItemModal from "@/components/AddItemModal";
import ListContainer from "@/components/ListContainer";
import BaseButton from "@/components/base/BaseButton";
import useShoppingList from "@/hooks/redux/useShoppingList";

export default function Home() {
  const { showAddListModal } = useShoppingList();

  const handleAddItem = () => {
    showAddListModal();
  };
  return (
    <main className="w-full">
      Test
      <ListContainer>
        <BaseButton onClick={handleAddItem}>+ Add an item</BaseButton>
      </ListContainer>
      <AddItemModal />
    </main>
  );
}
