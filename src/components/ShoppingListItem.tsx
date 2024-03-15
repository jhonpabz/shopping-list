import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function ShoppingListItem(
  props: ComponentsPropsNamespace.ShoppingListItem
) {
  const { item, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <li className="flex justify-between">
        <span>{item.listName}</span>
        <span>{item.quantity}</span>
      </li>
    </BaseComponentLayout>
  );
}
