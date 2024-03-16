import { SortableContainer } from "react-sortable-hoc";
import useShoppingList from "@/hooks/redux/useShoppingList";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import ShoppingListItem from "@/components/ShoppingListItem";
import ShoppingListHeader from "@/components/ShoppingListHeader";

const ShoppingList = SortableContainer(
  (props: ComponentsPropsNamespace.ShoppingList) => {
    const { ...restProps } = props;

    const {
      state: { list },
    } = useShoppingList();

    return (
      <BaseComponentLayout {...restProps}>
        <ul className="flex flex-col">
          <ShoppingListHeader />
          {list.map((listItem: ItemType, index: any) => (
            <ShoppingListItem
              key={`item-${listItem.id}`}
              index={index}
              // @ts-ignore
              item={listItem}
            />
          ))}
        </ul>
      </BaseComponentLayout>
    );
  }
);

export default ShoppingList;
