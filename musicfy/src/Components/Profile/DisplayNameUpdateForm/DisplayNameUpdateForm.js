import React from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./DisplayNameUpdateForm.data";
import { User } from "../../../api";
import { async } from "@firebase/util";

const userController = new User();

export function DisplayNameUpdateForm(props) {
  const { onClose } = props;

  const { displayName } = userController.getMe();

  const formik = useFormik({
    initialValues: initialValues(displayName),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
      try {
        await userController.updateDisplayName(formValue.displayName);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="displayName"
        placeholder="Nombre y apellodos"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.errors.displayName}
      />
      <Form.Button loading={formik.isSubmitting} type="submit" primary fluid>
        Actualizar nombre
      </Form.Button>
    </Form>
  );
}
