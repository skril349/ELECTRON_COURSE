import React, { useState, useEffect } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import "./AddSongForm.scss";
import classNames from "classnames";

export function AddSongForm(props) {
  const { onClose } = props;
  const [songName, setSongName] = useState(null);
  return (
    <Form className="add-song-form">
      <Form.Input name="name" placeholder="nombre de la cancion" />
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

      <Form.Button type="submit" primary fluid>
        Subir canción
      </Form.Button>
    </Form>
  );
}
