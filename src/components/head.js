import React, { useEffect, useState } from "react";
import { API_SET, ICON_SET } from "../utils/url";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/slice/appSlice";
import { storeCache } from "../redux/slice/searchSlice";
import ListItem from "./common/list-item";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      const searchTimer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestion(searchCache[searchQuery]);
        } else {
          callSearchAPI();
        }
      }, 200);

      // this will help in debouncing, timer will clear and new timer will get initialize as soon as useEffect calls
      return () => {
        clearTimeout(searchTimer);
      };
    } else {
      setSuggestion([]);
    }
  }, [searchQuery]);

  const callSearchAPI = async () => {
    const searchRes = await fetch(`${API_SET.GET_SEARCH_RESULT}${searchQuery}`);
    const searchJson = await searchRes.json();
    setSuggestion(searchJson[1]);
    dispatch(storeCache({ [searchQuery]: searchJson[1] }));
  };

  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10 mx-2 cursor-pointer"
          alt="menu-icon"
          src={ICON_SET.MENU_ICON_URL}
          onClick={handleToggleMenu}
        />
        <img
          className="h-10"
          alt="youtube-icon"
          src={ICON_SET.YOUTUBE_ICON_URL}
        />
      </div>
      <div className="col-span-10 flex">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="w-1/2 border border-gray-300 px-4 h-10 rounded-l-full"
          type="text"
        />
        <img
          src={ICON_SET.SEARCH_ICON_URL}
          alt="search-icon"
          className="cursor-pointer border border-gray-400 px-2 py-1 rounded-r-full bg-gray-100 h-10"
        />
        {showSuggestions && suggestion.length > 0 && (
          <div className="absolute rounded-lg w-[34%] shadow-lg bg-white py-1 px-4 mt-12 ml-1 border border-gray-100">
            <ul>
              {suggestion.map((suggestion, index) => {
                return (
                  <ListItem
                    key={index}
                    url={ICON_SET.SEARCH_ICON_URL}
                    itemName={suggestion}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img className="h-10" alt="user-icon" src={ICON_SET.USER_ICON_URL} />
      </div>
    </div>
  );
};

export default Head;
