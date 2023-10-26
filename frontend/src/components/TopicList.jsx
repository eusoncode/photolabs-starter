import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { listOfTopics } = props;

  if (!listOfTopics || !Array.isArray(listOfTopics) || listOfTopics.length === 0) {
    // Handle cases where listOfTopics is undefined or empty
    return <div>No topics available.</div>;
  }

  return (
    <div className="top-nav-bar__topic-list">
      {listOfTopics.map((topic) => 
        <TopicListItem sampleDataForTopicList={topic} key={topic.id} handleIconClick={() => props.setClickedTopic(topic.id)} />          
      )}
    </div>
  );
};

export default TopicList;
