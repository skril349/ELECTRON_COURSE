import React, { useState, useEffect } from "react";
import { Artist as ArtistController } from "../../api";
import { useParams } from "react-router-dom";
import "./Artist.scss";
import { ArtistBanner } from "../../Components/Artist";

const artistController = new ArtistController();

export function Artist() {
  const { id } = useParams();

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

  const [artist, setArtist] = useState(null);

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
