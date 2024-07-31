import React from "react";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt={"thubmnail"}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
