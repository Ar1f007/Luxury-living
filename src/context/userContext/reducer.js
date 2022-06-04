const reducer = (state, action) => {
  if (action.type === 'USER_DATA') {
    return { ...state, user: action.payload.user };
  }

  if (action.type === 'LOGOUT') {
    return { ...state, user: null };
  }
  return state;
};

export default reducer;
