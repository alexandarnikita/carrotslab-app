import { TYPES } from '../types';

const INITIAL_STATE = {
  // Jwt token
  token: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
