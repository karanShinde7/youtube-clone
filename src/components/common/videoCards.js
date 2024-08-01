import React from "react";
import { formatNumber } from "../../utils/utilFunctions";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-1 m-2 w-72 shadow-lg min-h-56">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt={"thubmnail"}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">{channelTitle}</li>
        <li>{formatNumber(viewCount)} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-0.5 border border-gray-400">
      <VideoCards info={info} />
    </div>
  );
};

export default VideoCards;
