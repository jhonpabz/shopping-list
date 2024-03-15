// @ts-nocheck
import * as yup from "yup";

const listSchema = yup
  .object({
    listName: yup.string(),
  })
  .required();

export default listSchema;
