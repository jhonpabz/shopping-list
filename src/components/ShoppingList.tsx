import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function ShoppingList(
  props: ComponentsPropsNamespace.ShoppingList
) {
  const { children, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <ul className="flex flex-col">{children}</ul>
    </BaseComponentLayout>
  );
}
