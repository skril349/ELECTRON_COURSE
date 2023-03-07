import React from "react";
import { Form, Image } from "semantic-ui-react";
import "./AddAlbumForm.scss";
import classNames from "classnames";

export function AddAlbumForm(props) {
  const { onClose } = props;
  return (
    <Form className="add-album-form">
      <div className="add-album-form__content">
        <div
          className={classNames("add-album-form__content-image", {
            error: false,
          })}
        >
          <Image src={null} className={classNames({ full: null })} />
        </div>
        <div className="add-album-form__content-inputs">
          <Form.Input name="name" placeholder="nombre del album" />
          <Form.Dropdown
            placeholder="el álbum pertenece..."
            fluid
            search
            selection
            options={[]}
          />
        </div>
      </div>
      <Form.Button type="submit" primary fluid>
        Crear album
      </Form.Button>
    </Form>
  );
}
