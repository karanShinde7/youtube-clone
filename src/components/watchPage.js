import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/slice/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./commentsContainer";
import { LiveChat } from "./liveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-[100%] container px-20">
      <div className="p-4 w-[70%]">
        <iframe
          className="rounded-2xl"
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="p-4 w-[30%] h-[500px]">
        <LiveChat/>
      </div>
    </div>
  );
};

export default WatchPage;
