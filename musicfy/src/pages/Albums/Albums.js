import React, { useState, useEffect } from "react";
import { Album } from "../../api";

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
    <div>
      <h1>Albums screen</h1>
    </div>
  );
}
