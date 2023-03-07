import React, { useState, useEffect } from "react";
import { Artist } from "../../api";
import "./Artists.scss";
import { ListArtist } from "../../Components/Artist";

const artistController = new Artist();

export function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.obtainAll();
        setArtists(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="artists-page">
      <h1>Artistas</h1>
      <ListArtist artists={artists} />
    </div>
  );
}
