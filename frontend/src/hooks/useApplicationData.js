import { useEffect, useReducer } from 'react';
import axios from 'axios';

// Define the initial state for the reducer
const initialState = {
  favoriteImages: [],
  isModalOpen: false,
  clickedPhoto: null,
  photoData: [],
  topicData: [],
};

// Define action types as constants
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_CLICKED_PHOTO: 'SET_CLICKED_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA', // Fixed the action type
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
};

// Define the reducer function to handle state updates
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

    case ACTIONS.SET_PHOTO_DATA:
      // Handle setting the photoData
      return { ...state, photoData: action.payload.photoData };

    case ACTIONS.SET_TOPIC_DATA:
      // Handle setting the topicData
      return { ...state, topicData: action.payload.topicData };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      // Handle setting the photoData for a specific topic
      return { ...state, photoData: action.payload.topicPhotos };

    default:
      return state;
  }
}

// Custom hook for managing application data with a reducer
const useApplicationData = () => {
  // Use the useReducer hook to manage state with the appReducer function
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action functions for updating the state
  const setModalOpen = (isOpen) => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: { isOpen } });
  };

  const setClickedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SET_CLICKED_PHOTO, payload: { photo } });
  };

  const isActive = (imageId) => {
    return state.favoriteImages.includes(imageId);
  }

  const addFavorite = (imageId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: imageId } });
  }

  const removeFavorite = (imageId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: imageId } });
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const toggleFavImage = (imageId) => {
    if (isActive(imageId)) {
      removeFavorite(imageId);
    } else {
      addFavorite(imageId);
    }
  }

  // Fetch photos and topics when the component is rendered
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
  }, []);

  // Fetch photos for a specific topic when clicked
  const setClickedTopic = (topic_id) => {
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
      setClickedTopic,
    },
  };
};

export default useApplicationData;