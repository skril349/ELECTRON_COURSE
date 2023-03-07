import React, { useState, useEffect } from "react";
import { Artist as ArtistController, Album, Song } from "../../api";
import { useParams } from "react-router-dom";
import "./Artist.scss";
import { ArtistBanner } from "../../Components/Artist";
import { Slider } from "../../Components";
import { map } from "lodash";

const artistController = new ArtistController();
const albumController = new Album();
const songController = new Song();

export function Artist() {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(id);
        setArtist(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbumsByArtist(id);
        console.log(response);
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (albums) {
      (async () => {
        try {
          let data = [];
          for await (const item of albums) {
            const result = await songController.obtainAllByAlbum(item.id);
            const dataTemp = map(result, (dataSong) => ({
              ...dataSong,
              image: item.image,
            }));
            data.push(...dataTemp);
            setSongs(data);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [albums]);

  if (!artist) return null;

  return (
    <div className="artist-page">
      <ArtistBanner image={artist.image} name={artist.name} />
      <div className="artist-page__slider">
        <h2>Albumes</h2>
        <Slider data={albums} basePath="albums" song={false} />
      </div>
      <div className="artist-page__slider">
        <h2>canciones</h2>
        <Slider data={songs} song={true} />
      </div>
    </div>
  );
}
