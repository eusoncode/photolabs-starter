import {React} from "react";

import "../styles/TopicListItem.scss";

// Renders a list of the topics
const TopicListItem = (props) => {
  const {handleIconClick, topicTitle} = props;

  return (
    <div className="topic-list__item" onClick={handleIconClick}>
      {topicTitle}
    </div>
  );
};

export default TopicListItem;