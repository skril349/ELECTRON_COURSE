import React, { useState, useEffect } from "react";
import "./AlbumInfo.scss";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

export function AlbumInfo(props) {
  const {
    album: { name, image, artist },
  } = props;
  return (
    <div className="album-info">
      <Image src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>De *nombre del artista*</p>
      </div>
    </div>
  );
}
