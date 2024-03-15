import { SortableElement } from "react-sortable-hoc";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";

const ShoppingListItem = SortableElement(
  (props: ComponentsPropsNamespace.ShoppingListItem) => {
    const { item, ...restProps } = props;

    return (
      <BaseComponentLayout {...restProps}>
        <li tabIndex={0} className="flex justify-between bg-slate-400 my-4">
          <span>{item.listName}</span>
          <span>{item.quantity}</span>
        </li>
      </BaseComponentLayout>
    );
  }
);

export default ShoppingListItem;
