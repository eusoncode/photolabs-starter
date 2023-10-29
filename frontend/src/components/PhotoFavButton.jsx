import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

// Component for a favorite button with the ability to change its color
function PhotoFavButton({ isActive, handleIconClick }) {

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
