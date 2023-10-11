import {fragment, React} from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" >
      <img className="photo-list__image" src={props.sampleData.imageSource} /> <br />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleData.profile} />
        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{props.sampleData.username}</p>
          <p className="photo-list__user-location" >{props.sampleData.location.city + ", " + props.sampleData.location.country}</p>
        </div>        
     </section>
    </div>
  )
};

export default PhotoListItem;