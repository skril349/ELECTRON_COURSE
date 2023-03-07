import React, { useState, useEffect } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import "./AddSongForm.scss";
import classNames from "classnames";
import { initialValues, validationSchema } from "./AddSongForm.data";

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
        className={classNames("add-song-form__file", {
          error: false,
        })}
      >
        {/* <input/> */}
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
