import update from 'update-by-path';
import types from './types';

const initReducer = () => {
  const INITIAL_STATE = {
    list: [],
  };

  const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
      case types.FETCH_USERS_SUCCESS:
        return update(state, { list: payload });
      case types.CREATE_USER_SUCCESS:
        return update(state, {
          list: list => list.concat(payload),
        });
      default:
        return state;
    }
  };
  
  return reducer;
};

export default initReducer;