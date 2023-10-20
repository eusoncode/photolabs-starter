import {React} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, isModalOpen, closeModal}) => {  
  console.log(selectedPhoto.id); //This should be 1
  return (
    // Render the modal only if isModalOpen is true
    isModalOpen && (
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
    )
  );
};

export default PhotoDetailsModal;
