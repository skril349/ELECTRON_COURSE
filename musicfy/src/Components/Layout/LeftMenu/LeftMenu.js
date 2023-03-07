import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./LeftMenu.scss";
import { BasicModal } from "../../Shared";
import { NewArtistForm } from "../../Artist";
import { AddAlbumForm } from "../../Albums/AddAlbumForm";
import { AddSongForm } from "../../Song/AddSongForm/AddSongForm";

export function LeftMenu() {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModl, setContentModal] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  const openModal = (type) => {
    if (type === "artists") {
      setTitleModal("Nuevo Artista");
      setContentModal(<NewArtistForm onClose={closeModal} />);
    }
    if (type === "albums") {
      setTitleModal("Nuevo album");
      setContentModal(<AddAlbumForm onClose={closeModal} />);
    }
    if (type === "songs") {
      setTitleModal("Nueva cancion");
      setContentModal(<AddSongForm onClose={closeModal} />);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="left-menu">
        <Menu secondary vertical fluid>
          <Menu.Item
            as={Link}
            to="/"
            name="Inicio"
            icon="home"
            active={isCurrentPage("/")}
          />
          <Menu.Item
            as={Link}
            to="/artists"
            name="Artistas"
            icon="users"
            active={isCurrentPage("/artists")}
          />
          <Menu.Item
            as={Link}
            to="/albums"
            name="Álbumes"
            icon="window maximize outline"
            active={isCurrentPage("/albums")}
          />
        </Menu>

        <Menu secondary vertical fluid>
          <Menu.Item
            name="Nueva canción"
            icon="plus"
            link
            onClick={() => openModal("songs")}
          />
          <Menu.Item
            name="Nuevo álbum"
            icon="plus"
            link
            onClick={() => openModal("albums")}
          />
          <Menu.Item
            name="Nuevo artista"
            icon="plus"
            link
            onClick={() => openModal("artists")}
          />
        </Menu>
      </div>

      <BasicModal
        show={showModal}
        onClose={closeModal}
        title={titleModal}
        children={contentModl}
      />
    </>
  );
}
