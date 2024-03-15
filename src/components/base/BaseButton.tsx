import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function BaseButton(props: ComponentsPropsNamespace.BaseButton) {
  const { children, onClick, ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <button
        onClick={onClick}
        className="text-white min-w-[100px] px-5 py-2 bg-green-500"
      >
        {children}
      </button>
    </BaseComponentLayout>
  );
}
