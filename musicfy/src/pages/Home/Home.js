import React, { useState, useEffect } from "react";
import { Artist } from "../../api";
import "./Home.scss";
import { bannerHome } from "../../assets";
import { Slider } from "../../Components/Shared";
const artistController = new Artist();
export function Home() {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getLastArtist(5);
        setArtists(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="home-page">
      <div
        className="home-page__banner"
        style={{ backgroundImage: `url(${bannerHome})` }}
      ></div>

      <div className="home-page__slider">
        <h2>ultimos artistas</h2>
        {artists && <Slider data={artists} basPath="artists" song={false} />}
      </div>
      <div className="home-page__slider">
        <h2>ultimos allbumes</h2>
      </div>
      <div className="home-page__slider">
        <h2>ultimos canciones</h2>
      </div>
    </div>
  );
}
