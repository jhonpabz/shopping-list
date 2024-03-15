"use client";
import AddItemModal from "@/components/AddItemModal";
import ListContainer from "@/components/ListContainer";
import ShoppingList from "@/components/ShoppingList";
import ShoppingListItem from "@/components/ShoppingListItem";
import BaseButton from "@/components/base/BaseButton";
import useShoppingList from "@/hooks/redux/useShoppingList";

export default function Home() {
  const {
    state: { list },
    showAddListModal,
  } = useShoppingList();

  const handleAddItem = () => {
    showAddListModal();
  };
  return (
    <main className="w-full">
      Test
      <ListContainer>
        <BaseButton onClick={handleAddItem}>+ Add an item</BaseButton>
        <ShoppingList>
          {list.map((item: any) => (
            <ShoppingListItem key={item.id} item={item} />
          ))}
        </ShoppingList>
      </ListContainer>
      <AddItemModal />
    </main>
  );
}
