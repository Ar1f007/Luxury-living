const reducer = (state, action) => {
  if (action.type === 'TOGGLE_MENU') {
    return { ...state, showMenu: !state.showMenu };
  }
  return state;
};

export default reducer;
