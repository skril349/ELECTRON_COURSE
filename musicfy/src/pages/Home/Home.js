import React, { useState, useEffect } from "react";
import { Artist, Album, Song } from "../../api";
import "./Home.scss";
import { bannerHome } from "../../assets";
import { Slider } from "../../Components/Shared";

const artistController = new Artist();
const albumController = new Album();
const songController = new Song();

export function Home() {
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [songs, setSongs] = useState(null);

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

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getLastAlbums(5);
        setAlbums(response);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await songController.getLastSongs(5);
        let data = [];
        for await (const item of response) {
          const song = item;
          const resultAlbum = await albumController.getAlbum(item.album);
          song.image = resultAlbum.image;
          data.push(song);
          console.log(song);
        }
        setSongs(data);

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
        {artists && <Slider data={artists} basePath="artists" song={false} />}
      </div>
      <div className="home-page__slider">
        <h2>ultimos allbumes</h2>
        {albums && <Slider data={albums} basePath="albums" song={false} />}
      </div>
      <div className="home-page__slider">
        <h2>ultimos canciones</h2>
        {songs && <Slider data={songs} song={true} />}
      </div>
    </div>
  );
}
