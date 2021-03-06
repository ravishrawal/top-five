import axios from 'axios';

//Action Types
const GET_PLAYLIST = 'GET_PLAYLIST';
const CREATE_PLAYLIST = 'CREATE_PLAYLIST';

//Action Creators

export const getPlaylist = (playlist) => {
  return {
    type: GET_PLAYLIST,
    playlist //JSON object
  };
};

export const createPlaylist = (playlist) => {
  return {
    type: CREATE_PLAYLIST,
    playlist //JSON object
  };
};

//Thunk Creators

export const getActivePlaylist = (playlistId) => {
  return (dispatch) => {
    axios.get(`/api/playlist/${playlistId}`)
    .then(playlist => dispatch(getPlaylist(playlist.data)) )
  };
};

export const newPlaylist = (name, userId) => {
  return (dispatch) => {
    axios.post('/api/playlist', {
      name,
      userId
    })
    .then(playlist => dispatch(createPlaylist(playlist)))
  };
};

//Reducers

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_PLAYLIST:
      return Object.assign({}, action.playlist);
    case GET_PLAYLIST:
      return Object.assign({}, action.playlist);
    default:
      return state;
  }
};
