import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.listOfTopics.map((element, index) => 
        <TopicListItem sampleDataForTopicList={element} key={index} />          
      )}
    </div>
  );
};

export default TopicList;
