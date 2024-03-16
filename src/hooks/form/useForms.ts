import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import listSchema from "@/components/forms/validations/listSchema";
import { listFormDefault } from "@/utils/defaultValues";
import useShoppingList from "../redux/useShoppingList";

export function useForms() {
  const { setListItem, hideAddListModal } = useShoppingList();

  const listForm = useForm({
    mode: "onSubmit",
    resolver: yupResolver(listSchema),
    defaultValues: listFormDefault,
  });

  const onSubmitList: SubmitHandler<any> = async (formData: any) => {
    const { listName, quantity, type } = formData;
    const newItem = {
      listName,
      quantity,
      type,
      id: Date.now(),
    };
    setListItem(newItem);
    hideAddListModal();
  };

  return {
    listForm,
    onSubmitList,
  };
}
