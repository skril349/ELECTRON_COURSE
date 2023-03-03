import React from "react";
import "./Player.scss";
import { Progress, Icon } from "semantic-ui-react";

export function Player() {
  const playing = false;
  return (
    <div className="player">
      <Icon name={playing ? "pause circle outline" : "play circle outline"} />
      <Progress progress="value" value={90} total={100} size="tiny" />
    </div>
  );
}
