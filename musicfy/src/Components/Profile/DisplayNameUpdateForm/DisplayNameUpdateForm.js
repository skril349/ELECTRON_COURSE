import React from "react";
import { Form } from "semantic-ui-react";

export function DisplayNameUpdateForm(props) {
  const { onCloseModal } = props;
  return (
    <Form>
      <Form.Input name="displayName" placeholder="Nombre y apellodos" />
      <Form.Button type="submit" primary fluid>
        Actualizar nombre
      </Form.Button>
    </Form>
  );
}
