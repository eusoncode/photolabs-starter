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
        <img className="photo-details-modal__image" src={clickedPhoto.urls.full} />
        <section className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={clickedPhoto.user.profile} />
          <div className="photo-details-modal__photographer-info">
            <p className="photo-details-modal__photographer-name">{clickedPhoto.user.name}</p>
            <p className="photo-details-modal__photographer-location" >{`${clickedPhoto.location.city}, ${clickedPhoto.location.country}`}</p>
          </div>        
        </section>
        <section className='photo-details-modal__images' >
          <PhotoList listOfPhotos={[...Object.values(clickedPhoto.similar_photos)]} toggleFavImage={toggleFavImage} isActive={isActive} />
        </section>     
      </div>
    )
  );
};

export default PhotoDetailsModal;
