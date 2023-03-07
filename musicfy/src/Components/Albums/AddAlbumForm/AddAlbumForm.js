import React, { useState, useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import "./AddAlbumForm.scss";
import classNames from "classnames";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddAlbumForm.data";
import { useDropzone } from "react-dropzone";
import { noImage } from "../../../assets";

export function AddAlbumForm(props) {
  const { onClose } = props;

  const [image, setImage] = useState(noImage);
  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setImage(URL.createObjectURL(file));
    formik.setFieldValue("image", file);
    console.log(file);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <Form className="add-album-form" onSubmit={formik.handleSubmit}>
      <div className="add-album-form__content">
        <div
          {...getRootProps()}
          className={classNames("add-album-form__content-image", {
            error: formik.errors.image,
          })}
        >
          <input {...getInputProps()} />
          <Image src={image} />
        </div>
        <div className="add-album-form__content-inputs">
          <Form.Input
            name="name"
            placeholder="nombre del album"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Form.Dropdown
            placeholder="el álbum pertenece..."
            fluid
            search
            selection
            options={[]}
          />
        </div>
      </div>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Crear album
      </Form.Button>
    </Form>
  );
}
