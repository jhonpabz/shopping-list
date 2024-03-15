import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function SelectField(
  props: ComponentsPropsNamespace.SelectField
) {
  const { name, label, form, register, options = [], ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <select
        className="w-full mb-4 p-2 border-[0.5px] rounded border-[#66666660] "
        {...register(name)}
      >
        {options.map((item: any) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </BaseComponentLayout>
  );
}
