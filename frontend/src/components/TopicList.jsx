import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Renders the list of topic items
const TopicList = (props) => {
  const { listOfTopics } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {listOfTopics.map((topic) => 
        <TopicListItem sampleDataForTopicList={topic} key={topic.id} handleIconClick={() => props.setClickedTopic(topic.id)} />          
      )}
    </div>
  );
};

export default TopicList;
