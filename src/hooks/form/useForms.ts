import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import listSchema from "@/components/forms/validations/listSchema";

const listFormDefault = {
  listName: "",
};

export function useForms() {
  const listForm = useForm({
    mode: "onChange",
    resolver: yupResolver(listSchema),
    defaultValues: listFormDefault,
  });

  const onSubmitList: SubmitHandler<any> = async (formData: any) => {
    console.log("formData: ", formData);
  };
  return {
    listForm,
    onSubmitList,
  };
}
