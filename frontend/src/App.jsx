import {React} from 'react';
import PhotoListBatch from 'components/PhotoListBatch';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import useApplicationData from "hooks/useApplicationData";
import useApplicationData_Reducer from "hooks/useApplicationData_Reducer";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Orgnizing our Logic
  const { state, actions } = useApplicationData_Reducer();
  const { favoriteImages, isModalOpen, clickedPhoto, photoData, topicData } = state;
  const { isActive, toggleFavImage, closeModal, setModalOpen, setClickedPhoto, setClickedTopic} = actions;

  return (
    <div className="App">
      <PhotoDetailsModal clickedPhoto={clickedPhoto} isModalOpen={isModalOpen} closeModal={closeModal} toggleFavImage={toggleFavImage} isActive={isActive}/>
      <HomeRoute setClickedTopic={setClickedTopic} topicData={topicData} isFavPhotoExist={favoriteImages.length > 0} />
      <PhotoListBatch photoData={photoData} setClickedPhoto={setClickedPhoto} setModalOpen={setModalOpen} toggleFavImage={toggleFavImage} isActive={isActive} />
    </div>
  );
};

export default App;