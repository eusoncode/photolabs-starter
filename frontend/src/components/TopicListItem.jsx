import {Fragment, React} from "react";

import "../styles/TopicListItem.scss";

// Renders a list of the topics
const TopicListItem = (props) => {
  const {handleIconClick, sampleDataForTopicList} = props;
  const { title } = sampleDataForTopicList;

  return (
    <div className="topic-list__item" onClick={handleIconClick}>
      {title}
    </div>
  );
};

export default TopicListItem;
