import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import listSchema from "@/components/forms/validations/listSchema";
import { listFormDefault } from "@/utils/defaultValues";
import useShoppingList from "../redux/useShoppingList";

export function useForms() {
  const { setListItem, hideAddListModal } = useShoppingList();

  const listForm = useForm({
    mode: "onSubmit", // the validation or passing of data will be triggered via on submit button
    resolver: yupResolver(listSchema), //listSchema is form the validation schema of the form
    defaultValues: listFormDefault, // default value of a form
  });

  const onSubmitList: SubmitHandler<any> = async (formData: ItemType) => {
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
