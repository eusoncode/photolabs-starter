import {React} from 'react';

import '../styles/PhotoDetailsModal.scss'
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ clickedPhoto, isModalOpen, closeModal, toggleFavImage, isActive }) => { 
  return (
    // Render the modal only if isModalOpen is true
    isModalOpen && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-list__item" >          
          <img className="photo-details-modal__image" src={clickedPhoto.urls.full} /> <br />
          <section className="photo-list__user-details">
            <img className="photo-list__user-profile" src={clickedPhoto.user.profile} />
            <div className="photo-list__user-info">
              <p className="photo-list__user-name">{clickedPhoto.user.name}</p>
              <p className="photo-list__user-location" >{`${clickedPhoto.location.city}, ${clickedPhoto.location.country}`}</p>
            </div>        
          </section>
          <p>Similar Photos</p>
          <section className="photo-details-modal__images">  
            <PhotoList listOfPhotos={[...Object.values(clickedPhoto.similar_photos)]} toggleFavImage={toggleFavImage} isActive={isActive} />
          </section>
        </div>        
      </div>
    )
  );
};

export default PhotoDetailsModal;
