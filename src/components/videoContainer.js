import React from "react";
import VideoCards, { AdVideoCard } from "./common/videoCards";
import { Link } from "react-router-dom";
import { useGetPopularVideos } from "./hooks/useGetPopularVideos";

const VideoContainer = () => {
  const videos = useGetPopularVideos();

  return (
    <div className="flex flex-wrap">
      {videos?.length > 0 && <AdVideoCard info={videos[0]} />}
      {videos &&
        videos?.map((video) => {
          return (
            <Link
              key={video.id}
              to={"/watch?v=" + video.id}
              className="cursor-pointer"
            >
              <VideoCards info={video} />
            </Link>
          );
        })}
      {/* {videos.length > 0 && <VideoCards info={videos[0]} />} */}
    </div>
  );
};

export default VideoContainer;
