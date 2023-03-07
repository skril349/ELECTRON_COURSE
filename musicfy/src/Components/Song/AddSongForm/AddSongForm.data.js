import * as Yup from "yup";

export function initialValues() {
  return {
    file: null,
    name: "",
    album: "",
  };
}

export function validationSchema() {
  return Yup.object({
    file: Yup.string().required(true),
    name: Yup.string().required(true),
    album: Yup.string().required(true),
  });
}
