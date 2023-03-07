import React, { useState, useEffect } from "react";
import "./AlbumInfo.scss";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import { Artist } from "../../../api";

const artistController = new Artist();

export function AlbumInfo(props) {
  const {
    album: { name, image, artist },
  } = props;

  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(artist);
        console.log(response);
        setArtistData(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [props.album]);

  return (
    <div className="album-info">
      <Image src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        {artistData && (
          <p>
            De <Link to={`/artists/${artist}`}> {artistData.name}</Link>
          </p>
        )}
      </div>
    </div>
  );
}
