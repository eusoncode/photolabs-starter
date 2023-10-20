import {React} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//Renders individual photoes and their favorite icons
const PhotoListItem = (props) => {
  const { id, user, urls, location } = props.sampleDataForPhotoListItem;
  const { city, country } = location;
  const { profile, name } = user;
  const { regular, full } = urls;

  return (
    <li key={id} className="photo-list__item" >
      <PhotoFavButton handleIconClick={() => props.toggleFavImage(id)} isActive={props.isActive(id)}  />
      <img className="photo-list__image" src={regular} /> <br />
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