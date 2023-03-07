import React, { useState, useEffect } from "react";
import { Album as AlbumController } from "../../api";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <h1>Album screen</h1>
    </div>
  );
}
