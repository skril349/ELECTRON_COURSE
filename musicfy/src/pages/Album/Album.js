import React, { useState, useEffect } from "react";
import { Album as AlbumController } from "../../api";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./Album.scss";
import { AlbumInfo } from "../../Components/Albums/AlbumInfo/AlbumInfo";

const albumController = new AlbumController();
export function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbum(id);
        setAlbum(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (!album) {
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );
  }
  return (
    <div className="album-page">
      <AlbumInfo album={album} />
    </div>
  );
}
