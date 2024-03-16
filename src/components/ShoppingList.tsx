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
          {list.map((item: any, index: any) => (
            <ShoppingListItem
              key={`item-${item.id}`}
              index={index}
              item={item}
            />
          ))}
        </ul>
      </BaseComponentLayout>
    );
  }
);

export default ShoppingList;
