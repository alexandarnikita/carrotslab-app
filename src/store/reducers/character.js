import { TYPES } from '../types';

const INITIAL_STATE = {
  characters: {},
  character_detail: {},
  episode: {},
  isFetching: false,
  filterOptions: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: { ...action.payload },
        isFetching: false,
      };
    case TYPES.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.GET_EPISODE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case TYPES.GET_EPISODE_SUCCESS:
      return {
        ...state,
        episode: { ...action.payload },
        isFetching: false,
      };
    case TYPES.GET_EPISODE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case TYPES.SET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: { ...action.payload },
      };
    default:
      return state;
  }
};
