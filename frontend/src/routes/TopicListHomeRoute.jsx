import {React} from 'react';
import TopicList from 'components/TopicList';
import '../styles/TopNavigationBar.scss'
import '../styles/HomeRoute.scss'
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

// Defines the Home route for the top navigation, list of topics and favorite badge
const TopicListHomeRoute = (props) => {
  const listOfTopics = props.topicData;
  return (
    <div className='top-nav-bar home-route'>
      <TopNavigation />
      <TopicList setClickedTopic={props.setClickedTopic} listOfTopics={listOfTopics} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );
};

export default TopicListHomeRoute;