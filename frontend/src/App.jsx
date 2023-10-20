import {React, useState} from 'react';
import PhotoListBatch from 'components/PhotoListBatch';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from "./mocks/photos.js";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);
  // State to track modal visibility
  const [isModalOpen, setModalOpen] = useState(true);

  const isActive = (imageId) => { //check if the favorite icon is clicked or not
    return favoriteImages.includes(imageId)
  }

  const addFavorite = (imageId) => { // add favorite photo from the list of Favorite by image id
    setFavoriteImages(currentState => [...currentState, imageId])
  }

  const removeFavorite = (imageId) => { // remove favorite photo from the list of Favorite by image id
    setFavoriteImages(currentState => currentState.filter(currentId => currentId !== imageId))
  }

  const closeModal = () => {
    // Close the modal by setting isModalOpen to false
    setModalOpen(false);
  };

  const toggleFavImage = (imageId) => { //handle clicking of favorite icon to add or remove photo
    if (isActive(imageId)) {
      removeFavorite(imageId)
    } else {
      addFavorite(imageId)
    };
  }

  return (
    <div className="App">
      <PhotoDetailsModal selectedPhoto={photos[0]} isModalOpen={isModalOpen} closeModal={closeModal} />
      <HomeRoute isFavPhotoExist={favoriteImages.length > 0} />
      <PhotoListBatch toggleFavImage={toggleFavImage} isActive={isActive} />
    </div>
  );
};

export default App;


