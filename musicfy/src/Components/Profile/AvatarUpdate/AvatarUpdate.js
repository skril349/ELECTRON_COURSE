import React from "react";
import "./AvatarUpdate.scss";
import { Image } from "semantic-ui-react";
import { defaultUser } from "../../../assets";

export function AvatarUpdate() {
  return (
    <div className="avatar-update">
      <Image src={defaultUser} />
    </div>
  );
}
