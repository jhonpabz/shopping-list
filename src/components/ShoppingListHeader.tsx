import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function ShoppingListHeader(
  props: ComponentsPropsNamespace.ShoppingListHeader
) {
  const { ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <li
        tabIndex={0}
        className="flex justify-between text-[0.7rem] md:text-[1rem] my-4 py-2 gap-1 md:gap-4 bg-gray-200 font-semibold"
      >
        <span className="ml-[45px] md:ml-[55px]">Item Name</span>
        <span className="mr-[107px] sm:mr-[120px] md:mr-[110px]">Quantity</span>
      </li>
    </BaseComponentLayout>
  );
}
