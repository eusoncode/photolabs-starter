import { useEffect, useState } from "react";
import photos from "../mocks/photos.js";

function usePhotoList() {
  const [favExist, setFavExist] = useState("");
 
  useEffect(() => {
    setFavExist(isFavPhotoExist);
  }, [])

  return list;
}

export default usePhotoList;