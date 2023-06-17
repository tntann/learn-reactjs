import React from "react";
import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item) => {
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            title={item.title}
            avatar={item.avatar || item.image}
            author={item.author}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
