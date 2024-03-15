import BaseComponentLayout from "@/layouts/BaseComponentLayout";

export default function SelectField(
  props: ComponentsPropsNamespace.SelectField
) {
  const { name, label, form, register, options = [], ...restProps } = props;

  return (
    <BaseComponentLayout {...restProps}>
      <select {...register(name)}>
        {options.map((item: any) => (
          <option key={item.value} value="1">
            {item.title}
          </option>
        ))}
      </select>
    </BaseComponentLayout>
  );
}
