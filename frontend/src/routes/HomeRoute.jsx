import {React} from 'react';
import TopicList from 'components/TopicList';
// import useTopicList from "hooks/useTopicList";
import '../styles/TopNavigationBar.scss'
import '../styles/HomeRoute.scss'
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

// Note: Rendering the nav-bar section of the app
const HomeRoute = (props) => {
  const listOfTopics = props.topicData;
  return (
    <div className='top-nav-bar home-route'>
      <TopNavigation />
      <TopicList setClickedTopic={props.setClickedTopic} listOfTopics={listOfTopics} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default HomeRoute;