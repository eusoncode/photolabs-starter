import {React, useState} from 'react';
import PhotoListBatch from 'components/PhotoListBatch';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoriteImages, setFavoriteImages] = useState([]);

  const isActive = (imageId) => { //check if the favorite icon is clicked or not
    return favoriteImages.includes(imageId)
  }

  const addFavorite = (imageId) => { // add favorite photo from the list of Favorite by image id
    setFavoriteImages(currentState => [...currentState, imageId])
  }

  const removeFavorite = (imageId) => { // remove favorite photo from the list of Favorite by image id
    setFavoriteImages(currentState => currentState.filter(currentId => currentId !== imageId))
  }

  const toggleFavImage = (imageId) => { //handle clicking of favorite icon to add or remove photo
    if (isActive(imageId)) {
      removeFavorite(imageId)
    } else {
      addFavorite(imageId)
    };
  }

  return (
    <div className="App">
      <HomeRoute isFavPhotoExist={favoriteImages.length>0} />
      <PhotoListBatch toggleFavImage={toggleFavImage} isActive={isActive} />
    </div>
  );
};

export default App;
