import {React} from 'react';
import PhotoList from 'components/PhotoList';
import usePhotoList from "hooks/usePhotoList";

// Renders list of photos
const PhotoListBatch = (props) => {
  const listOfPhotos = usePhotoList(); //import the mockData containing photos and its info
  
  return (
    <PhotoList setClickedPhoto={props.setClickedPhoto} setModalOpen={props.setModalOpen} toggleFavImage={props.toggleFavImage} isActive={props.isActive} listOfPhotos={listOfPhotos} />
  );
};

export default PhotoListBatch;