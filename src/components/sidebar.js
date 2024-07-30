import React from "react";
import {
  DOWNLOAD_ICON_URL,
  HISTORY_ICON_URL,
  HOME_ICON_URL,
  LIKE_ICON_URL,
  MUSIC_ICON_URL,
  PLAYLIST_ICON_URL,
  RIGHT_ICON_URL,
  SHORTS_ICON_URL,
  SUBSCRIPTION_ICON_URL,
  WATCH_LATER_ICON_URL,
  YOUR_VIDEO_ICON_URL,
  YOUTUBE_CHANNEL_ICON_URL,
} from "../url";
import ListItem from "./common/list-item";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-52">
      <ul className="border-b-2 border-gray-300 my-4">
        <ListItem url={HOME_ICON_URL} alt="home-icon" itemName={"Home"} />
        <ListItem url={SHORTS_ICON_URL} alt="short-icon" itemName={"Shorts"} />
        <ListItem
          url={SUBSCRIPTION_ICON_URL}
          alt="subscription-icon"
          itemName={"Subscriptions"}
        />
        <ListItem
          url={MUSIC_ICON_URL}
          alt="music-icon"
          itemName={"Youtube Music"}
        />
      </ul>
      <ul className="border-b-2 border-gray-300 my-4">
        <h1 className="font-bold text-lg ">
          You{" "}
          <img
            src={RIGHT_ICON_URL}
            alt="right-icon"
            className="inline-flex h-3 ml-9"
          />
        </h1>
        <ListItem
          url={YOUTUBE_CHANNEL_ICON_URL}
          alt="channel-icon"
          itemName={"Your channel"}
        />
        <ListItem
          url={HISTORY_ICON_URL}
          alt="history-icon"
          itemName={"History"}
        />
        <ListItem
          url={PLAYLIST_ICON_URL}
          alt="playlist-icon"
          itemName={"Playlist"}
        />
        <ListItem
          url={YOUR_VIDEO_ICON_URL}
          alt="video-icon"
          itemName={"Your videos"}
        />
        <ListItem
          url={WATCH_LATER_ICON_URL}
          alt="watch-icon"
          itemName={"Watch later"}
        />
        <ListItem
          url={LIKE_ICON_URL}
          alt="like-icon"
          itemName={"Liked videos"}
        />
        <ListItem
          url={DOWNLOAD_ICON_URL}
          alt="download-icon"
          itemName={"Download"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
