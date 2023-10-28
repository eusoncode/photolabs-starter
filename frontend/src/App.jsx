import {React} from 'react';
import PhotoListHomeRoute from 'components/PhotoListHomeRoute';
import './App.scss';
import TopicListHomeRoute from 'routes/TopicListHomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData_Reducer from "hooks/useApplicationData_Reducer";

// Define the main App component
const App = () => {
  // Use the custom hook to manage application data
  const { state, actions } = useApplicationData_Reducer();
  const { favoriteImages, isModalOpen, clickedPhoto, photoData, topicData } = state;
  const { isActive, toggleFavImage, closeModal, setModalOpen, setClickedPhoto, setClickedTopic} = actions;

  return (
    <div className="App">
      <PhotoDetailsModal clickedPhoto={clickedPhoto} isModalOpen={isModalOpen} closeModal={closeModal} toggleFavImage={toggleFavImage} isActive={isActive}/>
      <TopicListHomeRoute setClickedTopic={setClickedTopic} topicData={topicData} isFavPhotoExist={favoriteImages.length > 0} />
      <PhotoListHomeRoute photoData={photoData} setClickedPhoto={setClickedPhoto} setModalOpen={setModalOpen} toggleFavImage={toggleFavImage} isActive={isActive} />
    </div>
  );
};

export default App;