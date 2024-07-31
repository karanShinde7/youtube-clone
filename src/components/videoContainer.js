import React, { useEffect, useState } from "react";
import VideoCards from "./common/videoCards";
import { API_SET } from "../utils/url";

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
    <div className="flex">
      {videos.map((video) => {
        return <VideoCards key={video.id} info={video} />
      })}
      {/* {videos.length > 0 && <VideoCards info={videos[0]} />} */}
    </div>
  );
};

export default VideoContainer;
