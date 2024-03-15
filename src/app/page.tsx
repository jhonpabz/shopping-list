"use client";
import AddItemModal from "@/components/AddItemModal";
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
      <BaseButton onClick={handleAddItem}>+ Add an item</BaseButton>
      <AddItemModal />
    </main>
  );
}
