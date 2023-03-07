import React, { useState, useEffect } from "react";
import { Artist as ArtistController } from "../../api";
import { useParams } from "react-router-dom";

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
  return (
    <div>
      <h1>Artist Screen</h1>
    </div>
  );
}
