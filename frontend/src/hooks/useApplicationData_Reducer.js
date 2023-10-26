import { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  favoriteImages: [],
  isModalOpen: false,
  clickedPhoto: null,
  photoData: [],
  topicData: []
};

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_CLICKED_PHOTO: 'SET_CLICKED_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // Handle adding a favorite photo
      return { ...state, favoriteImages: [...state.favoriteImages, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      // Handle removing a favorite photo
      return {
        ...state,
        favoriteImages: state.favoriteImages.filter((id) => id !== action.payload.id),
      };

    case ACTIONS.SET_MODAL_OPEN:
      // Handle setting the modal open state
      return { ...state, isModalOpen: action.payload.isOpen };

    case ACTIONS.SET_CLICKED_PHOTO:
      // Handle setting the clicked photo
      return { ...state, clickedPhoto: action.payload.photo };
    
    case ACTIONS.SET_PHOTO_DATA :
      // Handle setting the photoData
      return { ...state, photoData: action.payload.photoData };
  
    case ACTIONS.SET_TOPIC_DATA :
      // Handle setting the photoData
      return { ...state, topicData: action.payload.topicData };
    
    case ACTIONS.GET_PHOTOS_BY_TOPICS :
      // Handle setting the photoData for a specific topic
      return { ...state, photoData: action.payload.topicPhotos };

    default:
      return state;
  }
}

// Note: Rendering a single component to build components in isolation
const useApplicationData_Reducer = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setModalOpen = (isOpen) => { // updates the Modal state
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: { isOpen } });
  };

  const setClickedPhoto = (photo) => { // Updates the Clicked Photo state
    dispatch({ type: ACTIONS.SET_CLICKED_PHOTO, payload: { photo } });
  };
  
  const isActive = (imageId) => { //check if the favorite icon is clicked or not, it will return true or false
    return state.favoriteImages.includes(imageId);
  }

  const addFavorite = (imageId) => { // add favorite photo from the list of Favorite by image id
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: imageId } });
  }

  const removeFavorite = (imageId) => { // remove favorite photo from the list of Favorite by image id
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: imageId } });
  }

  const closeModal = () => {
    // Close the modal by setting isModalOpen to false
    setModalOpen(false);
  }

  const toggleFavImage = (imageId) => { //handle clicking of favorite icon to add or remove photo
    if (isActive(imageId)) {
      removeFavorite(imageId);
    } else {
      addFavorite(imageId);
    }
  }

  // Fetching photos and topics when the page is rendered
  useEffect(() => {
    const promisePhotos = axios.get('/api/photos');
    const promiseTopics = axios.get('/api/topics');
  
    Promise.all([promisePhotos, promiseTopics])
      .then((arrayOfPhotosAndTopics) => {
        const photos = arrayOfPhotosAndTopics[0].data;
        const topics = arrayOfPhotosAndTopics[1].data;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photoData: photos } });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topicData: topics } });
      })
      .catch((error) => {
        console.error('Error fetching photos or topics:', error);
      });
  }, [])

  const setClickedTopic = (topic_id) => {
    // Fetch photos for the specific topic
    axios.get(`/api/topics/photos/${topic_id}`)
      .then((response) => {
        const topicPhotos = response.data;
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: { topicPhotos: topicPhotos } });
      })
      .catch((error) => {
        console.error('Error fetching photos by topic:', error);
      });
  };
  
  return {
    state,
    actions: {
      isActive,
      closeModal,
      toggleFavImage,
      setModalOpen,
      setClickedPhoto,
      setClickedTopic
    },
  };
};

export default useApplicationData_Reducer;
