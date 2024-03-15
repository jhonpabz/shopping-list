import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function ListContainer(
  props: ComponentsPropsNamespace.ListContainer
) {
  const { children, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <div className="mx-auto w-full max-w-[800px] px-[20px] md:px-[40px]">
        {children}
      </div>
    </BaseComponentLayout>
  );
}
