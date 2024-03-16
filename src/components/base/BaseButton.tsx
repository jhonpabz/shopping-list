import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import { useMemo } from "react";

export default function BaseButton(props: ComponentsPropsNamespace.BaseButton) {
  const { children, onClick, type, primary = false, ...restProps } = props;

  const backGroundClass = useMemo(() => {
    return primary ? "bg-sky-500" : "bg-slate-500";
  }, [primary]);

  return (
    <BaseComponentLayout {...restProps}>
      <button
        type={type}
        onClick={onClick}
        className={`${backGroundClass} text-white min-w-[100px] px-5 py-2`}
      >
        {children}
      </button>
    </BaseComponentLayout>
  );
}
