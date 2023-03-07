import React, { useState, useEffect } from "react";
import { Artist as ArtistController, Album } from "../../api";
import { useParams } from "react-router-dom";
import "./Artist.scss";
import { ArtistBanner } from "../../Components/Artist";

const artistController = new ArtistController();
const albumController = new Album();

export function Artist() {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);

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

  if (!artist) return null;

  return (
    <div className="artist-page">
      <ArtistBanner image={artist.image} name={artist.name} />
      <div className="artist-page__slider">
        <h2>Albumes</h2>
      </div>
      <div className="artist-page__slider">
        <h2>canciones</h2>
      </div>
    </div>
  );
}
