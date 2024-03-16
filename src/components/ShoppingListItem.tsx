import { SortableElement } from "react-sortable-hoc";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import BaseButton from "./base/BaseButton";
import useShoppingList from "@/hooks/redux/useShoppingList";
import { TextField } from "@/components/forms";

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
        <li tabIndex={0} className="flex justify-between my-4 gap-4">
          <TextField fieldValue={item.listName} readOnly />
          <TextField
            className="max-w-[90px]"
            fieldValue={item.quantity}
            readOnly
          />

          <BaseButton onClick={handleDelete} warning>
            -
          </BaseButton>
        </li>
      </BaseComponentLayout>
    );
  }
);

export default ShoppingListItem;
