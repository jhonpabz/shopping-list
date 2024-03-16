// @ts-nocheck
import * as yup from "yup";

const listSchema = yup
  .object({
    listName: yup.string().required("Please enter item name"),
    type: yup.string().required("Please select type"),
  })
  .required();

export default listSchema;
