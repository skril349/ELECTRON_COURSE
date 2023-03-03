import React, { useCallback } from "react";
import "./AvatarUpdate.scss";
import { Image } from "semantic-ui-react";
import { defaultUser } from "../../../assets";
import { useDropzone } from "react-dropzone";

export function AvatarUpdate() {
  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="avatar-update" {...getRootProps()}>
      <input {...getInputProps()} />
      <Image src={defaultUser} />
    </div>
  );
}
