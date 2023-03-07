import React, { useState, useCallback } from "react";
import "./NewArtistForm.scss";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { noImage } from "../../assets";
import { useFormik } from "formik";
import classNames from "classnames";
import { initialValues, validationSchema } from "./NewArtistForm.data";

export function NewArtistForm(props) {
  const { onClose } = props;
  const [image, setImage] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile);
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
    <Form className="new-artist-form" onSubmit={formik.handleSubmit}>
      <div
        {...getRootProps()}
        className={classNames("new-artist-form__banner", {
          error: formik.errors.file,
        })}
      >
        <input {...getInputProps()}></input>
        <Image src={image || noImage} className={classNames({ full: image })} />
      </div>
      <Form.Input
        name="name"
        placeholder="Nombre del artista"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Crear artista
      </Form.Button>
    </Form>
  );
}
