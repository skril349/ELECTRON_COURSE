import React from "react";
import "./Profile.scss";
import { Button } from "semantic-ui-react";
import { User } from "../../api";

const userController = new User();

export function Profile() {
  const { displayName, email } = userController.getMe();
  return (
    <div className="profile">
      <h1>Configuración</h1>
      <div className="profile__block">
        <div>
          <p>avatar</p>
          <span>{displayName}</span>
        </div>
        <Button onClick={() => console.log("cambiar displayName")}>
          Actualizar
        </Button>
      </div>
      <div className="profile__block">
        <span>Email: {email}</span>
        <Button onClick={() => console.log("cambiar email")}>Actualizar</Button>
      </div>
      <div className="profile__block">
        <span>Password: *** *** ***</span>
        <Button onClick={() => console.log("cambiar password")}>
          Actualizar
        </Button>
      </div>
    </div>
  );
}
