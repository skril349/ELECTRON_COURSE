import React, { useState, useEffect, useCallback } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import "./AddSongForm.scss";
import classNames from "classnames";
import { initialValues, validationSchema } from "./AddSongForm.data";
import { useDropzone } from "react-dropzone";

export function AddSongForm(props) {
  const { onClose } = props;
  const [songName, setSongName] = useState(null);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  const onDrop = useCallback(() => async (acceptedFile) => {
    const file = acceptedFile[0];
    setSongName(file.name);
    formik.setFieldValue("file", file);
    formik.setFieldValue("name", file.name);
    console.log(file);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="add-song-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="nombre de la cancion"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Form.Dropdown
        placeholder="asigna la canción a un album"
        fluid
        search
        selection
        options={[]}
      />
      <div
        {...getRootProps()}
        className={classNames("add-song-form__file", {
          error: formik.errors.file,
        })}
      >
        <input {...getInputProps()} />
        <Icon name="cloud upload" />
        <div>
          <p>
            arrastra tu canción o haz click <span>aquí</span>
          </p>
          {songName && <p className="song-name">{songName}</p>}
        </div>
      </div>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Subir canción
      </Form.Button>
    </Form>
  );
}
