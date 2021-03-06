const TYPES = {

  GET_CHARACTERS_REQUEST: '',
  GET_CHARACTERS_SUCCESS: '',
  GET_CHARACTERS_FAILURE: '',

  GET_CHARACTER_DETAIL_REQUEST: '',
  GET_CHARACTER_DETAIL_SUCCESS: '',
  GET_CHARACTER_DETAIL_FAILURE: '',

  GET_EPISODE_REQUEST: '',
  GET_EPISODE_SUCCESS: '',
  GET_EPISODE_FAILURE: '',
  
  SET_FILTER_OPTIONS: '',

  LOGOUT: '',
};

Object.keys(TYPES).map(key => {
  TYPES[key] = key;
});

export { TYPES };
export default TYPES;
