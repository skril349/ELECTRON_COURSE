import React, { useState, useEffect } from "react";
import { Artist } from "../../api";

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
    <div>
      <h1>Artists screen</h1>
    </div>
  );
}
