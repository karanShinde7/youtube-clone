import { useEffect, useState } from "react";
import { API_SET } from "../../utils/url";

export const useGetPopularVideos = () => {
  const [popularVideos, setPopularVideos] = useState("");

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const popularVideos = await fetch(`${API_SET.GET_POPULAR_VIDEOS}`);
    const jsonResponse = await popularVideos.json();
    setPopularVideos(jsonResponse.items);
  };

  return popularVideos;
};
