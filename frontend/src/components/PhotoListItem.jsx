import {React} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//Renders individual photos and defines their favorite icons
const PhotoListItem = ({ setClickedPhoto, setModalOpen, sampleDataForPhotoListItem, toggleFavImage, isActive }) => {
  const { id, user, urls, location } = sampleDataForPhotoListItem;
  const { city, country } = location;
  const { profile, name } = user;
  const { regular} = urls;

  return (
    <li key={id} className="photo-list__item">
      <PhotoFavButton handleIconClick={() => toggleFavImage(id)} isActive={isActive(id)}  />
      <img className="photo-list__image" src={regular} onClick={setClickedPhoto}/> <br />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{name}</p>
          <p className="photo-list__user-location" >{`${city}, ${country}`}</p>
        </div>        
     </section>
    </li>
  )
};

export default PhotoListItem;