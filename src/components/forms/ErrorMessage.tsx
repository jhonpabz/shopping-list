import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function ErrorMessage(
  props: ComponentsPropsNamespace.ErrorMessage
) {
  const { children, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <p className="text-[12px] text-red-500">{children}</p>
    </BaseComponentLayout>
  );
}
