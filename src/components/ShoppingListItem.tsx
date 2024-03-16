import { SortableElement } from "react-sortable-hoc";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import BaseButton from "./base/BaseButton";
import useShoppingList from "@/hooks/redux/useShoppingList";

const ShoppingListItem = SortableElement(
  (props: ComponentsPropsNamespace.ShoppingListItem) => {
    const { item, ...restProps } = props;

    const {
      state: { list },
      setList,
    } = useShoppingList();

    const handleDelete = () => {
      const updatedItems = list.filter(
        (listItem: { id: number }) => listItem.id !== item.id
      );
      setList(updatedItems);
    };

    return (
      <BaseComponentLayout {...restProps}>
        <li tabIndex={0} className="flex justify-between bg-slate-400 my-4">
          <span>{item.listName}</span>
          <span>{item.quantity}</span>

          <BaseButton className="!bg-red-500" onClick={handleDelete}>
            -
          </BaseButton>
        </li>
      </BaseComponentLayout>
    );
  }
);

export default ShoppingListItem;
