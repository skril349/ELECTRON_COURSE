import React, { useState, useEffect } from "react";
import { Album as AlbumController, Song } from "../../api";
import { useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import "./Album.scss";
import { AlbumInfo } from "../../Components/Albums/AlbumInfo/AlbumInfo";
import { ListSongs } from "../../Components";

const albumController = new AlbumController();
const songController = new Song();

export function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await songController.obtainAllByAlbum(id);
        setSongs(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

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
      <ListSongs songs={songs} miniature={album.image} />
    </div>
  );
}
