import { useMemo } from "react";
import BaseComponentLayout from "@/layouts/BaseComponentLayout";
import ErrorMessage from "@/components/forms/ErrorMessage";

export function SelectField(props: ComponentsPropsNamespace.SelectField) {
  const {
    name,
    label,
    form,
    register,
    options = [],
    required,
    ...restProps
  } = props;

  const isError = !!form.formState.errors[name]?.message;

  const borderClass = useMemo(
    () => (isError ? "border-[#f56c6c]" : "border-[#66666660]"),
    [isError]
  );

  return (
    <BaseComponentLayout {...restProps}>
      <div className="relative h-[84px]">
        <label
          htmlFor={name}
          className="mb-2 block text-[12px] font-[600] text-black lg:mt-[10px] lg:text-[15px]"
        >
          {required && (
            <span className="mr-[4px] font-extrabold text-red-500">*</span>
          )}
          {label}
        </label>
        <select
          className={`${borderClass} w-full p-2 border-[0.5px] rounded border-[#66666660]`}
          {...register(name)}
        >
          {options.map((item: any) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
        {isError && (
          <ErrorMessage>{form.formState.errors[name].message}</ErrorMessage>
        )}
      </div>
    </BaseComponentLayout>
  );
}
