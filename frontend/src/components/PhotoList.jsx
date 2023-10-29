import { React } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

//Renders a list of PhotoListItems
const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.listOfPhotos.map((element, index) => 
        <PhotoListItem
          setClickedPhoto={() => { props.setClickedPhoto(element); props.setModalOpen(true) }}
          toggleFavImage={props.toggleFavImage}
          isActive={props.isActive}
          sampleDataForPhotoListItem={element} key={index}
        />          
      )}
    </ul>
  );
};

export default PhotoList;