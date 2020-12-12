import { TYPES } from '../types';
import { API } from '../api';

// Get Characters
export const getCharacters = params => (dispatch, getState) => {
  console.log('App: Store Action / getCharacters', params);
  
  if (getState().rootReducer.character.isFetching) {
    return Promise.reject();
  }

  dispatch({ type: TYPES.GET_CHARACTERS_REQUEST });

  return API.auth
    .getCharacters(params)
    .then(data => {
      console.log('App: Store Action / getCharacters: success');

      dispatch({ type: TYPES.GET_CHARACTERS_SUCCESS, payload: data });
      return data;
    })
    .catch(err => {
      console.log('App: Store Action / getCharacters: failed', JSON.stringify(err));

      dispatch({ type: TYPES.GET_CHARACTERS_FAILURE });
      return Promise.reject(err);
    });
};

// Get Episode
export const getEpisode = (id) => (dispatch, getState) => {
  console.log('App: Store Action / getEpisode');

  if (getState().rootReducer.character.isFetching) {
    return Promise.reject();
  }

  dispatch({ type: TYPES.GET_EPISODE_REQUEST });

  return API.auth
    .getEpisode(id)
    .then(data => {
      console.log('App: Store Action / getEpisode: success');

      dispatch({ type: TYPES.GET_EPISODE_SUCCESS, payload: data });
      return data;
    })
    .catch(err => {
      console.log('App: Store Action / getEpisode: failed', JSON.stringify(err));

      dispatch({ type: TYPES.GET_EPISODE_FAILURE });
      return Promise.reject(err);
    });
};

export const setFilterOptions = value => ({
  type: TYPES.SET_FILTER_OPTIONS,
  payload: value,
});
