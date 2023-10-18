import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//Rending the favorite icon 
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;
