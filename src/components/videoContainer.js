import React, { useEffect, useState } from "react";
import VideoCards from "./common/videoCards";
import { API_SET } from "../utils/url";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getYoutubeVideos = async () => {
    const popularVideos = await fetch(`${API_SET.GET_POPULAR_VIDEOS}`);
    const jsonResponse = await popularVideos.json();
    setVideos(jsonResponse.items);
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} className="cursor-pointer">
            <VideoCards key={video.id} info={video} />
          </Link>
        );
      })}
      {/* {videos.length > 0 && <VideoCards info={videos[0]} />} */}
    </div>
  );
};

export default VideoContainer;
