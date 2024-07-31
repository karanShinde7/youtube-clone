import React from "react";
import { ICON_SET } from "../utils/url";
import ListItem from "./common/list-item";
import ListHeader from "./common/list-header";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const appState = useSelector(state =>  state.app)
  const {isMenuOpen} = appState;

  if(!isMenuOpen) 
    return;

  return (
    <div className="p-5 shadow-lg w-56">
      <ul className="border-b-2 border-gray-300 my-4">
        <ListItem
          url={ICON_SET.HOME_ICON_URL}
          alt="home-icon"
          itemName={"Home"}
        />
        <ListItem
          url={ICON_SET.SHORTS_ICON_URL}
          alt="short-icon"
          itemName={"Shorts"}
        />
        <ListItem
          url={ICON_SET.SUBSCRIPTION_ICON_URL}
          alt="subscription-icon"
          itemName={"Subscriptions"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="music-icon"
          itemName={"Youtube Music"}
        />
      </ul>
      <ul className="border-b-2 border-gray-300 my-4">
        <ListHeader
          headerName={"You"}
          icon={ICON_SET.RIGHT_ICON_URL}
          iconName={"right-icon"}
        />
        <ListItem
          url={ICON_SET.YOUTUBE_CHANNEL_ICON_URL}
          alt="channel-icon"
          itemName={"Your channel"}
        />
        <ListItem
          url={ICON_SET.HISTORY_ICON_URL}
          alt="history-icon"
          itemName={"History"}
        />
        <ListItem
          url={ICON_SET.PLAYLIST_ICON_URL}
          alt="playlist-icon"
          itemName={"Playlist"}
        />
        <ListItem
          url={ICON_SET.YOUR_VIDEO_ICON_URL}
          alt="video-icon"
          itemName={"Your videos"}
        />
        <ListItem
          url={ICON_SET.WATCH_LATER_ICON_URL}
          alt="watch-icon"
          itemName={"Watch later"}
        />
        <ListItem
          url={ICON_SET.LIKE_ICON_URL}
          alt="like-icon"
          itemName={"Liked videos"}
        />
        <ListItem
          url={ICON_SET.DOWNLOAD_ICON_URL}
          alt="download-icon"
          itemName={"Download"}
        />
      </ul>
      <ul className="border-b-2 border-gray-300 my-4">
        <ListHeader headerName={"Subscriptions"} />
      </ul>
      <ul className="border-b-2 border-gray-300 my-4">
        <ListHeader headerName={"Explore"} />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="trending-icon"
          itemName={"Trending"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="shopping-icon"
          itemName={"Shopping"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="music-icon"
          itemName={"Music"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="movies-icon"
          itemName={"Movies"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="live-icon"
          itemName={"Live"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="game-icon"
          itemName={"Gaming"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="news-icon"
          itemName={"News"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="sports-icon"
          itemName={"Sports"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="course-icon"
          itemName={"Courses"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="fashion-icon"
          itemName={"Fashion & Beauty"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="podcast-icon"
          itemName={"Podcasts"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="play-icon"
          itemName={"Playables"}
        />
      </ul>
      <ul className="border-b-2 border-gray-300 my-4">
        <ListHeader headerName={"More from YouTube"} />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="studio-icon"
          itemName={"YouTube Studio"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="music-icon"
          itemName={"YouTube Music"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="kids-icon"
          itemName={"YouTube Kids"}
        />
      </ul>
      <ul className="border-b-2 border-gray-300 my-4">
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="setting-icon"
          itemName={"Settings"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="report-icon"
          itemName={"Report history"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="help-icon"
          itemName={"Help"}
        />
        <ListItem
          url={ICON_SET.MUSIC_ICON_URL}
          alt="feedback-icon"
          itemName={"Send feedback"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
