import { useEffect, useState } from "react";
import photos from "../mocks/photos.js";

function usePhotoList() {
  const [list, setList] = useState([])
  
  useEffect(() => {
    setList(photos);
  }, [])

  return list;
}

export default usePhotoList;