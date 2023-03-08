import React from "react";
import "./Player.scss";
import { Progress, Icon } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { usePlayer } from "../../../hooks";

export function Player() {
  const { playing, song, pause, resume, volume } = usePlayer();
  return (
    <div className="player">
      <Icon
        name={playing ? "pause circle outline" : "play circle outline"}
        onClick={playing ? pause : resume}
      />
      <Progress progress="value" value={90} total={100} size="tiny" />

      <ReactPlayer
        url={song?.file}
        playing={playing}
        height={0}
        width={0}
        volume={volume}
      />
    </div>
  );
}
