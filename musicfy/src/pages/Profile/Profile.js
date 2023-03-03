import React, { useState } from "react";
import "./Profile.scss";
import { Button } from "semantic-ui-react";
import { User } from "../../api";
import { DisplayNameUpdateForm, AvatarUpdate } from "../../Components/Profile";
import { BasicModal } from "../../Components";

const userController = new User();

export function Profile() {
  const { displayName, email } = userController.getMe();
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const [titleModal, setTitleModal] = useState("");

  const onCloseModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openForm = (type) => {
    if (type === "displayName") {
      setTitleModal("Actualizar nombre y apellido");
      setContentModal(<DisplayNameUpdateForm onClose={onCloseModal} />);
    }

    if (type === "email") {
      setTitleModal("Actualizar email");
      setContentModal(<h1>Form email</h1>);
    }

    if (type === "password") {
      setTitleModal("Actualizar contraseña");
      setContentModal(<h1>Form password</h1>);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <h1>Configuración</h1>
        <div className="profile__block">
          <div>
            <AvatarUpdate />
            <span>{displayName}</span>
          </div>
          <Button onClick={() => openForm("displayName")}>Actualizar</Button>
        </div>
        <div className="profile__block">
          <span>Email: {email}</span>
          <Button onClick={() => openForm("email")}>Actualizar</Button>
        </div>
        <div className="profile__block">
          <span>Password: *** *** ***</span>
          <Button onClick={() => openForm("password")}>Actualizar</Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        onClose={onCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
