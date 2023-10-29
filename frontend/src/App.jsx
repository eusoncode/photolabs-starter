import {React} from 'react';
import PhotoListHomeRoute from 'routes/PhotoListHomeRoute';
import './App.scss';
import TopicListHomeRoute from 'routes/TopicListHomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";

// Define the main App component
const App = () => {
  // Use the custom hook to manage application data
  const { state, actions } = useApplicationData();
  const { favoriteImages, isModalOpen, clickedPhoto, photoData, topicData } = state;
  const { isActive, toggleFavImage, closeModal, setModalOpen, setClickedPhoto, setClickedTopic} = actions;

  return (
    <div className="App">      
      {isModalOpen && (
        <PhotoDetailsModal
          clickedPhoto={clickedPhoto}
          closeModal={closeModal}
          toggleFavImage={toggleFavImage}
          isActive={isActive}
        />
      )}
      <TopicListHomeRoute
        setClickedTopic={setClickedTopic}
        topicData={topicData}
        isFavPhotoExist={favoriteImages.length > 0}
      />
      <PhotoListHomeRoute
        photoData={photoData}
        setClickedPhoto={setClickedPhoto}
        setModalOpen={setModalOpen}
        toggleFavImage={toggleFavImage}
        isActive={isActive}
      />
    </div>
  );
};

export default App;