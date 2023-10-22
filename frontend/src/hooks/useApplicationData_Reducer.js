import { useReducer } from 'react';

const initialState = {
  favoriteImages: [],
  isModalOpen: false,
  clickedPhoto: null,
};

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_MODAL_OPEN: 'SET_MODAL_OPEN',
  SET_CLICKED_PHOTO: 'SET_CLICKED_PHOTO',
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

  return {
    state,
    actions: {
      isActive,
      closeModal,
      toggleFavImage,
      setModalOpen,
      setClickedPhoto,
    },
  };
};

export default useApplicationData_Reducer;
