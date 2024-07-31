import { useEffect } from "react";
import { API_SET } from "../../utils/url";

export const useGetPopularVideos = () => {

  const getYoutubeVideos = async () => {
    const popularVideos = await fetch(`${API_SET.GET_POPULAR_VIDEOS}`);
    const jsonResponse = await popularVideos.json();
    return jsonResponse.items;
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);
};
