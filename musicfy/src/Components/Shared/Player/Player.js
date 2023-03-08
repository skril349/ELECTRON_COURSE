import React, { useState } from "react";
import "./Player.scss";
import { Progress, Icon } from "semantic-ui-react";
import ReactPlayer from "react-player";
import { usePlayer } from "../../../hooks";

export function Player() {
  const { playing, song, pause, resume, volume } = usePlayer();
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const onProgress = (data) => {
    setTotalSeconds(data.loadedSeconds);
    setCurrentSeconds(data.playedSeconds);
    console.log(data);
  };

  return (
    <div className="player">
      <Icon
        name={playing ? "pause circle outline" : "play circle outline"}
        onClick={playing ? pause : resume}
      />
      <Progress
        progress="value"
        value={currentSeconds}
        total={totalSeconds}
        size="tiny"
      />

      <ReactPlayer
        url={song?.file}
        playing={playing}
        height={0}
        width={0}
        volume={volume}
        onProgress={onProgress}
      />
    </div>
  );
}
