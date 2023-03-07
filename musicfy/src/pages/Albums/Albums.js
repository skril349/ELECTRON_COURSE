import React, { useState, useEffect } from "react";
import { Album } from "../../api";
import "./Albums.scss";
import { ListALbums } from "../../Components/Albums/ListAlbums/ListALbums";

const albumController = new Album();

export function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.obtainAll();
        setAlbums(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="albums-page">
      <h1>Albumes</h1>
      <ListALbums albums={albums} />
    </div>
  );
}
