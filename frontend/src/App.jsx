import {React} from 'react';
import PhotoListBatch from 'components/PhotoListBatch';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Orgnizing our Logic
  const { state, actions } = useApplicationData();
  const { favoriteImages, isModalOpen, clickedPhoto } = state;
  const { isActive, toggleFavImage, closeModal, setModalOpen, setClickedPhoto} = actions;

  return (
    <div className="App">
      <PhotoDetailsModal clickedPhoto={clickedPhoto} isModalOpen={isModalOpen} closeModal={closeModal} toggleFavImage={toggleFavImage} isActive={isActive}/>
      <HomeRoute isFavPhotoExist={favoriteImages.length > 0} />
      <PhotoListBatch setClickedPhoto={setClickedPhoto} setModalOpen={setModalOpen} toggleFavImage={toggleFavImage} isActive={isActive} />
    </div>
  );
};

export default App;