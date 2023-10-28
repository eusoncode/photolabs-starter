import React from 'react';
import '../styles/PhotoFavButton.scss';

// Component for a favorite button with the ability to change its color
function PhotoFavButton({ isActive, handleIconClick }) {
  
  // Define the source for the heart icon based on isActive
  const heartIconSrc = isActive
    ? 'https://www.svgrepo.com/show/303487/heart-logo.svg'
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/812px-Heart_icon_red_hollow.svg.png';

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <img src={heartIconSrc} alt="Favorite Icon" style={{ width: '20px', height: '20px' }} />
      </div>
    </div>
  );
}

export default PhotoFavButton;