import React, { useState, useCallback, useEffect } from "react";
import { Form, Image } from "semantic-ui-react";
import "./AddAlbumForm.scss";
import classNames from "classnames";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./AddAlbumForm.data";
import { useDropzone } from "react-dropzone";
import { noImage } from "../../../assets";
import { Artist } from "../../../api";
import { map } from "lodash";

const artistController = new Artist();

export function AddAlbumForm(props) {
  const { onClose } = props;
  const [artistsOptions, setArtistsOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.obtainAll();
        const newData = map(response, (artist) => ({
          key: artist.id,
          value: artist.id,
          text: artist.name,
        }));
        setArtistsOptions(newData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
            options={artistsOptions}
            value={formik.values.artist}
            onChange={(_, data) => formik.setFieldValue("artist", data.value)}
            error={formik.errors.artist}
          />
        </div>
      </div>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Crear album
      </Form.Button>
    </Form>
  );
}
