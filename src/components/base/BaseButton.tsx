import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { useMemo } from "react";

export default function BaseButton(props: ComponentsPropsNamespace.BaseButton) {
  const {
    children,
    onClick,
    type,
    primary = false,
    warning = false,
    ...restProps
  } = props;

  const backGroundClass = useMemo(() => {
    return primary ? "bg-sky-500" : warning ? "bg-red-500" : "bg-slate-500";
  }, [primary, warning]);

  return (
    <BaseComponentLayout {...restProps}>
      <button
        type={type}
        onClick={onClick}
        className={`${backGroundClass} text-white min-w-[70px] px-5 py-2 rounded`}
      >
        {children}
      </button>
    </BaseComponentLayout>
  );
}
