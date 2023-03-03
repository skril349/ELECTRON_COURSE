import React from "react";
import "./Footer.scss";
import { Image, Input, Icon } from "semantic-ui-react";
import { Player } from "../../Shared/Player";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <Image src={null} />
        <p>song name</p>
      </div>
      <div className="footer__center">
        <Player />
      </div>
      <div className="footer__right">
        <Input
          label={<Icon name="volume up" />}
          type="range"
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </div>
  );
}
