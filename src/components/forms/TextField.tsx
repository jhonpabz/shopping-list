import { useMemo } from "react";
import { Controller } from "react-hook-form";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function TextField(props: ComponentsPropsNamespace.TextField) {
  const {
    name,
    label,
    placeholder,
    required = true,
    changeListener = () => {},
    form,
    ...restProps
  } = props;

  const isError = !!form.formState.errors[name]?.message;

  const borderClass = useMemo(
    () =>
      isError
        ? "border-[#f56c6c] border-[0.5px]"
        : "border-[##409eff] border-[0]",
    [isError]
  );

  return (
    <BaseComponentLayout {...restProps}>
      <Controller
        name={name}
        control={form.control}
        rules={{ required }}
        render={({ field: { onChange, value } }) => (
          <div className="relative h-[84px] w-full">
            <label
              htmlFor={name}
              className="mb-2 block text-[12px] font-[600] text-black lg:mt-[10px] lg:text-[15px]"
            >
              {required && (
                <span className="mr-[4px] font-extrabold text-red-500">*</span>
              )}
              {label}
            </label>
            <input
              type="text"
              name={name}
              id={`input-${name}`}
              onChange={(event) => {
                onChange(event);
                changeListener(event);
              }}
              value={value}
              className={`block w-full rounded p-[9px] text-sm border-2 border-[#66666660] focus:border-[#409eff] ${borderClass}`}
              placeholder={placeholder}
            />
          </div>
        )}
      />
    </BaseComponentLayout>
  );
}
