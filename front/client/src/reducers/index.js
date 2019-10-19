import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "macarena", duration: "3:05" },
    { title: "shallow", duration: "2:45" },
    { title: "no scrubs", duration: "2:34" },
    { title: "Mambo n 5", duration: "3:46" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
